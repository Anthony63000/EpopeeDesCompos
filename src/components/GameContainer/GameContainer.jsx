import React from 'react'
import Game from './Game/Game'
import Score from './Score/Score'

export default function GameContainer() {
  
  return (
    <div className='gameContainer'>
        <Game/>
        {/*<Score/>*/}
    </div>
  )
}
