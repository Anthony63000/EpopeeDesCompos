import React from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { sendModalMode } from '../../Redux/ModalSlice/ModalSlice';


export default function ModalMatchInfo({content}) {

    const dispatch = useDispatch()

    // fonction pour fermer la modal lors du clic
    const closeModal = () => {
        dispatch(sendModalMode(""))
    }

    // ici nous allons maintenant récupérer la desription du match selon le match choisis
    const stateDataMatchDescription = useSelector(state => state.gameSlice.dataGame.description)

  return (
    <div className='modalContainer-modalMatchInfo'>
        <div className='modalContainer-modalMatchInfo-top'>
            <h3 className='modalContainer-modalMatchInfo-top-title'>
                Informations sur ce match
            </h3>
            <FontAwesomeIcon icon={faXmark} 
              className='modalContainer-modalMatchInfo-top-close'
              onClick={closeModal}
            />
        </div>
        <div className='modalContainer-modalMatchInfo-middle'>
            <p className='modalContainer-modalMatchInfo-middle-content'>
                {stateDataMatchDescription}
            </p>
        </div>
        <div className='modalContainer-modalMatchInfo-bottom'>
        <button 
            className='modalContainer-modal-bottom-button'
            onClick={closeModal}
          >
              Fermer
          </button>
        </div>
    </div>
  )
}
