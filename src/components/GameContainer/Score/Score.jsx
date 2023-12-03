import React from 'react'

export default function Score() {
  return (
    <div className='score'>
        <div className='score-top'>
          <h3 className='score-top-title'>Score</h3>
        </div>
        <div className='score-value'>
          <p className='score-value-description'>
            56
          </p>
        </div>
        <div className='score-joker'>
          <button className='score-joker-button'>
              Première lettre (-10pts)
          </button>
          <button className='score-joker-button'>
              Nom du joueur (-20pts)
          </button>
        </div>
        <div className='score-restart'>
          <button className='score-restart-button'>
              Recommencer
          </button>
        </div>
    </div>
  )
}
