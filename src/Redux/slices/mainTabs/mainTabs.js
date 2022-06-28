import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainTabs: false
}

const mainTabsSlice = createSlice({
    name: 'mainTabs',
    initialState,
    reducers: {
        setMainTabs: (state, {payload}) => {
            state.mainTabs = payload 
        }
    }
})

export const mainTabsSelector = state => state.mainTabs.mainTabs

export const { setMainTabs } = mainTabsSlice.actions

export default mainTabsSlice.reducer