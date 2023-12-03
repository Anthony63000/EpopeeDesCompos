import { configureStore } from "@reduxjs/toolkit";

import ModalSliceReducer from "./ModalSlice/ModalSlice"
import headerSliceReducer from "./headerSlice/headerSlice";
import GameSliceReducer from "./GameSlice/GameSlice";


export const store = configureStore({
    reducer: {
        modalSlice: ModalSliceReducer,
        headerSlice : headerSliceReducer,
        gameSlice : GameSliceReducer
    }
})