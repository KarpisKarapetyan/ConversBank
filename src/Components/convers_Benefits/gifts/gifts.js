import { useForm } from 'react-hook-form'
import { ClickAwayListener } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTestArr, testArrSelector } from '../../../Redux/slices/testInfo/testInfo'
import './gifts.css'
import GiftsSlider from './giftsSlider/giftsSlider'
import SelectCategory from './selects/selects'
import CheckBoxSelect from './selects/checkboxBoxSelect'
import { GiftsFilterResualt } from './giftsFilterResualt/giftsFilterResualt'
import axios from 'axios'
import { mainUrl } from '../../../Api/Api'
import Pagination from '@mui/material/Pagination';

export const Gifts = () => {
    const [pointsCountArr,setPointsCountArr] = useState(useSelector(testArrSelector))
    const [showSpan1,setShowSpan1] = useState(true)
    const [showSpan2,setShowSpan2] = useState(true)
    const [ products,setProducts] = useState('')
    const { register,handleSubmit,formState: {errors}, } = useForm({ mode: 'onChange'})
    const [ placeholderValue ,setPlaceholderValue ] = useState('ggg')
    const dispatch = useDispatch()

    const onSubmitMin = (data) => {
        setShowSpan1(true)
        dispatch(setTestArr([+data.min , pointsCountArr[1] ]))
        setPointsCountArr([+data.min , pointsCountArr[1]])
    }
    const onSubmitMax = (data) => {
        setShowSpan2(true)
        dispatch(setTestArr([pointsCountArr[0], +data.max  ]))
        setPointsCountArr([pointsCountArr[0], +data.max])
    }
    const handleClickAway = () => {
    setShowSpan1(true)
    setShowSpan2(true)
    };
    const handleClickMinCount = () => {
        setShowSpan1(false)
        setShowSpan2(true)
    }
    const handleClickMaxCount = () => {
        setShowSpan1(true)
        setShowSpan2(false)
    }

    useEffect(()=>{
        axios.get(`${mainUrl}/giftsProducts`)
        .then((res => {
            setProducts(prev => prev = res.data)
            console.log('exav')
        }), 
        (error) => console.log(`Error, First of all please run the server.
        Write in your terminal json-server --watch db.json`))
        
    },[])
    return (
         
        <div className='gift_Page' >  
            <div className='giftFilter'>
                    <div style={{borderBottom : "0.1px #dbdbdb49 solid" , height : '88px' , marginBottom : '24px'}}>
                        <span className='giftFilter_SPAN'> Նվերներ </span>
                    </div>
                <div className='giftFilter_Bottom'>
                    <div >
                        <span > Միավորների քանակ </span>
                    <ClickAwayListener onClickAway={handleClickAway}> 
                        <div className='pointsCount'>
                            {showSpan1 ? <span className='showSpan' onClick={ handleClickMinCount } >  {pointsCountArr[0]} </span>
                                    : ( <div>
                                            <form onSubmit={handleSubmit(onSubmitMin)} >
                                                <label>
                                                    <input
                                                        {...register("min", { 
                                                            minLength : {
                                                            value : 3,
                                                            message : "*Min 3 characters!"
                                                        }
                                                        })}
                                                        type="number"
                                                        className="showSpan"
                                                        placeholder={placeholderValue}
                                                    />
                                                </label>
                                            </form> 
                                            {errors?.min && <div className="errorMessage">
                                                <span>{errors?.min?.message || "Error!"}</span>  </div>}
                                </div> )}
                            <span > - </span>
                            {showSpan2 ? <span className='showSpan' onClick={ handleClickMaxCount } >  {pointsCountArr[1]} </span>
                                    : ( <div>
                                        <form onSubmit={handleSubmit(onSubmitMax)} >
                                            <label>
                                                <input
                                                    {...register("max", { 
                                                        maxLength : {
                                                        value : 6,
                                                        message : "*Max 500.000!"
                                                    }
                                                    })}
                                                    type="number"
                                                    className="showSpan"
                                                    placeholder={placeholderValue}
                                                />
                                            </label>
                                        </form> 
                                        {errors?.max && <div className="errorMessage">
                                            <span>{errors?.max?.message || "Error!"}</span>  </div>}
                            </div> )}
                        </div>
                            </ClickAwayListener>
                            <GiftsSlider pointsCountArr= {pointsCountArr} 
                                         setPointsCountArr = {setPointsCountArr} />
                        </div>
                        <SelectCategory/>
                        <CheckBoxSelect/>
                </div>
            </div>
            <GiftsFilterResualt products = {products} 
                                    giftsSliderValue= {pointsCountArr} 
                                    setGiftsSliderValue = {setPointsCountArr}/>
            <div className='giftsPagination'>
                <Pagination count={13} 
                            color="primary"
                            shape="rounded"
                />
            </div>
        </div>    
    )
}

