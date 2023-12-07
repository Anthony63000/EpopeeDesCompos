/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ImageStade from "../../../assets/image/terrain.webp"
import GoalKepper from './GoalKeeper/GoalKepper'
import Defenders from "./Defenders/Defenders";
import Midfielders from './Midfielders/Midfielders';
import Forwards from './Forwards/Forwards';

export default function Game() {
  return (
    <div className='game'>
        <img 
            src={ImageStade}
            alt="Image vue du dessus d'un terrain de football" 
            className='game-image'
        />
        <div className='game-container'>
            <GoalKepper/>
            <Defenders/>
            <Midfielders/> 
            <Forwards/>
        </div>
    </div>
  )
}
