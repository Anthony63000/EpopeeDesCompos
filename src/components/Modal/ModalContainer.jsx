
import { useSelector } from 'react-redux'
import ModalChooseYourMatch from './ModalChooseYourMatch'
import ModalMatchInfo from './ModalMatchInfo'
import ModalGameIsFinish from './ModalGameIsFinish'

export default function ModalContainer() {

    const stateTypeOfModal = useSelector(state => state.modalSlice?.modalMode)

  return (
    <div className='modalContainer'>
        {stateTypeOfModal === "chooseYourMatch" && (
           <ModalChooseYourMatch/> 
        )}
        {stateTypeOfModal === "matchInfo" && (
          <ModalMatchInfo/>
        )}
        {stateTypeOfModal === "ModalGameIsFinish" && (
          <ModalGameIsFinish/>
        )}
    </div>
  )
}
