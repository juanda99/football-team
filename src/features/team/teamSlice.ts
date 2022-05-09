import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { TeamPlayer } from 'types'

export interface TeamState {
  players: Record<number, TeamPlayer>
  coach: string
}

// State as array of objects or object keyed by id?
// better second way for simplicity of the reducer (also for performance but not an issue here)

const initialState: TeamState = {
  players: {},
  coach: '',
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPlayer: (state, action: PayloadAction<TeamPlayer>) => {
      state.players[action.payload.id] = action.payload
    },
    removePlayer: (state, action: PayloadAction<number>) => {
      delete state.players[action.payload]
    },
    addCoach: (state, action: PayloadAction<string>) => {
      state.coach = action.payload
    },
    removeCoach: (state) => {
      state.coach = ''
    },
  },
})

export const { addPlayer, removePlayer, addCoach, removeCoach } =
  teamSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPlayers = (state: RootState) => state.team.players
export const selectCoach = (state: RootState) => state.team.coach

export default teamSlice.reducer
