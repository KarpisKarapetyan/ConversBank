import { combineReducers } from "@reduxjs/toolkit";
import  testArrSlice from './slices/testInfo/testInfo'
import sumSlice from './slices/sum/sum'
import monthsSlice from './slices/Months/Months'
import DepositSumSlice from './slices/DepositSum/DepositSum'
import DepositMonthsSlice from './slices/DepositMonths/DepositMonths'

export const rootReducer = combineReducers({
    testArr : testArrSlice,
    sum : sumSlice,
    months : monthsSlice,
    DepositSum : DepositSumSlice,
    DepositMonths : DepositMonthsSlice, 
})