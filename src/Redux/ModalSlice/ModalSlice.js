import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalMode: "",
    modalContainerIsVisible: false
}

const ModalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        sendModalMode : (state, action) => {
            state.modalMode = action.payload
            state.modalContainerIsVisible = !state.modalContainerIsVisible;
        },
        switchModal : (state, action) => {
            state.modalMode = action.payload
        }
    }
})

export const {
    sendModalMode,
    switchModal
} = ModalSlice.actions

export default ModalSlice.reducer