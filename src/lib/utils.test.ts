import {
  goodTeam,
  goodTeamByCountry,
  goodTeamByPosition,
} from 'data/mockPlayers'
import { getPlayersByCountry, getPlayersByPosition } from './utils'

describe('Tests for lib', () => {
  test('function getPlayersByCountry', () => {
    expect(getPlayersByCountry(goodTeam)).toEqual(goodTeamByCountry)
  })
  test('function getPlayersByPosition', () => {
    expect(getPlayersByPosition(goodTeam)).toEqual(goodTeamByPosition)
  })
})
