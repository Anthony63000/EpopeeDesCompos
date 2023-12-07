import React from 'react'
import { useSelector } from 'react-redux'
import Player from '../Player/Player'

export default function FourDefenders() {

  // On récupère les joueurs de la défense de chaques équipes
  const stateDefendersDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.defenders)
  const stateDefendersExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.defenders)

  // on récupère les équipe qui joue pour leur attribuer le bon maillot
  const maillotDom = useSelector(state => state.gameSlice.dataGame.teams[0].maillot)
  const maillotExt = useSelector(state => state.gameSlice.dataGame.teams[1].maillot)

  return (
    <div className='defenders'>
      <div className='defenders-dom'>
        {stateDefendersDom.map((player ,index) => (
          <div key={index}>
            <Player
              maillotSrc={process.env.PUBLIC_URL + maillotDom}
              playerId={player.id}
              playerName={player.name}
            />
          </div>
        ))}
      </div>
      <div className='defenders-ext'>
        {stateDefendersExt.map((player, index) => (
          <div key={index}>
            <Player
              maillotSrc={process.env.PUBLIC_URL + maillotExt}
              playerId={player.id}
              playerName={player.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
