import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { TeamPlayer } from 'types'
import { getPlayersByCountry } from 'lib/utils'

/*
Warnings for:
- Maximum of 4 players from the same team.
- Team size limit to 16 players plus the coach.
*/

type AppProps = {
  players: TeamPlayer[]
  numPlayers: number
  maxCountryPlayers: number
}

type WarnPlayersByCountry = {
  totalPlayers: number
  country: string
}

const TeamWarnings = ({
  players,
  numPlayers,
  maxCountryPlayers,
}: AppProps): JSX.Element => {
  const playersByCountry = getPlayersByCountry(players)
  const warnPlayersByCountry: WarnPlayersByCountry[] = Object.values(
    playersByCountry
  )
    .filter((players) => players.length > maxCountryPlayers)
    .map((players) => ({
      totalPlayers: players.length,
      country: players[0].country,
    }))

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {warnPlayersByCountry.map(({ totalPlayers, country }) => (
        <Alert
          key={country}
          severity="error"
        >{`You need to reduce the players from ${country} from ${totalPlayers} to ${maxCountryPlayers}`}</Alert>
      ))}
      {players.length > numPlayers && (
        <Alert severity="error">{`You need to reduce your squad from ${players.length} to ${numPlayers}`}</Alert>
      )}
      {players.length < numPlayers && (
        <Alert severity="error">{`You need to increase your squad from ${players.length} to ${numPlayers}`}</Alert>
      )}
    </Stack>
  )
}

export default TeamWarnings
