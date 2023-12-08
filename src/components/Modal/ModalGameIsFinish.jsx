import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendModalMode, switchModal } from '../../Redux/ModalSlice/ModalSlice';
import { restartGame } from '../../Redux/GameSlice/GameSlice';

export default function ModalGameIsFinish() {

  const dispatch = useDispatch()

  const stateScore = useSelector(state => state.gameSlice.score)

  // Ici nous gérons le clique sur le boutton voir le résultat
  const handleViewResult = () => {
    dispatch(sendModalMode(""))
  }

  // Ici nous allons gérer le clic sur le boutton choisir son match
  const handleChooseYourMatch = () => {
    dispatch(switchModal("chooseYourMatch"))
    dispatch(restartGame())
  }

  // Ici nous allons gérer le boutton recommencer la partie 
  const handleRestartGame = () => {
    dispatch(sendModalMode(""))
    dispatch(restartGame())
  }

  return (
    <div className='modalContainer-modalGameIsFinish'>
      <div className='modalContainer-modalGameIsFinish-top'>
          <h3 className='modalContainer-modalGameIsFinish-top-title'>
              Fin de la partie
          </h3>
      </div>
      <div className='modalContainer-modalGameIsFinish-middle'>
        <div className='modalContainer-modalGameIsFinish-middle-row'>
            <p className='modalContainer-modalGameIsFinish-middle-row-title'>
              Score final :
            </p>
            <p className='modalContainer-modalGameIsFinish-middle-row-value'>
              {stateScore}
            </p>
        </div>
      </div>
      <div className='modalContainer-modalGameIsFinish-bottom'>
        <button 
          className='modalContainer-modalGameIsFinish-bottom-button'
          onClick={handleRestartGame}
        >
          Recommencer
        </button>
        <button 
          className='modalContainer-modalGameIsFinish-bottom-button'
          onClick={handleChooseYourMatch}
        >
          Choisir un autre match 
        </button>
        <button 
          className='modalContainer-modalGameIsFinish-bottom-button'
          onClick={handleViewResult}
        >
          Voir le résultat du jeu
        </button>
      </div>
    </div>
  )
}
