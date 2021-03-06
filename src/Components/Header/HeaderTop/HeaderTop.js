import { NavLink } from 'react-router-dom'
import './HeaderTop.css'
import Location from './Location/Location'
import Rate from './Rate/Rate'
import Search from './Search/Search'
import MainTabs from './Tabs/Tabs'
import { useEffect, useState } from 'react'
import {  LANGUAGES , useTranslate } from '../../../contexts/LanguageProvider'
import globe from '../../HomePage/ConversPoints/PointsSlider/img/globe.png'
import businessGlobe from '../../HomePage/ConversPoints/PointsSlider/img/businessGlobe.png'
import { useDispatch, useSelector } from 'react-redux'
import { mainTabsSelector } from '../../../Redux/slices/mainTabs/mainTabs'
import {setLanguage} from '../../../Redux/slices/language/language'

export default function  HeaderTop () {
    const [langOption, setLangOption] = useState(localStorage.getItem('language') || LANGUAGES[0])
    const {t, changeLanguage} = useTranslate();
    const changeMainTabValue = useSelector(mainTabsSelector)
    const dispatch = useDispatch()
    const handleChangeLang = event => {
        setLangOption(event.target.value);
        localStorage.setItem('languagesOption' , event.target.value.toString().toLowerCase())
        changeLanguage(event.target.value);  
    }
    useEffect(()=> {
        dispatch(setLanguage(langOption))
    },[dispatch ,langOption])
    return (
        <div className = "HeaderTop" style={{backgroundColor : !changeMainTabValue ? '#F2F2F2' : '#21303A'}} >
            <MainTabs/>
            <div style={{display : "flex" , gap : '15px'}} >
               <div className='HeaderTopSpan' style={{color : !changeMainTabValue ? '#666666' : '#fff'}}>   +374 10 511 211 </div>  
               <NavLink to='/'>  <button className='btnBanking'> {t("onlineBanking")} </button></NavLink>
               <Rate/>
               <Location/>
               <Search/>
               <label className='globeDiv' style={{backgroundColor : !changeMainTabValue ? '#fff' : '#2D3940'}}>
               <img style={{position : 'absolute'}} src={!changeMainTabValue ? globe : businessGlobe}/>
                <select  value={langOption} onChange={handleChangeLang}
                         style={{ color : changeMainTabValue && '#fff', backgroundColor : changeMainTabValue &&  "#2D3940" }}                 
                >
                    <option value="AM">{t("armenian")}</option>
                    <option value="RU">{t("russian")}</option>
                    <option value="EN">{t("english")}</option>
                </select> 
               </label>
            </div>
        </div>
    )
}