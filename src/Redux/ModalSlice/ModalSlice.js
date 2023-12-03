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
            state.modalContainerIsVisible = !state.modalContainerIsVisible
            state.modalMode = action.payload
        },
    }
})

export const {
    sendModalMode
} = ModalSlice.actions

export default ModalSlice.reducer