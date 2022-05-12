/* node.js script to populate countries */
// I get this data from api:
//  api.soccersapi.com/v2.2/teams/?user=${API_USER}&token=${API_TOKEN}&t=national&page=${page}
// As this data is not subject to change and its always needed before hand I process it on build time:
//  some pre-processing to get the data in the right format, see:
//  _.flow([
//   sortCountriesById,
//   uniqueCountries,
//   filterCountries,
//   sortCountriesByName,
// ]

import fs from 'fs'
import _ from 'lodash'
import fetch from 'node-fetch'
import path from 'path'
import { API_USER, API_TOKEN } from './settings.mjs'

const __dirname = path.resolve()

console.log('Static generation of countries.json file for better performance.')

global.fetch = fetch
let page = 1
async function fetchRequest(url) {
  try {
    // Fetch request and parse as JSON
    const url = `https://api.soccersapi.com/v2.2/teams/?user=${API_USER}&token=${API_TOKEN}&t=national&page=${page}`
    const response = await fetch(url)
    let data = await response.json()

    // Extract the url of the response's "next" relational Link header
    const { page: currentPage, pages } = data.meta
    page = Number(currentPage) < Number(pages) ? page + 1 : null
    let filterData = data.data.map(({ id, name }) => ({ id, name }))
    if (page) {
      let temp_data = await fetchRequest()
      filterData = [...filterData, ...temp_data]
    }
    return filterData
  } catch (err) {
    return console.error(err)
  }
}

/* some countries have more than one team with the same name */
const uniqueCountries = (countries) =>
  countries.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])

/* get just one team per country - absolute male teams */
const filterCountries = (countries) =>
  countries.filter((country) => {
    const re = /(U[12][0-9])|\(W\)/
    return !re.test(country.name)
  })

const sortCountriesById = (countries) => countries.sort((a, b) => +a.id - +b.id)

const sortCountriesByName = (countries) =>
  countries.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
/* just get one team per country */
const fixData = _.flow([
  sortCountriesById,
  uniqueCountries,
  filterCountries,
  sortCountriesByName,
])

fetchRequest().then((data) => {
  const countryTeams = fixData(data)
  fs.writeFile(
    path.join(__dirname, 'src', 'data', 'countries.json'),
    JSON.stringify(countryTeams),
    (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('countries.json file generated!')
      }
    }
  )
})
