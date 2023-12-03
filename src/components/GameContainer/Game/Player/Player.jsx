import { useState } from "react"
import maillotFrance from "../../../../assets/image/fra.webp"
import maillotArgentine from "../../../../assets/image/argentine.webp"
import { useSelector } from "react-redux"


export default function Player() {

  const [value, setValue] = useState("")

  // On récupère la valeur que l'utilisateur à entré
  const handleOnChangeValue = (e) => {
    const getValue = e.target.value;
    setValue(getValue)
  }

  // On vérifie les équipes qui jouent pour attribuer le bon maillot
  const stateTeam = useSelector(state => state.gameSlice.dataGame.teams)
  console.log(stateTeam)


  return (
    <div className='player'>
        <img 
            src={stateTeam} 
            alt="Maillot des joueurs" 
            className='player-image'
        />
        <input 
            type="text" 
            className='player-input'
            value={value}
            onChange={handleOnChangeValue}
        />
    </div>
  )
}
