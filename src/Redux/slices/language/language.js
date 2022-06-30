import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGES } from "../../../contexts/LanguageProvider";

const initialState = {
    language: LANGUAGES[0]
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, {payload}) => {
            state.language = payload 
            
        }
    }
})

export const languageSelector = state => state.language.language

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer