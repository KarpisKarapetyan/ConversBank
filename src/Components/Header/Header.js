import './Header.css'
import HeaderMain from './HeaderMain/HeaderMain'
import HeaderTop from './HeaderTop/HeaderTop'

export const Header = () =>{
    return (
        <div className= "headerMain">
           <HeaderTop/>
           <HeaderMain/>
        </div>
    )
}