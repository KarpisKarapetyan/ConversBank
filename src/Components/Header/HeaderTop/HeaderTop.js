import { NavLink } from 'react-router-dom'
import './HeaderTop.css'
// import ChangeLanguages from './Languages/languages'
import Location from './Location/Location'
import Rate from './Rate/Rate'
import Search from './Search/Search'
import BasicTabs from './Tabs/Tabs'
// import { LANGUAGES, useTranslate} from "../../contexts/LanguageProvider"
import { useState } from 'react'
import {  LANGUAGES , useTranslate } from '../../../contexts/LanguageProvider'
import { getLanguage } from '../../../helpers/translation'

export default function  HeaderTop () {
    const [langOption, setLangOption] = useState(getLanguage(localStorage.getItem("language") || LANGUAGES[0]))
    const {t, changeLanguage} = useTranslate();
    const handleChangeLang = event => {
        setLangOption(event.target.value);
        changeLanguage(event.target.value);
    }
    return (
        <div className='HeaderTop'>
            <BasicTabs/>
            <div style={{display : "flex" , gap : '15px'}}>
                <div style={{textAlign: 'center'}}> <span className='HeaderTopSpan'>  374 10 511 211 </span> </div>  
               <NavLink to='/'>  <button className='btnBanking'> {t("onlineBanking")} </button></NavLink>
               <Rate/>
               <Location/>
               <Search/>
               {/* <ChangeLanguages/> */}
            <select value={langOption} onChange={handleChangeLang}>
                <option value="AM">{t("armenian")}</option>
                <option value="RU">{t("russian")}</option>
                <option value="EN">{t("english")}</option>
            </select> 
            </div>
        </div>
    )
}