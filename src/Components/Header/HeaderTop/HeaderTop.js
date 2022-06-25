import { NavLink } from 'react-router-dom'
import './HeaderTop.css'
// import ChangeLanguages from './Languages/languages'
import Location from './Location/Location'
import Rate from './Rate/Rate'
import Search from './Search/Search'
import BasicTabs from './Tabs/Tabs'
import { useState } from 'react'
import {  LANGUAGES , useTranslate } from '../../../contexts/LanguageProvider'
import globe from '../../HomePage/ConversPoints/PointsSlider/img/globe.png'
import ChangeLanguages from './Languages/languages'

export default function  HeaderTop () {
    const [langOption, setLangOption] = useState(localStorage.getItem('languagesOption') || LANGUAGES[0])
    const {t, changeLanguage} = useTranslate();
    const handleChangeLang = event => {
        setLangOption(event.target.value);
        localStorage.setItem('languagesOption' , event.target.value.toString())
        changeLanguage(event.target.value);
    }
    return (
        <div className='HeaderTop'>
            <BasicTabs/>
            <div style={{display : "flex" , gap : '15px'}}>
                <div className='HeaderTopSpan' >   +374 10 511 211 </div>  
               <NavLink to='/'>  <button className='btnBanking'> {t("onlineBanking")} </button></NavLink>
               <Rate/>
               <Location/>
               <Search/>
               {/* <ChangeLanguages/> */}
               <label className='globeDiv'>
               <img src={globe}/>
                <select className='langSelect' value={langOption} onChange={handleChangeLang}>
                    <option value="AM">{t("armenian")}</option>
                    <option value="RU">{t("russian")}</option>
                    <option value="EN">{t("english")}</option>
                </select> 
               </label>
            </div>
        </div>
    )
}