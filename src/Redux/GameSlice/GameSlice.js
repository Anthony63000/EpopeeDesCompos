import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataGame: ""
}

const gameSlice = createSlice({
    name: "gameSlice",
    initialState,
    reducers: {
        getdataGame : (state, action) => {
            state.dataGame = action.payload
        }
    }
})

export const {
    getdataGame
} = gameSlice.actions

export default gameSlice.reducer