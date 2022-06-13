import { Navigate } from 'react-router-dom'
import {HomePage} from '../Components/HomePage/HomePage'
import LoanDetails from '../Components/LoanDetails/LoanDetails'


const MAIN_ROUTES = [
   
    {
        path: "loanDetails",
        element: <LoanDetails/>
    },
    {
        path: "homePage",
        element: <HomePage/>
    }

]

export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]