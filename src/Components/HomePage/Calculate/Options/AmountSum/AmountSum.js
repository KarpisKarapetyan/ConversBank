import * as React from "react";
import Slider from "@mui/material/Slider";
import './AmountSum.css'
import { useDispatch } from "react-redux";
import { setSum } from "../../../../../Redux/slices/sum/sum";
import { useForm } from "react-hook-form";

const valueLabelFormat = (value)=> {
  let scaledValue = value;
  return `${scaledValue}  Դ`;
}

const sum = (value)=> {
  return value;
}


export default function AmountSum() {
  const [value, setValue] = React.useState(sessionStorage.getItem('AmountSum') || 1110000);
  const dispatch = useDispatch()
  const [isOpenInput , setIsOpenInput] = React.useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm();
  const handleChange = (event, newValue) =>  setValue(newValue);
  
  const openInput= () => { 
    setIsOpenInput(true)
  }

  const onSubmit = data => {
    const inputSum = +data.inputSum 
    if(inputSum >=250000 && inputSum <=10000000){
      console.log(inputSum)
      setIsOpenInput(false)
      setValue(inputSum)
      dispatch(setSum(value))

    }else{
       alert("Min 250.000 , max  10.000.000")
       setIsOpenInput(false)
       
   }
   
  };

  dispatch(setSum(value))
  sessionStorage.setItem('AmountSum', value)
  return (
    <div style={{width : 300}}>
        
        <div  >
            <div style={{display : "flex" , justifyContent : "space-between"}}
                className='changeSum'>
                <span> Որքան գումար է անհրաժեշտ</span>
               <label onClick={openInput}> <span style={{cursor : "pointer"}}  >  {!isOpenInput && valueLabelFormat(value.toLocaleString())} </span>
                </label>     
                {isOpenInput && 
                  <div style={{ display : "flex"}}>
                    
                    <form onSubmit={handleSubmit(onSubmit)} >
                   <label> 
                    <input style={{ width : "100px"}}
                      {...register("inputSum", {
                        // required: "*Field is required",
                          minLength : {
                          value : 6,
                          message : "*Minimum 250.000!" }
                       })}
                      type="number"
                      placeholder="000.000.000"
                    />
                    
                      {errors?.inputSum && <span>{errors?.inputSum?.message || "Error!"}</span>}
                      
                  </label> 
                  
                </form>
                <button onClick={()=> setIsOpenInput(false)}> X </button>

                  </div>
                   
                
                }
            </div>
        <Slider
            size="small"
            value={value}
            min={250000}
            step={5000}
            max={10000000}
            scale={sum}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
        </div>
        <div className='changeSumBottom'> 
            <span>Սկսած 250․000 Դ</span>
            <span> մինչև 10․000․000 Դ</span>
        </div>
    </div> 
  );
}

