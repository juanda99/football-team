export interface TeamPlayer {
  id: number
  firstname: string
  lastname: string
  img: string
  position: string
  country: string
}

/* http://json2ts.com/ generate typescript interfaces from json */

interface Country {
  id: string
  name: string
  cc: string
}

export interface Player {
  id: string
  name?: any
  common_name: string
  firstname: string
  lastname: string
  weight: string
  height: string
  age?: number
  img: string
  country: Country
}

export interface Squad {
  player: Player
  number: string
  captain?: any
  position: string
  order?: any
}

interface Data {
  formation?: any
  squad: Squad[]
}

interface Meta {
  requests_left: number
  user: string
  plan: string
  pages: number
  page: number
  count: number
}

export interface ApiPlayers {
  data: Data
  meta: Meta
}
