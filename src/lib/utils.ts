import { TeamPlayer } from 'types'

export const getPlayersByCountry = (
  players: TeamPlayer[]
): Record<string, TeamPlayer[]> => {
  const initialValue: Record<string, TeamPlayer[]> = {}
  return players.reduce((acc, player) => {
    const { country } = player
    if (!acc[country]) {
      acc[country] = []
    }
    acc[country].push(player)
    return acc
  }, initialValue)
}

export const getPlayersByPosition = (
  players: TeamPlayer[]
): Record<keyof typeof teamByPosition, TeamPlayer[]> => {
  const teamByPosition: Record<string, TeamPlayer[]> = {
    G: [],
    D: [],
    M: [],
    F: [],
  }
  return Object.values(players).reduce((acc, player) => {
    const { position } = player
    acc[position as keyof typeof teamByPosition].push(player)
    return acc
  }, teamByPosition)
}
