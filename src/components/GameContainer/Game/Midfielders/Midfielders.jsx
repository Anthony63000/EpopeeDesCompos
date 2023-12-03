import React from 'react'
import { useSelector } from 'react-redux'
import Player from '../Player/Player'

export default function Midfielders() {

  const stateMidfieldersDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.midfielders)
  const stateMidfieldersExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.midfielders)

  const stateFormationTeamDom = useSelector(state => state.gameSlice.dataGame.teams[0].formation)
  const stateFormationTeamExt = useSelector(state => state.gameSlice.dataGame.teams[1].formation)   

  let classFormationDom;
  let classFormationDomElement; 

  let classFormationExt;
  let classFormationExtElement;

  // condition pour la formation du design au niveau des milieux de terrain pour l'équipe à domicile 
  if(stateFormationTeamDom === "4-2-3-1") {
    classFormationDom = "midfielders-dom-4231"
    classFormationDomElement = "midfielders-dom-4231-element"
  } else if(stateFormationTeamDom === "4-3-3") {
    classFormationDom = "midfielders-dom-433"
    classFormationDomElement = "midfielders-dom-433-element"
  } else {
    classFormationDom = "midfielders-dom"
    classFormationDomElement = ""
  }

   // condition pour la formation du design au niveau des milieux de terrain pour l'équipe à l'exterieur
  if(stateFormationTeamExt === "4-2-3-1") {
    classFormationExt = "midfielders-ext-4231"
    classFormationExtElement = "midfielders-ext-4231-element"
  } else if(stateFormationTeamExt === "4-3-3") {
    classFormationExt = "midfielders-ext-433"
    classFormationExtElement = "midfielders-ext-433-element"
  } else {
    classFormationExt = "midfielders-ext"
    classFormationExtElement = ""
  }

  return (
    <div className='midfielders'>
      <div className={classFormationDom}>
        {stateMidfieldersDom.map((_,index) => (
          <div className={classFormationDomElement} key={index}>
            <Player/>
          </div>
        ))}
      </div>
      <div className={classFormationExt}>
        {stateMidfieldersExt.map((_, index) => (
          <div className={classFormationExtElement} key={index}>
            <Player/>
          </div>
        ))}
      </div>
    </div>
  )
}
