import React from 'react'

import { useAppDispatch, useAppSelector } from 'app/hooks'
import { TeamPlayer } from 'types'
import Button from '@mui/material/Button'
import { addPlayer, selectPlayers } from './teamSlice'

type AppProps = {
  player: TeamPlayer
}

export function AddPlayer({ player }: AppProps): JSX.Element | null {
  const dispatch = useAppDispatch()
  const players = useAppSelector(selectPlayers)
  const { id } = player
  const addBtn = players[id] ? null : (
    <Button
      style={{ minWidth: 100 }}
      variant="contained"
      color="primary"
      onClick={() => dispatch(addPlayer(player))}
    >
      Add
    </Button>
  )
  // const addBtn = players[id] ? null : (
  //   <IconButton aria-label="delete" size="small">
  //     <FavoriteIcon
  //       fontSize="inherit"
  //       onClick={() => dispatch(addPlayer(player))}
  //     />
  //   </IconButton>
  // )
  return addBtn
}
