import { combineReducers } from "@reduxjs/toolkit";
import  testArrSlice from './slices/testInfo/testInfo'
import sumSlice from './slices/sum/sum'
import monthsSlice from './slices/Months/Months'
import DepositSumSlice from './slices/DepositSum/DepositSum'
import DepositMonthsSlice from './slices/DepositMonths/DepositMonths'
import searchSlice from "./slices/searchSlice/searchSlice";
import mainTabsSlice from './slices/mainTabs/mainTabs'
import languageSlice from "./slices/language/language"
import giftsSelectsSlice from "./slices/giftsSelects/giftsSelects";

export const rootReducer = combineReducers({
    testArr : testArrSlice,
    sum : sumSlice,
    months : monthsSlice,
    DepositSum : DepositSumSlice,
    DepositMonths : DepositMonthsSlice, 
    searchArr: searchSlice,
    mainTabs : mainTabsSlice,
    language: languageSlice,
    giftsSelects : giftsSelectsSlice
})