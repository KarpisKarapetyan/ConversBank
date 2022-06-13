import { Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { DepositMonthsSelector } from '../../../../../Redux/slices/DepositMonths/DepositMonths'
import { DepositSumSelector } from '../../../../../Redux/slices/DepositSum/DepositSum'
import DepositInfo from './DepositInfo'


function DepositPaid (){
    const sum = useSelector(DepositSumSelector)
    const months = useSelector(DepositMonthsSelector)
    const percent = Math.round(sum*16.9/100)
    const finalSum =  Math.round(percent + sum/months)
    // console.log(finalSum)
    return(
        <div className='MonthlyPaidCont'>
         <div className='MonthlyPaidMain'>
            <span className='MonthlyPaidFirstSpan'> Ամսեկան վճար </span>
            
            <span className='amountMoney'> {finalSum}  </span>
            <Divider/>
        </div>
        <DepositInfo/>         
        </div>
       
    )
}
export default DepositPaid