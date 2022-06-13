import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testArr: []
}

const testArrSlice = createSlice({
    name: 'testArr',
    initialState,
    reducers: {
        setTestArr: (state, {payload}) => {
            state.testArr = payload 
        }
    }
})

export const testArrSelector = state => state.testArr.testArr

export const { setTestArr } = testArrSlice.actions

export default testArrSlice.reducer