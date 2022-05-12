import React from 'react'
import { useAppSelector } from 'app/hooks'
import { selectPlayers } from 'features/team/teamSlice'
import PlayersGrid from 'components/PlayersGrid'
import Menu from 'components/Menu'
import { TeamPlayer } from 'types'
import PlayerWarnings from 'components/PlayerWarnings'
import TeamWarnings from 'components/TeamWarnings'
import { getPlayersByPosition } from 'lib/utils'

const TeamPage = (): JSX.Element => {
  const players: Record<string, TeamPlayer> = useAppSelector(selectPlayers)
  const playersByPosition = getPlayersByPosition(Object.values(players))
  return (
    <main>
      <Menu />
      <h1>This is my team!</h1>
      <p>
        The players you have chosen are detailed below. Errors may appear if you
        do not meet all the requirements.
      </p>
      <TeamWarnings
        players={Object.values(players)}
        numPlayers={16}
        maxCountryPlayers={4}
      />
      <h2>Goalkeeper</h2>
      <PlayersGrid players={playersByPosition.G} hidePosition={true} />
      <PlayerWarnings
        players={playersByPosition.G}
        minPlayers={2}
        text="goalkeeper players"
      />
      <h2>Defender</h2>
      <PlayersGrid players={playersByPosition.D} hidePosition={true} />
      <PlayerWarnings
        players={playersByPosition.D}
        minPlayers={4}
        text="defender players"
      />
      <h2>Midfielder</h2>
      <PlayersGrid players={playersByPosition.M} hidePosition={true} />
      <PlayerWarnings
        players={playersByPosition.M}
        minPlayers={4}
        text="midfielder players"
      />
      <h2>Forward</h2>
      <PlayersGrid players={playersByPosition.F} hidePosition={true} />
      <PlayerWarnings
        players={playersByPosition.F}
        minPlayers={2}
        text="forwared players"
      />
    </main>
  )
}

export default TeamPage
