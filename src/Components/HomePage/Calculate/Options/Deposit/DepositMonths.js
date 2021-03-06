import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setDepositMonths } from '../../../../../Redux/slices/DepositMonths/DepositMonths';
import { useConvertYear } from '../../../../../Hooks/useMonthsConvertYear';
import { useEffect, useState } from 'react';

export default function DepositMonths() {
  const [value, setValue] = useState(Number(sessionStorage.getItem('DepositMonths')) ||  10);
  const dispatch = useDispatch()
  const monthsConvertYear = useConvertYear
  const calculateValue = (value) =>  value;
  const handleChange = (event, newValue) =>  typeof newValue === 'number' &&  setValue(newValue)
  const valueLabelFormat = (value) => {  
    let scaledValue = null
    if(value<=12){
        scaledValue = value;
        return `${scaledValue} ամիս`;
    }
        scaledValue = monthsConvertYear(value , scaledValue)
        return scaledValue
}
useEffect(()=>{
  dispatch(setDepositMonths(value))
  sessionStorage.setItem("DepositMonths" , value)
},[value])
  

  return (
    <div className='calc_field'>
      <div style={{width : 300, marginTop : 30}}>
        <div style={{display : "flex" , justifyContent : "space-between"}}
                className='changeSum'>
                <span> Ավանդի ժամկետը</span>
                <span> {valueLabelFormat(calculateValue(value))} </span>    
            </div>
          <Slider
            size="small"
            value={value}
            min={3}
            step={1}
            max={60}
            scale={calculateValue}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
          />
          <div className='changeSumBottom'> 
                <span>Սկսած 3 ամսից </span>
                <span> մինչև 5 տարի</span>
            </div>   
        </div>
    </div>   
  );
}
