import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { monthsSelector } from '../../../../../Redux/slices/Months/Months'
import { sumSelector } from '../../../../../Redux/slices/sum/sum'
import OptionsInfo from '../OptionsInfo/OptionsInfo'
import './MonthlyPaid.css'

function MonthlyPaid (){
    const sum = useSelector(sumSelector)
    const months = useSelector(monthsSelector)
    const percent = Math.round(sum*16.9/100)
    const finalSum =  Math.round(percent + sum/months)

    // const x = Math.pow(1 + calcInterest , months)
    // const monthly = (sum * x * calcInterest) / (x-1)
    // const calcInterest = 16.9/100/12
    // console.log(finalSum)
    // if (isFinite(monthly)) {
    //     const monthlyPaymentCalculated = monthly.toFixed(2);
    //     const totalPaymentCalculated = (monthly * months).toFixed(2);
    //     const totalInterestCalculated = (monthly * months - sum).toFixed(2);
   
        
    //     setResults({
    //       monthlyPayment: monthlyPaymentCalculated,
    //       totalPayment: totalPaymentCalculated,
    //       totalInterest: totalInterestCalculated,
    //       isResult: true,
    //     });
    //   }
    return(
        <div className='MonthlyPaidCont'>
         <div className='MonthlyPaidMain'>
            <span className='MonthlyPaidFirstSpan'> Ամսեկան վճար </span>         
            <span className='amountMoney'> {finalSum}  </span>
            <Divider/>
        </div>
        <OptionsInfo/>
         
        </div>
       
    )
}
export default MonthlyPaid