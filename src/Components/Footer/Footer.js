import './footer.css'
import { footerLinks } from '../../helpers/constants'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mui/material'
import { ConversMobileButtons } from '../HomePage/ConversMobile/ConversMobile'
import imageC from '../HomePage/ConversPoints/PointsSlider/img/C.png' 
import FooterInput from './footerInput/footerInput'

export default function Footer () { 
    const footerLinks1 = footerLinks.slice(0 , 7)
    const footerLinks2 = footerLinks.slice(7, 14)
    const footerLinks3 = footerLinks.slice(14)
    
    return (
        <div className='footerCont'>
            <div className="footerTop">
                <div> 
                {footerLinks1.map(( link , i )=>{
                    return (
                        <div className='footerLinks' key={i}>
                           <NavLink to={link.link}> <li> {link.title} </li> </NavLink> 
                           
                        </div>
                    )
                 })}
                </div>
                <div> 
                {footerLinks2.map(( link , i )=>{
                    return (
                        <div className='footerLinks' key={i}>
                           <NavLink to={link.link}> <li> {link.title} </li> </NavLink> 
                        </div>
                    )
                 })}
                </div>
                <div> 
                {footerLinks3.map(( link , i )=>{
                    return (
                        <div className='footerLinks' key={i}>
                           <NavLink to={link.link}> <li> {link.title} </li> </NavLink> 
                        </div>
                    )
                 })}
                </div>
            
                <div className='footerMobile'> 
                    <div className='footerMobileTitle'>
                        <img src={imageC} />
                        <span> Convers Mobile  </span>
                    </div>
                    <span className='footerMobileSpan'> Download our app to gain the best from <br/>  modern banking </span>
                    <div style={{marginTop: '13px' , marginBottom : '27px'}}>  <ConversMobileButtons/> </div> 
                    <FooterInput/>
                </div>
            </div>
            <div style={{width : "80%" , margin: '0 auto'}}> <Divider/> </div>
            
            <div> </div>
        </div>
    )
}