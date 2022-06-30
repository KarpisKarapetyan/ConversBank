import { NavLink } from 'react-router-dom'
import './HeaderTop.css'
// import ChangeLanguages from './Languages/languages'
import Location from './Location/Location'
import Rate from './Rate/Rate'
import Search from './Search/Search'
import MainTabs from './Tabs/Tabs'
import { useState } from 'react'
import {  LANGUAGES , useTranslate } from '../../../contexts/LanguageProvider'
import globe from '../../HomePage/ConversPoints/PointsSlider/img/globe.png'
import businessGlobe from '../../HomePage/ConversPoints/PointsSlider/img/businessGlobe.png'
import { useSelector } from 'react-redux'
import { mainTabsSelector } from '../../../Redux/slices/mainTabs/mainTabs'

export default function  HeaderTop () {
    const [langOption, setLangOption] = useState(localStorage.getItem('languagesOption') || LANGUAGES[0])
    const {t, changeLanguage} = useTranslate();
    const changeMainTabValue = useSelector(mainTabsSelector)
    const handleChangeLang = event => {
        setLangOption(event.target.value);
        localStorage.setItem('languagesOption' , event.target.value.toString())
        changeLanguage(event.target.value);
    }
    
    return (
        <div className = "HeaderTop" style={{backgroundColor : !changeMainTabValue ? '#F2F2F2' : '#21303A'}} >
            <MainTabs/>
            <div style={{display : "flex" , gap : '15px'}} >
                <div className='HeaderTopSpan' style={{color : !changeMainTabValue ? '#666666' : '#fff'}}>   +374 10 511 211 </div>  
               <NavLink to='/'>  <button className='btnBanking'> {t("onlineBanking")} </button></NavLink>
               <Rate/>
               <Location/>
               <Search/>
               {/* <ChangeLanguages/> */}
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