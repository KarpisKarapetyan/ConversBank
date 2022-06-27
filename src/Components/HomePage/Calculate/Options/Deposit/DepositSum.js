import Slider from "@mui/material/Slider";
import { useDispatch} from "react-redux";
import { setDepositSum } from "../../../../../Redux/slices/DepositSum/DepositSum";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function DepositSum() {
  const [value, setValue] = useState( Number(sessionStorage.getItem('DepositSum')) ||  750000);
  const dispatch = useDispatch()
  const [isOpenInput , setIsOpenInput] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm();
  const handleChange = (event, newValue) =>  setValue(newValue);

  const valueLabelFormat = (value)=> `${value}  Դ`
  const sum = (value)=>  value
  const openInput= () => setIsOpenInput(true)
  const onSubmit = data => {
    const inputSum = +data.inputSum 
    if(inputSum >=50000 && inputSum <=2000000){
      setIsOpenInput(false)
      setValue(inputSum)
      dispatch(setDepositSum(value))
    }else{
       alert("Min 50000 , max  2.000.000")
       setIsOpenInput(false)
   }  
};
  useEffect(()=>{
    dispatch(setDepositSum(value))
    sessionStorage.setItem('DepositSum',value)
  },[value])
  
  return (
    <div style={{width : 300}}>      
        <div  >
            <div style={{display : "flex" , justifyContent : "space-between"}}
                className='changeSum'>
                <span> Ավանդի չափը </span>
               <label onClick={openInput}> <span style={{cursor : "pointer"}}  >  {!isOpenInput && valueLabelFormat(value.toLocaleString())} </span>
                </label>     
                {isOpenInput && 
                
                <form  onSubmit={handleSubmit(onSubmit)} >
                   <label > 
                    <input style={{ width : "100px"}}
                      {...register("inputSum", {
                        // required: "*Field is required",
                          minLength : {
                          value : 5,
                          message : "*Minimum 50.000!" }
                       })}
                      type="number"
                      placeholder="000.000.000"
                    />
                    
                      {errors?.inputSum && <span>{errors?.inputSum?.message || "Error!"}</span>}
                  </label> 
                </form>
                
                }
            </div>
        <Slider
            size="small"
            value={value}
            min={50000}
            step={5000}
            max={2000000}
            scale={sum}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            valueLabelDisplay="auto"
        />
        </div>
        <div className='changeSumBottom'> 
            <span>Սկսած 50․000 Դ</span>
            <span> մինչև 2․000․000 Դ</span>
        </div>
    </div> 
  );
}

