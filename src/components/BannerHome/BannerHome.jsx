/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from "react-router-dom"
import ImageBanner from "../../assets/image/bannerImage.webp"
import { useDispatch } from 'react-redux'
import { sendModalMode } from '../../Redux/ModalSlice/ModalSlice';

export default function BannerHome() {

    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(sendModalMode("chooseYourMatch"))
    }

  return (
    <div className='bannerHome'>
        <div className='bannerHome-container'>
            <img 
                className='bannerHome-container-image'
                src={ImageBanner}
                alt="Image d'une pelouse de football avec un ballon et un tableau de formation" 
            />
            <h2 className='bannerHome-container-title'>
                Rejoignez l'aventure,
                déchiffrez les équipes mythiques et dévoilez les légendes 
                cachées derrière chaque composition historique du football
            </h2>
            <Link 
                className='bannerHome-container-link'
                onClick={toggleModal}
            >
                Essaye dès-maintenant
            </Link>
        </div>
    </div>
  )
}
