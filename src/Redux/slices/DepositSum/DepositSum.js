import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    DepositSum: 0
}

const DepositSumSlice = createSlice({
    name: 'DepositSum',
    initialState,
    reducers: {
        setDepositSum: (state, {payload}) => {
            state.DepositSum = payload 
        }
    }
})

export const DepositSumSelector = state => state.DepositSum.DepositSum

export const { setDepositSum } = DepositSumSlice.actions

export default DepositSumSlice.reducer