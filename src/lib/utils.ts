import { TeamPlayer, Coach } from 'types'

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

const coaches = [
  { name: 'Jorge Sampaoli', id: 1 },
  { name: 'Fernando Santos', id: 2 },
  { name: 'Didier Deschamps', id: 3 },
  { name: 'Arsène Wenger', id: 4 },
  { name: 'Jupp Heynckes', id: 5 },
  { name: 'Joachim Löw', id: 6 },
  { name: 'Jürgen Klopp', id: 7 },
  { name: 'Julen Lopetegui', id: 8 },
  { name: 'Mauricio Pochettino', id: 9 },
  { name: 'Diego Simeone', id: 10 },
  { name: 'Pep Guardiola', id: 11 },
]

export const getAllCoaches = (): Promise<Coach[]> => {
  return new Promise<Coach[]>((resolve, reject) => {
    setTimeout(() => resolve(coaches), Math.random() * 1000)
  })
}
