import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { normalizeString, calculateLevenshteinDistance } from "../../../../helper/stringUtilis"; 
import {
  addPointPlayerFound,
  clearPlayerSelected,
  errorInputIsEmpty,
  errorValueInputNotMatch,
  finishGame,
  getPlayerIdInputFocused,
  getPlayerValueFromUser,
  inputIsFocused,
  jokerIsFinish
} from "../../../../Redux/GameSlice/GameSlice"; 

export default function Player({ maillotSrc, playerId, playerName }) {

  const revealedPlayerId = useSelector(state => state.gameSlice.revealedPlayerId);
  const playerFoundUser = useSelector(state => state.gameSlice.playerFound);
  const dispatch = useDispatch();
  const playerInputValue = useSelector(state => state.gameSlice.inputEntrie[playerId]);

  // Fonction appelée lors du changement de la valeur de l'input
  const handleOnChangeValue = (e) => {
    const getValue = e.target.value;
    dispatch(getPlayerValueFromUser({ playerId, getValue }));
  };

  // Fonction appelée lorsqu'on entre dans l'input
  const handleInputFocus = () => {
    dispatch(clearPlayerSelected());
    dispatch(inputIsFocused());
    dispatch(getPlayerIdInputFocused({ playerId, playerName }));
  };

  // Fonction appelée lorsqu'on sort de l'input
  const handleInputBlur = () => {
    const timer = setTimeout(() => {
      dispatch(clearPlayerSelected());
      dispatch(inputIsFocused());
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedPlayerName = normalizeString(playerName);
    const normalizedPlayerInputValue = normalizeString(playerInputValue);

    const distance = calculateLevenshteinDistance(
      normalizedPlayerName,
      normalizedPlayerInputValue
    );

    const toleranceThreshold = 1;

    // Comparaison avec tolérance à une erreur d'une lettre ou d'accents
    if (distance <= toleranceThreshold) {
      dispatch(addPointPlayerFound(playerName));
      dispatch(clearPlayerSelected());
      dispatch(jokerIsFinish());
    } else if (playerInputValue?.trim().length < 1) {
      dispatch(errorInputIsEmpty());
    } else if (playerInputValue !== playerName && playerInputValue?.trim().length > 1) {
      dispatch(errorValueInputNotMatch());
    }
  };

  // On défini le comportement de la fin de la partie
  useEffect(() => {
    if (playerFoundUser.length + revealedPlayerId.length === 2) {
      dispatch(finishGame());
    }
  }, [dispatch, playerFoundUser.length, revealedPlayerId.length]);
  
  return (
    <div className='player'>
      <img
        src={maillotSrc}
        alt="Maillot des joueurs"
        className='player-image'
      />
      {playerFoundUser.includes(playerName) || revealedPlayerId.includes(playerId) ? (
        <p className="player-playerName">
          {playerName}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='player-input'
            value={playerInputValue}
            onChange={handleOnChangeValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </form>
      )}
    </div>
  );
}
