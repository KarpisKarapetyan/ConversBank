import { Navigate } from 'react-router-dom'
import BusinessHome from '../Components/HomePage/BusinessHome/BusinessHome'
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
const businessROUTES = [
    {
        path: "businessHome",
        element: <BusinessHome/>
    },
    
]


export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: "*",
        element: <Navigate to="homePage"/>
    }
]
export const BUSINESSROUTES = [
    ...businessROUTES,
    {
        path : '*',
        element :  <Navigate to="businessHome"/>
    }
]