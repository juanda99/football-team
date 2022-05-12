import React, { useState, useEffect } from 'react'
import { useFetch } from 'hooks'
import PlayersGrid from 'components/PlayersGrid'
import Menu from 'components/Menu'
import { API_USER, API_TOKEN } from 'settings.mjs'
import { ApiPlayers } from 'types'
import Autocomplete from 'components/Autocomplete'
import LoadingProgress from 'components/LoadingProgress'
import countries from 'data/countries.json'

interface FetchProps {
  status: string
  error: string
  data: ApiPlayers
}

const TeamsListPage = (): JSX.Element => {
  const [country, setCountry] = useState<string>(
    () => localStorage.getItem('country') || 'Spain'
  )

  const countryId = countries.find((c) => c.name === country)?.id
  // api.soccersapi.com/v2.2/teams/?user=${apiUser}&token=${apiToken}&t=squad&id=${countryId}
  //  https://api.soccersapi.com/v2.2/teams/?user=juandacorreo&token=7283c63298d92adfccfffb26bead8f7c&t=squad&id=5
  const playersUrl =
    countryId &&
    `https://api.soccersapi.com/v2.2/teams/?user=${API_USER}&token=${API_TOKEN}&t=squad&id=${countryId}`

  const { status, error, data }: FetchProps = useFetch(playersUrl)

  function handleCountryChange(country: string) {
    setCountry(country)
  }

  useEffect(() => {
    // storing countryId from localstorage
    if (country) localStorage.setItem('country', country)
  }, [country])

  const options = countries.map((c) => c.name)

  const players = data?.data?.squad.map(({ player, position }) => {
    const {
      id,
      firstname,
      lastname,
      img,
      // hack get country from  selected country as some players have no country!
      // country: { name: country },
    } = player
    return {
      id: Number(id),
      firstname,
      lastname,
      img,
      country,
      position: position || 'D', // default to defender as API sometimes does not return position
    }
  })
  return (
    <main>
      <Menu />
      <h1>Select players!</h1>
      <Autocomplete
        options={options}
        value={country}
        onChange={handleCountryChange}
      />
      {status === 'fetching' && <LoadingProgress />}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetched' && <PlayersGrid players={players} />}
    </main>
  )
}

export default TeamsListPage
