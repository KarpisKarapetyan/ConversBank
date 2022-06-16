import { NavLink } from 'react-router-dom'
import './News.css'

export default function News () {

    return (
        <div className= "newsMain">
            <div className='allNews'>
                <span > Նորություններ </span>
                <NavLink to="///"> Բոլոր Նորությունները </NavLink>
            </div>
       </div>
    )
}