import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { monthsSelector } from '../../../../../Redux/slices/Months/Months'
import { sumSelector } from '../../../../../Redux/slices/sum/sum'
import OptionsInfo from '../OptionsInfo/OptionsInfo'
import { symbolRate } from '../../../../../helpers/constants'
import './MonthlyPaid.css'

function MonthlyPaid (){
    const principal = useSelector(sumSelector)
    const interest = 16.9/100/12;
    const payments = useSelector(monthsSelector) 
    const x = Math.pow(1 + interest, payments);
    const monthly = (principal*x*interest)/(x-1);
    const symbolDram = symbolRate[0]

    let monthsPayment = 0
    let totalValue= 0
    let persentValue = 0

    if (isFinite(monthly) && 
        (monthly !== Number.POSITIVE_INFINITY) &&
        (monthly !== Number.NEGATIVE_INFINITY)) {
        monthsPayment = Math.round(monthly);
        totalValue = Math.round(monthly * payments);
        persentValue = Math.round((monthly * payments) - principal);
    }else {
        monthsPayment = 0
        totalValue= 0
        persentValue = 0
    }
    const resualt = monthsPayment.toLocaleString("ru") + ` ${symbolDram}`
    return(
        <div className='MonthlyPaidCont'>
         <div className='MonthlyPaidMain'>
            <span className='MonthlyTitle'> Ամսեկան վճար </span>         
            <span className='amountMoney'> { resualt  }  </span>
            <Divider/>
        </div>
        <OptionsInfo/>
        </div>
       
    )
}
export default MonthlyPaid