import React from 'react'
import Card from './Card'
import ContextImage from "../../assets/image/Context.webp"
import CommentImage from "../../assets/image/comment.webp"
import JokerImage from "../../assets/image/Jocker.webp"
import ScoreImage from "../../assets/image/trophy.webp"

export default function Cards() {
  return (
    <div className='cards'>
        <div className='cards-row'>
            <Card
                cardsImage={ContextImage}
                title="But du jeu"
                description="Plongez au cœur de l'histoire du football avec notre 
                application dédiée aux matchs légendaires ! Revivez les moments 
                emblématiques où les grandes équipes ont marqué l'histoire du sport roi. 
                Notre plateforme vous propose une plongée immersive dans les compositions 
                tactiques mémorables de ces matchs mythiques. Testez vos connaissances et votre
                mémoire en reconstituant les équipes de ces rencontres inoubliables. 
                Découvrez les joueurs, les stratégies et les moments forts qui ont façonné le 
                football tel que nous le connaissons aujourd'hui. Faites partie de cette 
                aventure unique où vous êtes invités à retrouver les légendes du football à 
                travers leurs formations emblématiques"
            />
            <Card
                cardsImage={CommentImage}
                title="Comment ça marche ?"
                description="Dans notre application, explorez un catalogue de rencontres 
                emblématiques où chaque utilisateur devient le chef d'orchestre de sa 
                propre épopée footballistique. Choisissez parmi une sélection de matchs 
                légendaires et plongez-vous dans l'action. Votre mission ? Retrouver 
                les noms des joueurs ainsi que leur position sur le terrain lors de ces 
                moments historiques. À travers une interface conviviale, examinez les 
                compositions tactiques, faites correspondre les visages aux noms et placez 
                les joueurs à leurs positions respectives. Testez votre connaissance du jeu et 
                de ses protagonistes tout en revivant les instants qui ont écrit l'histoire du 
                football."
            />
        </div>
        <div className='cards-row'>
            <Card
                cardsImage={JokerImage}
                title="Les Jokers"
                description="Pendant le déroulement du jeu, 
                chaque joueur bénéficiera de trois jokers pour réaliser la 
                composition des équipes lors de ces matchs légendaires. 
                Ces jokers sont vos alliés pour vous aider à résoudre les compositions 
                en cas de difficulté. Utilisez-les stratégiquement pour obtenir des indices 
                précieux sur les joueurs et leurs positions. Faites appel à ces jokers avec 
                précaution et astuce pour avancer dans le jeu et relever le défi des 
                compositions tactiques des plus grands matchs de football."
            />
            <Card
                cardsImage={ScoreImage}
                title="Score final"
                description="Chaque joueur identifié correctement sera récompensé par un 
                nombre de points déterminé. En revanche, toute erreur dans la composition 
                des équipes se traduira par une déduction de points. Chaque bonne réponse 
                vous rapproche davantage de la victoire, tandis que chaque erreur vous coûtera 
                des points précieux. Faites preuve d'observation, de précision et de connaissances
                 pour maximiser vos points et atteindre le sommet du classement. 
                 Trouvez les joueurs avec justesse et évitez les erreurs pour accumuler 
                 le maximum de points et vous hisser au rang des connaisseurs incontestés 
                 du football légendaire"
            />  
        </div>
    </div>
  )
}
