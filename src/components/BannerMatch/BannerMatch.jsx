import React from 'react'

export default function BannerMatch({ title, category, score }) {

  return (
    <div className='bannerMatch'>
        <div className='bannerMatch-container'>
            <h3 className='bannerMatch-container-title'>
                {title}
            </h3>
            <p className='bannerMatch-container-category'>
                {category}
            </p>
            <p className='bannerMatch-container-score'>
                {score}
            </p>
        </div>
    </div>
  )
}
