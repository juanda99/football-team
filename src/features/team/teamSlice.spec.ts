import counterReducer, {
  TeamState,
  addPlayer,
  removePlayer,
  addCoach,
  removeCoach,
} from './teamSlice'

import { TeamPlayer } from 'types'

describe('team reducer', () => {
  const initialState: TeamState = {
    players: {},
    coach: '',
  }

  const teamPlayer: TeamPlayer = {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    img: '',
    position: '',
    country: '',
  }

  const initialStateWithPlayers: TeamState = {
    players: {
      1: teamPlayer,
    },
    coach: '',
  }

  const initialStateWithCoach: TeamState = {
    players: {},
    coach: 'currentCoach',
  }

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      players: {},
      coach: '',
    })
  })

  it('should handle addPlayer', () => {
    const actual = counterReducer(initialState, addPlayer(teamPlayer))
    expect(actual.players[1]).toEqual(teamPlayer)
  })

  it('should handle removePlayer', () => {
    const actual = counterReducer(initialStateWithPlayers, removePlayer(1))
    expect(actual.players).toEqual({})
  })

  it('should handle addCoach', () => {
    const actual = counterReducer(initialState, addCoach('currentCoach'))
    expect(actual.coach).toEqual('currentCoach')
  })

  it('should handle removeCoach', () => {
    const actual = counterReducer(initialStateWithCoach, removeCoach())
    expect(actual.coach).toEqual('')
  })
})
