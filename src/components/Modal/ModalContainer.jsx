import React from 'react'
import { useSelector } from 'react-redux'
import ModalChooseYourMatch from './ModalChooseYourMatch'

export default function ModalContainer() {

    const stateTypeOfModal = useSelector(state => state.modalSlice?.modalMode)

  return (
    <div className='modalContainer'>
        {stateTypeOfModal === "chooseYourMatch" && (
           <ModalChooseYourMatch/> 
        )}
    </div>
  )
}
