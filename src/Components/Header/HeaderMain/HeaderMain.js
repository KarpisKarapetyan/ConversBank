import './HeaderMain.css'
import mainLogo from '../../HomePage/ConversPoints/PointsSlider/img/mainLogo.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useTranslate } from '../../../contexts/LanguageProvider'
import { useSelector } from 'react-redux'
import { languageSelector } from '../../../Redux/slices/language/language'
import { useEffect } from 'react'

export const CreateDropdown = ({linksArr}) => {
    const {t} = useTranslate()
    return (
        <>
        {linksArr.map((link, i ) =>(
                    <div key={i} className="dropdown"> 
                        <NavLink to={link.link}  className='headerLinks' > <button className='dropbutton'> {link.name }</button> </NavLink> 
                        <div className='dropbuttonchild'>
                            <ul style={{columnCount : t('HeaderManuChildLinks')[i].length >=5 ? 2 : 1 }}   className='dropdownUl'>
                                {t('HeaderManuChildLinks')[i].map((item,index)=>(
                                        <li  key={index}>
                                            <NavLink className='dropbuttonchild_navLink_Child' to = {item.link}>  {item.name}  </NavLink>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default function  HeaderMain () {
    const {t} = useTranslate()
    const navigate = useNavigate()
    const currentLang = useSelector(languageSelector).toLowerCase()
    const params = useParams()

    useEffect(()=>{
        params.id = currentLang
    },[currentLang, params])
    return (
        <div className='HeaderMain'>
              <img style={{cursor : "pointer"}} onClick= {()=> navigate(`../homePage/${params.id}`)} src={mainLogo} />
              <CreateDropdown linksArr = {t('linksHeaderTitles')}/>  
                {/* {t('linksHeaderTitles').map((link, i ) =>(
                    <div key={i} className="dropdown"> 
                        <NavLink to={link.link}  className='headerLinks' > <button className='dropbutton'> {link.name }</button> </NavLink> 
                        <div className='dropbuttonchild'>
                            <ul className='dropdownUl'>
                                {t('HeaderManuChildLinks')[i].map((item,index)=>(
                                        <li  key={index}>
                                            <NavLink className='dropbuttonchild_navLink_Child' to = {item.link}>{item.name}</NavLink>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                ))} */}
              <NavLink to='/' >  <button className='HeaderMain_Action_Button'> { t('headerAction') } </button> </NavLink>
        </div>
    )
}
