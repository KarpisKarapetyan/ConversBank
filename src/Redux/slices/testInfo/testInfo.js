import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testArr: [3000, 130000]
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