import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headerMode: ""
}

const HeaderSlice = createSlice({
    name: "headerSlice",
    initialState,
    reducers: {
        headerHome : (state) => {
            state.headerMode = "headerHome"
        },
        headerMatch : (state) => {
            state.headerMode = "headerMatch"
        }
    }
})

export const {
    headerHome,
    headerMatch
} = HeaderSlice.actions

export default HeaderSlice.reducer