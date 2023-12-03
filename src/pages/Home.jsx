import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import BannerHome from '../components/BannerHome/BannerHome'
import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import ModalContainer from '../components/Modal/ModalContainer'
import { headerHome } from '../Redux/headerSlice/headerSlice'

export default function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(headerHome())
  }, [dispatch])

  const stateOfModalType = useSelector(state => state.modalSlice?.modalContainerIsVisible)

  return (
    <div className='app'>
      <Header/>
      <main>
        <BannerHome/>
        <Cards/>
      </main>
      <Footer/>
      {stateOfModalType && (
        <ModalContainer/>
      )}
    </div>
  )
}
