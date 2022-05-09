/* node.js script to populate countries */
import { API_USER, API_TOKEN } from './settings.mjs'
import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'

const __dirname = path.resolve()

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

fetchRequest().then((data) => {
  console.log(
    'Static generation of countries.json file for better performance.'
  )
  fs.writeFile(
    path.join(__dirname, 'src', 'data', 'countries.json'),
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log('countries.json file generated!')
      }
    }
  )
})
