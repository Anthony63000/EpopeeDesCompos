import React from 'react'

export default function Card({ cardsImage, altCardsImage, title, description }) {
  return (
    <div className='cards-row-container'>
        <img 
            src={cardsImage} 
            alt={altCardsImage} 
            className='cards-row-container-image'
        />
        <h3 className='cards-row-container-title'>
            {title}
        </h3>
        <p className='cards-row-container-description'>
            {description}
        </p>
    </div>
  )
}
