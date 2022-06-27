import Banner from './Banner/Banner'
import { Calculate } from './Calculate/Calculate'
import Links from './Carousel/Links'
import ConverseClub from './ConverseClub/ConverseClub'
import ConversMobile from './ConversMobile/ConversMobile'
import ConversPoints from './ConversPoints/ConversPoints'
import './Homepage.css'
import News from './News/News'

export const HomePage = () =>{
    return (
        <div className='homePage'>
           <div className='navBanner'> <Banner/> </div>
            <div className="calcMain">
                <div style={{display : "flex",gap : "20px",marginTop : '10px' }} >
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