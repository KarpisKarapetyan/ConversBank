import './HeaderMain.css'
import mainLogo from '../../HomePage/ConversPoints/PointsSlider/img/mainLogo.png'
import { NavLink } from 'react-router-dom'
import  {linksArr} from '../../../helpers/constants'

export default function  HeaderMain () {
    
    return (
        <div className='HeaderMain'>
            <NavLink to='./HomePage'> <img src={mainLogo} /> </NavLink> 
            {linksArr.map(link =>(
                   <NavLink to={link.link}  className='headerLinks' > {link.name }</NavLink> 
            ))}
              <NavLink to='/' >  <button>  Ակցիա  </button> </NavLink> 
        </div>
    )
}