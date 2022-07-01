import './Search.css'
import search from '../../../HomePage/ConversPoints/PointsSlider/img/search.png'
import businessSearch from '../../../HomePage/ConversPoints/PointsSlider/img/businessSearch.png'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { searchThunk } from '../../../../Redux/thunks/searchThunk'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { mainUrl } from '../../../../Api/Api'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { mainTabsSelector } from '../../../../Redux/slices/mainTabs/mainTabs'
import { useTranslate } from '../../../../contexts/LanguageProvider'

export default function  Search () {
  const {t} = useTranslate()
    const [ showInput , setShowInput] = useState(false)
    const dispatch = useDispatch()
    const { register,handleSubmit,formState: {errors}, } = useForm({ mode: 'onChange'})
    const [ placeholderValue ,setPlaceholderValue ] = useState(t("search"))
    const changeTabValue = useSelector(mainTabsSelector)
    const onSubmit = (data) => {
    const {search}  = data
    
      if(search.trim()){
        axios.get(`${mainUrl}/users`)
       .then((res) => {
        const currentArr = res.data.filter(item =>   item.name === search || item.age === search || item.profession === search )
        console.log('currentArr-->' , currentArr)
        // navigate("../searchResualt")  
      })
        dispatch(searchThunk(data))
      }
      return
  }  
  const handleClickAway = () => setShowInput(false);
  useEffect(()=> setPlaceholderValue(t("search")),[showInput])

    return (
    <>
    { showInput && 
      <ClickAwayListener onClickAway={handleClickAway}>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
            <label>
            <input
              {...register("search", { 
                  maxLength : {
                  value : 7,
                  message : "*Max 7 characters!"
                }
               })}
              type="text"
              className="search"
              placeholder={placeholderValue}
            />
            </label>
          </form> 
          {errors?.search && <div className="errorMessage">
                 <span>{errors?.search?.message || "Error!"}</span>  </div>}
        </div>
      </ClickAwayListener>
  }
        <div onClick={() => { setShowInput(!showInput) }} className='location'>
           <img src={ changeTabValue ? businessSearch : search }/>
        </div>
    </>
  )
}

