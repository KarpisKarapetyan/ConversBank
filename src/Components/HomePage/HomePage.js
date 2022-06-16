import { Calculate } from './Calculate/Calculate'
import Links from './Carousel/Links'
import ConverseClub from './ConverseClub/ConverseClub'
import ConversPoints from './ConversPoints/ConversPoints'
import './Homepage.css'
import News from './News/News'

export const HomePage = () =>{
    return (
        <div className='homePage'>
        <div className="mainHome">
            <div style={{display : "flex",gap : "20px" }} >
                <Calculate/>
                <ConversPoints/>
            </div>
            
        </div >
        <div style={{ marginTop : "20px" }}>
            <Links />
        </div>
       <ConverseClub/>
       <News/>
        </div>
        
    )
}