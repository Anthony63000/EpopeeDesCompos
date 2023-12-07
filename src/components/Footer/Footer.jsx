/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import logoEntreprise from "../../assets/image/logoentreprise.png";
import maltLogo from "../../assets/image/malt.webp"
import linkedInLogo from "../../assets/image/LinkedIn_logo_initials.png.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div className='footer-left'>
              <img 
                src={logoEntreprise} 
                alt="Logo de l'entreprise du développeur Borel Anthony"
                className='footer-left-image' 
              />
              <p className='footer-left-text'>
                Application développé par Borel Anthony
                <br />
                Développeur web Html | Css | React
                <br />
                Clermont-Ferrand, Puy-de-dôme, France
              </p>
            </div>
            <div className='footer-middle'>
                <p className='footer-middle-text'>
                  © 2023 Borel Anthony. Tous droits réservés.
                </p>
            </div>
            <div className='footer-right'>
              <h5 className='footer-right-title'>
                Retrouvez moi sur 
              </h5>
              <div className='footer-right-row'>
                <Link 
                  className='footer-right-row-link' 
                  to={"https://www.malt.fr/profile/anthonyborel"} 
                  target='_blank'    
                >
                    <img 
                      className='footer-right-row-link-logo'
                      src={maltLogo} 
                      alt="Image du logo de la plateforme Malt" 
                    />
                </Link>  
                <Link 
                  className='footer-right-row-link'
                  to={"https://github.com/Anthony63000"}
                  target='_blank'
                >
                  <FontAwesomeIcon 
                    className='footer-right-row-link-logo' 
                    icon={faGithub} 
                  />
                </Link>
                <Link 
                  className='footer-right-row-link'
                  to={"https://www.linkedin.com/in/anthony-borel-180698268/"}
                  target='_blank'
                >
                  <img 
                    className='footer-right-row-link-logo'
                    src={linkedInLogo}
                    alt="Image du logo GitHub" 
                  />
                </Link>
              </div>
            </div>
        </div>
    </footer>
  )
}
