import React from 'react'
import { useSelector } from 'react-redux'
import Player from '../Player/Player'

export default function Forwards() {

  const stateForwardsDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.forwards)
  const stateForwardsExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.forwards)

  const stateFormationTeamDom = useSelector(state => state.gameSlice.dataGame.teams[0].formation)
  const stateFormationTeamExt = useSelector(state => state.gameSlice.dataGame.teams[1].formation)   

  let classFormationDom;  
  let classFormationDomElement;

  let classFormationExt;
  let classFormationExtElement;

// condition pour la formation du design au niveau des attaquants de terrain pour l'équipe à domicile 
  if(stateFormationTeamDom === "4231") {
    classFormationDom = "forwards-dom-4231"
    classFormationDomElement = "forwards-dom-4231-element"
  } else {
    classFormationDom = "forwards-dom"
    classFormationDomElement = ""
  }

  // condition pour la formation du design au niveau des attaquants de terrain pour l'équipe à l'exterieur
  if(stateFormationTeamExt === "4231") {
    classFormationExt = "forwards-ext-4231"
    classFormationExtElement = "forwards-ext-4231-element"
  } else {
    classFormationExt = "forwards-ext"
    classFormationExtElement = ""
  }

  // on récupère les équipe qui joue pour leur attribuer le bon maillot
  const maillotDom = useSelector(state => state.gameSlice.dataGame.teams[0].maillot)
  const maillotExt = useSelector(state => state.gameSlice.dataGame.teams[1].maillot)

  return (
    <div className='forwards'>
      <div className={classFormationDom}>
        {stateForwardsDom.map((player ,index) => (
          <div className={classFormationDomElement} key={index}>
            <Player
              maillotSrc={process.env.PUBLIC_URL + maillotDom}
              playerId={player.id}
              playerName={player.name}
            />
          </div>
        ))}
      </div>
      <div className={classFormationExt}>
        {stateForwardsExt.map((player, index) => (
          <div className={classFormationExtElement} key={index}>
            <Player
              maillotSrc={process.env.PUBLIC_URL + maillotExt}
              playerId={player.id}
              playerName={player.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}