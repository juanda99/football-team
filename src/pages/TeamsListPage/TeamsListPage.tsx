import React, { useState } from 'react'
import { useFetch } from 'hooks'
import PlayersGrid from 'components/PlayersGrid'
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
  const [countryId, setCountryId] = useState<number | null>()

  // api.soccersapi.com/v2.2/teams/?user=${apiUser}&token=${apiToken}&t=squad&id=${countryId}
  //  https://api.soccersapi.com/v2.2/teams/?user=juandacorreo&token=7283c63298d92adfccfffb26bead8f7c&t=squad&id=5
  const playersUrl =
    countryId &&
    `https://api.soccersapi.com/v2.2/teams/?user=${API_USER}&token=${API_TOKEN}&t=squad&id=${countryId}`

  const { status, error, data }: FetchProps = useFetch(playersUrl)

  function handleCountryChange(country: string) {
    const idCountry = countries.find((c) => c.name === country)?.id
    setCountryId(idCountry)
  }

  const options = countries.map((c) => c.name)

  const players = data?.data?.squad.map(({ player, position }) => {
    const {
      id,
      firstname,
      lastname,
      img,
      country: { name: country },
    } = player
    return {
      id: Number(id),
      firstname,
      lastname,
      img,
      country: country || '',
      position,
    }
  })
  return (
    <main>
      <Autocomplete options={options} onChange={handleCountryChange} />
      {status === 'fetching' && <LoadingProgress />}
      {status === 'error' && <div>{error}</div>}
      {status === 'fetched' && <PlayersGrid players={players} />}
    </main>
  )
}

export default TeamsListPage
