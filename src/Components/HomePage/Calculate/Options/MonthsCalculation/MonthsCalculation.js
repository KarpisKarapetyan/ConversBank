import './MonthsCalculation.css'
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { setMonths } from '../../../../../Redux/slices/Months/Months';
import { useConvertYear } from '../../../../../Hooks/useMonthsConvertYear';
import { ClickAwayListener } from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function MonthsCalculation() {
  const [value, setValue] = useState( sessionStorage.getItem('MonthsSum') || 10);
  const dispatch = useDispatch()
  const monthsConvertYear = useConvertYear
  const [isOpenInput , setIsOpenInput] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm();

  const openInput = () => setIsOpenInput(true)
  const calculateValue  = value => value;
  

  const onSubmit = data => {
    const inputSum = Math.round(+data.inputSum *12)
    if(inputSum >=6 && inputSum <=60){
      setIsOpenInput(false)
      setValue(inputSum)
      dispatch(setMonths(value))
    }else{
       alert("Min 6 ամիս , max  5 տարի")
       setIsOpenInput(false)       
   }
  };

  const valueLabelFormat = (value)=>{
    
    let scaledValue = null
    if(value<=12){
        scaledValue = value;
        return `${scaledValue} ամիս`;
    }
        scaledValue = monthsConvertYear(value , scaledValue)
        return scaledValue
}

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  const handleClickAway = () => {
    setIsOpenInput(false);
  };

  dispatch(setMonths(value))
  sessionStorage.setItem('MonthsSum' , value)

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <div className='calc_field'>
      <div style={{width : 300, marginTop : 30}}>
        <div style={{display : "flex" , justifyContent : "space-between"}}
                className='changeSum'>
                <span> Վարկի ժամկետը</span>
                <label onClick={openInput}> <span style={{cursor : "pointer"}}  >  {!isOpenInput && valueLabelFormat(calculateValue(value)) } </span></label>
                {isOpenInput && 
                    <div style={{ display : "flex"}}>
                      <form onSubmit={handleSubmit(onSubmit)} >
                     <label> 
                      <input style={{ width : "72px"}}
                        {...register("inputSum", {
                          // required: "*Field is required",
                            maxLength : {
                            value : 3,
                            message : "*Max 3 characters!" }
                         })}
                        type="text"
                        placeholder="տարի"
                      />            
                    </label>                   
                  </form>
                        {errors?.inputSum && <span style={{display : 'block'}}>{errors?.inputSum?.message || "Error!"}</span>}
                    </div>
                  }  
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
                <span>Սկսած 6 ամսից </span>
                <span> մինչև 5 տարի</span>
            </div>
        </div>
    </div>
    </ClickAwayListener>   
  );
}
