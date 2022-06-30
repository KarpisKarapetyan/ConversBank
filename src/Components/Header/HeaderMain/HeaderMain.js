import './HeaderMain.css'
import mainLogo from '../../HomePage/ConversPoints/PointsSlider/img/mainLogo.png'
import { NavLink } from 'react-router-dom'
import { useTranslate } from '../../../contexts/LanguageProvider'

export const CreateDropdown = ({linksArr}) => {
    const {t} = useTranslate()
    return (
        <>
        {linksArr.map((link, i ) =>(
                    <div key={i} className="dropdown"> 
                        <NavLink to={link.link}  className='headerLinks' > <button className='dropbutton'> {link.name }</button> </NavLink> 
                        <div className='dropbuttonchild'>
                            <ul style={{columnCount : t('HeaderManuChildLinks')[i].length >=5 ? 2 : 1 }}  className='dropdownUl'>
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
    return (
        <div className='HeaderMain'>
              <NavLink to='./HomePage'> <img src={mainLogo} /></NavLink>  
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