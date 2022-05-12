import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { TeamPlayer } from 'types'

/*
Warnings for:
Each team must have at least:
- 1 coach.
- 2 goalkeepers.
- 4 defenders.
- 4 midfielders.
- 2 attackers.
*/

type AppProps = {
  players: TeamPlayer[]
  minPlayers: number
  text?: string
}

const PlayerWarnings = ({
  players,
  minPlayers,
  text,
}: AppProps): JSX.Element => {
  const warnMinPlayers = minPlayers && players.length < minPlayers

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {warnMinPlayers && (
        <Alert severity="error">{`You need at least ${
          minPlayers - players.length
        } ${text} more`}</Alert>
      )}
    </Stack>
  )
}

export default PlayerWarnings
