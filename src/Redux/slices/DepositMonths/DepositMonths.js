import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    DepositMonths: 0
}

const DepositMonthsSlice = createSlice({
    name: 'DepositMonths',
    initialState,
    reducers: {
        setDepositMonths: (state, {payload}) => {
            state.DepositMonths = payload 
        }
    }
})

export const DepositMonthsSelector = state => state.DepositMonths.DepositMonths

export const { setDepositMonths } = DepositMonthsSlice.actions

export default DepositMonthsSlice.reducer