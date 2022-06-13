import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    months: 0
}

const monthsSlice = createSlice({
    name: 'months',
    initialState,
    reducers: {
        setMonths: (state, {payload}) => {
            state.months = payload 
        }
    }
})

export const monthsSelector = state => state.months.months

export const { setMonths } = monthsSlice.actions

export default monthsSlice.reducer