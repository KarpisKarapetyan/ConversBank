import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    giftsSelects: [ '', [] ]
}

const giftsSelectsSlice = createSlice({
    name: 'giftsSelects',
    initialState,
    reducers: {
        setGiftsSelects: (state, {payload}) => {
            state.giftsSelects[0] = payload 
        },
        setGiftscheckBoxSelects: (state, {payload}) => {
            state.giftsSelects[1] = payload 
        }
    }
})

export const giftsSelectsSelector = state => state.giftsSelects.giftsSelects[0]

export const giftsCheckSelectsSelector = state => state.giftsSelects.giftsSelects[1]

export const giftsMainArrSelector = state => state.giftsSelects.giftsSelects

export const { setGiftsSelects, setGiftscheckBoxSelects } = giftsSelectsSlice.actions

export default giftsSelectsSlice.reducer