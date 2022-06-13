import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sum: 0
}

const sumSlice = createSlice({
    name: 'sum',
    initialState,
    reducers: {
        setSum: (state, {payload}) => {
            state.sum = payload 
        }
    }
})

export const sumSelector = state => state.sum.sum

export const { setSum } = sumSlice.actions

export default sumSlice.reducer