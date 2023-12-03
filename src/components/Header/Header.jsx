
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { sendModalMode } from '../../Redux/ModalSlice/ModalSlice'

export default function Header() {

    const dispatch = useDispatch()

    const openModalToChooseMatch = () => {
        dispatch(sendModalMode("chooseYourMatch"))
    }

    const stateHeaderMode = useSelector(state => state.headerSlice.headerMode)

  return (
    <header>
        <div className='header'>
            <div className='header-left'>
                <Link 
                    className='header-left-link'
                    to={"/"}
                >
                    <h1 className='header-left-link-title'>
                        Épopée des Compos
                    </h1>
                </Link>
            </div>
            {stateHeaderMode === "headerHome" && (
                <div className='header-right'>
                    <nav className='header-right-nav'>
                        <Link 
                            className='header-right-nav-link'
                            onClick={openModalToChooseMatch}
                        >
                            Accèder au jeu
                        </Link>
                    </nav>
                </div>
            )}
            {stateHeaderMode === "headerMatch" && (
                <div className='header-right'>
                    <nav className='header-right-nav'>
                        <Link 
                            className='header-right-nav-link'
                        >
                            Plus d'information sur ce match
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    </header>
  )
}