import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataGame: "",
    inputEntrie : {},
    score : 0,
    inputError: "",
    playerIdInputFocused : "",
    revealedPlayerId: [],
    inputIsFocus: false,
    restartGameState : false,
    firstLetterPlayer : "",
    firstLetterPlayerError: "",
    playerFound : [],
    gameIsFinish : false
}

const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {
        // Ici nous récupérons les données du match en fonction du match choisi par l'utlisateur
        getdataGame : (state, action) => {
            state.dataGame = action.payload
        },
        //Ici nous allons récupérer les valeur des inputs que l'utilisateur à entré
        getPlayerValueFromUser : (state, action) => {
            const { playerId, getValue } = action.payload;
            state.inputEntrie[playerId] = getValue
        },
        // Ici nous allons mettre en place les erreur pour la soumissions des joueur
        errorInputIsEmpty : (state) => {
            state.inputError = "Veuillez renseigner un champs valide ! -10 points"
            state.score -= 10
        },
        errorValueInputNotMatch : (state) => {
            state.inputError = "Mauvaise réponse  -10 points"
            state.score -= 10
        },
        // Ici nous allons gérer les erreurs liées au joker pour révélé le nom entier du joueur
        errorNoInputSelected : (state) => {
            state.inputError = "Vous devez sélectionner un joueur avant de prendre votre joker"
        }, 
        // Ici nous ajoutons 50 points au score lorsque l'utilisateur trouve une bonne réponse
        addPointPlayerFound : (state, action) => {
            state.score += 50
            state.inputError = ""
            state.playerFound.push(action.payload)
        },
        // Ici nous allons révéler le nom du joueur et retirer 20 points à l'utilisateur
        getPlayerIdInputFocused : (state, action) => {
            state.playerIdInputFocused = action.payload
        },
        // Ici nous gérons le comportement du koker qui dévoile le nom du joueur
        jokerFoundPlayer : (state, action) => {
            state.score -= 20
            const { playerId } = action.payload;
            state.revealedPlayerId.push(playerId);
            state.inputError = ""
        },
        clearPlayerSelected : (state) => {
            state.playerIdInputFocused = ""
        },
        inputIsFocused : (state) => {
            state.inputIsFocus = !state.inputIsFocus
        },
        // Ici nous allons gérer le comportement du joker qui dévoile la première lettre
        jokerFoundFristLetter : (state, action) => {
            state.firstLetterPlayer = action.payload.charAt(0)
            state.inputError = ""
            state.score -= 10
        },
        jokerIsFinish : (state) => {
            state.firstLetterPlayer = ""
        },
        // Ici nous allons configurer pour recommencer la partie
        restartGame : (state) => {
            state.inputEntrie = {}
            state.score = 0
            state.inputError = ""
            state.playerIdInputFocused = ""
            state.revealedPlayerId = []
            state.restartGameState = !state.restartGameState
            state.playerFound = []
            state.gameIsFinish = false
        },
        // Ici on gère la fin de la partie 
        finishGame : (state) => {
            state.gameIsFinish = true
        },
    }
})

export const {
    getdataGame,
    getPlayerValueFromUser,
    addPointPlayerFound,
    errorValueInputNotMatch,
    errorInputIsEmpty,
    jokerFoundPlayer,
    getPlayerIdInputFocused,
    restartGame,
    errorNoInputSelected,
    clearPlayerSelected,
    inputIsFocused,
    jokerFoundFristLetter,
    jokerFoundFristLetterError,
    jokerIsFinish,
    finishGame
} = gameSlice.actions

export default gameSlice.reducer