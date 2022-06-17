import { NavLink } from 'react-router-dom'
import './HeaderTop.css'
import ChangeLanguages from './Languages/languages'
import Location from './Location/Location'
import Rate from './Rate/Rate'
import Search from './Search/Search'
import BasicTabs from './Tabs/Tabs'

export default function  HeaderTop () {
    return (
        <div className='HeaderTop'>
            <BasicTabs/>
            <div style={{display : "flex" , gap : '15px'}}>
                <div style={{textAlign: 'center'}}> <span className='HeaderTopSpan'>  374 10 511 211 </span> </div>  
               <NavLink to='/'>  <button className='btnBanking'> Օնլայն բանկինգ </button></NavLink>
               <Rate/>
               <Location/>
               <Search/>
               <ChangeLanguages/>
            </div>
        </div>
    )
}