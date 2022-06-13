
import * as React from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setDepositMonths } from '../../../../../Redux/slices/DepositMonths/DepositMonths';
// import MonthlyPaid from '../MonthlyPaid/MonthlyPaid'

function getWords(monthCount, scaledValue) { 
  
    function getPlural(number, word) {
        return number === 1 && word.one || word.other;
    }
    let months = { one: 'ամիս', other: 'ամիս' },
        years = { one: 'տարի', other: 'տարի' },
        m = monthCount % 12,
        y = Math.floor(monthCount / 12),
        result = [];

    y && result.push(y + ' ' + getPlural(y, years));
    m && result.push(m + ' ' + getPlural(m, months));
    scaledValue = result.join(' ');
    return scaledValue
} 

function valueLabelFormat(value) {
    
    let scaledValue = null
    if(value<=12){
        scaledValue = value;
        return `${scaledValue} ամիս`;
    }
        scaledValue = getWords(value , scaledValue)
        return scaledValue
}

function calculateValue(value) {
  return value;
}

export default function DepositMonths() {
  const [value, setValue] = React.useState(sessionStorage.getItem('DepositMonths') ||  10);
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };
  dispatch(setDepositMonths(value))
  sessionStorage.setItem("DepositMonths" , value)
  return (
    <>
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
            min={6}
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
      
        
    </>
    
  );
}
