import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { languageSelector } from '../../Redux/slices/language/language'
import Banner from './Banner/Banner'
import { Calculate } from './Calculate/Calculate'
import Links from './Carousel/Links'
import ConverseClub from './ConverseClub/ConverseClub'
import ConversMobile from './ConversMobile/ConversMobile'
import ConversPoints from './ConversPoints/ConversPoints'
import './Homepage.css'
import News from './News/News'

export const HomePage = () =>{

//   const navigate = useNavigate()
//   const currentLang = useSelector(languageSelector).toLowerCase()
//   const params = useParams()

//   useEffect(()=>{
//     params.id = currentLang
//     navigate(`${params.id}`)
//   },[currentLang])

    return (
        <div className='homePage'>
           <div className='navBanner'> <Banner/> </div>
            <div className="calcMain">
                <div style={{display : "flex",gap : "20px"}} >
                    <Calculate/>
                    <ConversPoints/>
                </div>    
            </div >
            <div className='caruselLinks' >
                <Links />
            </div>
            <ConverseClub/>
            <News/>
            <ConversMobile style= {{display:'flex' , justifyContent : 'center' , alignItems : 'center'}} />
        </div>
        
    )
}