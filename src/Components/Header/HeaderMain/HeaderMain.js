import './HeaderMain.css'
import mainLogo from '../../HomePage/ConversPoints/PointsSlider/img/mainLogo.png'
import { NavLink } from 'react-router-dom'
import { useTranslate } from '../../../contexts/LanguageProvider'

export default function  HeaderMain () {
    const {t} = useTranslate()
    return (
        <div className='HeaderMain'>
              <NavLink to='./HomePage'> <img src={mainLogo} /> </NavLink>    
                {t('linksHeader').map((link, i ) =>(
                    <NavLink key={i} to={link.link}  className='headerLinks' > {link.name }</NavLink> 
                ))}
              <NavLink to='/' >  <button> { t('headerAction') } </button> </NavLink>
        </div>
    )
}