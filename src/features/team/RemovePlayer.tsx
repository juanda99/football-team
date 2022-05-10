import React from 'react'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { TeamPlayer } from 'types'
import Button from '@mui/material/Button'
import { removePlayer, selectPlayers } from './teamSlice'

type AppProps = {
  player: TeamPlayer
}

export function RemovePlayer({ player }: AppProps): JSX.Element | null {
  const dispatch = useAppDispatch()
  const players = useAppSelector(selectPlayers)
  const { id } = player
  // const removeBtn = players[id] ? (
  //   <IconButton aria-label="delete" size="small">
  //     <FavoriteBorderIcon
  //       fontSize="inherit"
  //       onClick={() => dispatch(removePlayer(id))}
  //     />
  //   </IconButton>
  // ) : null
  const removeBtn = players[id] ? (
    <Button
      style={{ minWidth: 100 }}
      variant="contained"
      color="error"
      onClick={() => dispatch(removePlayer(id))}
    >
      Remove
    </Button>
  ) : null
  return removeBtn
}
