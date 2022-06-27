import './Header.css'
import HeaderMain from './HeaderMain/HeaderMain'
import HeaderTop from './HeaderTop/HeaderTop'

export default function Header () {
    return (
        <div className= "header">
           <HeaderTop/>
           <HeaderMain/>
        </div>
    )
}