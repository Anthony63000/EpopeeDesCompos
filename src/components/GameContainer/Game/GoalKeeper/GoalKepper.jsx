
import { useSelector } from 'react-redux'
import Player from '../Player/Player'


export default function GoalKepper() {

   // on récupère les équipe qui joue pour leur attribuer le bon maillot
   const maillotDom = useSelector(state => state.gameSlice.dataGame.teams[0].maillot)
   const maillotExt = useSelector(state => state.gameSlice.dataGame.teams[1].maillot)

   // on récupère les id des gardien 
   const idGoalDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.goalKepper[0].id)
   const idGoalExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.goalKepper[0].id)

   // on récupère les noms des gardiens
  const nameGoalDom = useSelector(state => state.gameSlice.dataGame.teams[0].players.goalKepper[0].name)
  const nameGoalExt = useSelector(state => state.gameSlice.dataGame.teams[1].players.goalKepper[0].name)

  return (
    <>
      <div className='goalKepper-dom'>
        <Player
          maillotSrc={process.env.PUBLIC_URL + maillotDom}
          playerId={idGoalDom}
          playerName={nameGoalDom}
        />
      </div>
      <div className='goalKepper-ext'>
        <Player
          maillotSrc={process.env.PUBLIC_URL + maillotExt}
          playerId={idGoalExt}
          playerName={nameGoalExt}
        />
      </div>
    </>
  )
}
