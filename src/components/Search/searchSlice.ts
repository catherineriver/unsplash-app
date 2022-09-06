import { createSlice } from '@reduxjs/toolkit'
import {PhotoProps} from "../../types";

export interface SearchState {
    list: PhotoProps[];
}

const initialState = {
    list: [],
} as SearchState

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.list = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveData } = searchSlice.actions

export default searchSlice.reducer