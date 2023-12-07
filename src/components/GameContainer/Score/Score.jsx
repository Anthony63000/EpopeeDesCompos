import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearPlayerSelected, errorNoInputSelected, jokerFoundFristLetter, jokerFoundPlayer, jokerIsFinish, restartGame } from '../../../Redux/GameSlice/GameSlice'

export default function Score() {

  const dispatch = useDispatch()

  const score = useSelector(state => state.gameSlice.score)
  const errorInput = useSelector(state => state.gameSlice.inputError)

  const statePLayerId = useSelector(state => state.gameSlice.playerIdInputFocused)
  const stateFirstLetter = useSelector(state => state.gameSlice.firstLetterPlayer)

  const isInputSelected = !!statePLayerId.playerId

  // Ici nous définissons le comportement du joker qui dévoile le nom entier du joueur
  const jokerFoundPlayerSubmit = () => {
    if (isInputSelected) {
      dispatch(jokerFoundPlayer({ playerId: statePLayerId.playerId }));
      dispatch(clearPlayerSelected());
      dispatch(jokerIsFinish())
    } else {
      dispatch(errorNoInputSelected());
      dispatch(jokerIsFinish())
    }
  };

  // Ici nous définissons le comportement du joker qui dévoile la première lettre du joueur 
  const handleJokerFoundFirstLetter = () => {
    if(isInputSelected) {
      dispatch(jokerFoundFristLetter(statePLayerId.playerName))
    } else {
      dispatch(errorNoInputSelected())
    }
  }

  // Ici nous définissons l'action de recommencer le jeu
  const handleRestartGame = () => {
    dispatch(restartGame())
  }

  return (
    <div className='score'>
        <div className='score-top'>
          <h3 className='score-top-title'>Score et Jokers</h3>
        </div>
        <div className='score-top'>
          {errorInput.length >= 1 && (
            <p className='score-top-error'>
              {errorInput}
            </p>
          )}
          {stateFirstLetter.length >= 1 && (
            <p className='score-top-firstLetter'> 
                La première lettre du nom du joueur est : <span className='score-top-firstLetter-span'>{stateFirstLetter}</span>
            </p>
          )}
        </div>
        <div className='score-value'>
          <p className='score-value-description'>
            {score}
          </p>
        </div>
        <div className='score-joker'>
          <button 
            className='score-joker-button'
            onClick={handleJokerFoundFirstLetter}
          >
              Première lettre (-10pts)
          </button>
          <button 
          onClick={jokerFoundPlayerSubmit}
          className='score-joker-button'>
              Nom du joueur (-20pts)
          </button>
        </div>
        <div className='score-restart'>
          <button 
              className='score-restart-button'
              onClick={handleRestartGame}
          >
              Recommencer
          </button>
        </div>
    </div>
  )
}
