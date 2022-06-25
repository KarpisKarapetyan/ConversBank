import './footer.css'
import { footerLinks } from '../../helpers/constants'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mui/material'
import { ConversMobileButtons } from '../HomePage/ConversMobile/ConversMobile'
import imageC from '../HomePage/ConversPoints/PointsSlider/img/C.png' 
import FooterInput from './footerInput/footerInput'
import abcFinanceIcon from '../HomePage/ConversPoints/PointsSlider/img/abcFinance.png'
import cbaIcon from '../HomePage/ConversPoints/PointsSlider/img/CBA.png'
import finInfoIcon from '../HomePage/ConversPoints/PointsSlider/img/finInfo.png'
import financialIcon from '../HomePage/ConversPoints/PointsSlider/img/financial.png'

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
            <div style={{width : "57%" , margin: '0 auto'}}> <Divider color = "#fff"/> </div>
            <div className='footerBottom' > 
                <span>
                Բանկը պատասխանատվություն չի կրում հղում կատարած կայքերի բովանդակության ստույգության և արժանահավատության, այնտեղ տեղադրված գովազդների համար, և Բանկը <br/> պատասխանատվություն չի կրում այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
                <br/>
                <br/>
                Վերջին թարմացումը՝ 2020-02-04 11:53:13 
                </span>
            <div className='footerPartners'>
                <span> © 2021, Converse Bank Converse Bank, info@conversebank.am </span>
                <div style={{ display : 'flex' , gap : '28px'}}>
                  <NavLink to='/' target = '_blank'> <img src={financialIcon}/> </NavLink>  
                  <NavLink to='/' target = '_blank'> <img src={abcFinanceIcon}/> </NavLink>   
                  <NavLink to='/' target = '_blank'> <img src={cbaIcon}/> </NavLink>  
                  <NavLink to='/' target = '_blank'> <img src={finInfoIcon}/> </NavLink>                 
                </div>
            </div>
            </div>
        </div>
    )
}