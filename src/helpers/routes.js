import { Navigate } from 'react-router-dom'
import { ConversBenefits } from '../Components/convers_Benefits/conversBenefits'
import { Gifts } from '../Components/convers_Benefits/gifts/gifts'
import BusinessHome from '../Components/HomePage/BusinessHome/BusinessHome'
import {HomePage} from '../Components/HomePage/HomePage'
import LoanDetails from '../Components/LoanDetails/LoanDetails'


const MAIN_ROUTES = [
   
    {
        path: "loanDetails",
        element: <LoanDetails/>,
        children : [
            {
                path : ":id",
                element : <LoanDetails/>,
            }
        ]
    },
    {
        path: "conversBenefits",
        element: <ConversBenefits/>,
        children : [
            [
                {
                    path : "gifts",
                    element : <Gifts/>,
                    children : [
                            {
                                path : ":id",
                                element : <Gifts/>,
                            },
                        ],
                },
            ],
                    
                    {
                        path : ":id",
                        element : <Gifts/>,
                    },
                    {
                        path : ":id",
                        element : <Gifts/>,
                    },
                    {
                        path : ":id",
                        element : <Gifts/>,
                    }
                ]
        
    },
    
    {
        path: "homePage",
        element: <HomePage/>,
        children : [
            {
                path : ":id",
                element : <HomePage/>,
            }
        ]
        
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