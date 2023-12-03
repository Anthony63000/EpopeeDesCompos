import React from 'react'
import { useSelector } from 'react-redux'
import Player from '../Player/Player'

export default function FourDefenders() {

  const stateDefendersDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.defenders)
  const stateDefendersExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.defenders)

  return (
    <div className='defenders'>
      <div className='defenders-dom'>
        {stateDefendersDom.map((_,index) => (
          <div key={index}>
            <Player/>
          </div>
        ))}
      </div>
      <div className='defenders-ext'>
        {stateDefendersExt.map((_, index) => (
          <div key={index}>
            <Player/>
          </div>
        ))}
      </div>
    </div>
  )
}
