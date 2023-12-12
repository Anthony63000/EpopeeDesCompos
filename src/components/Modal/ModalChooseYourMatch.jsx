import React, { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { sendModalMode } from '../../Redux/ModalSlice/ModalSlice';
import data from "../../assets/data/data.json";
import { useNavigate } from 'react-router-dom';

export default function ModalChooseYourMatch() {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMatch, setSelectedMatch] = useState("");
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate();

  // Fonction pour fermer la modal 
  const closeModal = () => {
    dispatch(sendModalMode(""))
  }

  // On récupère la saisie de la catégorie de l'utilisateur
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    setSelectedMatch("")
  }

  // On récupère la saisie du match de l'utilisateur
  const handleMatchChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedMatch(selectedValue)
    setError("")
  }

  // On filtre les données en fonction de la catégorie choisi
  const matchsOption = data.matchs
  const filteredMatchsByCategory = selectedCategory
    ? matchsOption.filter(match => match.category === selectedCategory)
    : matchsOption;

  // Fonction pour la confirmation et la redirection vers le bon match
  const handleSubmitMatch = () => {
    if(selectedMatch) {
      closeModal()
      navigate(`/Match/${selectedMatch}`)
    } else {
      setError("Vous n'avez selectionné aucun match")
    }
  }

  return (
    <div className='modalContainer-modal'>
        <div className='modalContainer-modal-top'>
           <h4 className='modalContainer-modal-top-title'>
                Choisis ton Match de légende
            </h4> 
            <FontAwesomeIcon icon={faXmark} 
              onClick={closeModal}
              className='modalContainer-modal-top-close'
            />
        </div>
        <div className='modalContainer-modal-middle'>
            <p className='modalContainer-modal-middle-text'>
              Ici tu vas pouvoir choisir parmis plusieurs match de légende.
            </p>
            <div className='modalContainer-modal-middle-bottom'>
              <label className='modalContainer-modal-middle-bottom-label' htmlFor="chooseMatch">
                  Choisis la catégorie :
              </label>
              <select 
                className='modalContainer-modal-middle-bottom-select' 
                name="chooseMatch" 
                id="select"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
              <option value="">Toutes</option>
                {matchsOption.map((match, index) => (
                  <option key={index} value={match.category}>
                    {match.category}
                  </option>
                ))}
              </select>
            </div>
            <div className='modalContainer-modal-middle-bottom'>
              <label className='modalContainer-modal-middle-bottom-label' htmlFor="chooseMatch">
                  Choisis ton match :
              </label>
              <select 
                className='modalContainer-modal-middle-bottom-select' 
                name="chooseMatch" 
                id="select"
                value={selectedMatch}
                onChange={handleMatchChange}
              >
              <option value="">Sélectionnez un match</option>
                {filteredMatchsByCategory.map((match, index) => (
                  <option key={index} value={match.matchName}>
                    {match.matchName}
                  </option>
                ))}
              </select>
            </div>
        </div>
        <div className='modalContainer-modal-bottom'>
          <p className='modalContainer-modal-bottom-danger'>
            {error}
          </p>
          <button 
            className='modalContainer-modal-bottom-button'
            onClick={handleSubmitMatch}
          >
              Confirmer
          </button>
        </div>
    </div>
  )
}
