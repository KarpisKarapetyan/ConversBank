import './Links.css'
import car from '../ConversPoints/PointsSlider/img/car.png'
import build from '../ConversPoints/PointsSlider/img/Build.png'
import bag from '../ConversPoints/PointsSlider/img/bag.png'
import { Link} from 'react-router-dom'
import SlickSlider from '../../slickSlider/slickSlider'

function Links (){

    const SLIDER_SETTINGS = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        className : 'slider variable-width',
        centerMode: true,
        // centerPadding: "60px",
        arrows: true,
        fade: false,
        speed: 1000,
        autoplaySpeed: 5000,
    };
    const linksData =  [
        {
            img : car,
            link : "/",
            name : "Automarket"
        },
        {
            img : build,
            link : "/",
            name : "Estate website"
        },
        {
            img : bag,
            link : "/",
            name : "SME website"
        },
        {
            img : build,
            link : "/",
            name : "goTo"
        },
        {
            img : build,
            link : "/",
            name : "goTo"
        },
    ]
    
    return (
             <SlickSlider settings={SLIDER_SETTINGS}>
                {linksData?.map((item , i)=>(
                 <div key={i} className='linksMain'>
                            <div className='linksItem'>
                                <img src={item.img} /> 
                                <Link  to={item.link}> {item.name}  </Link>
                            </div>                           
                 </div>           
                 ))}   
             </SlickSlider>        
    )
}
export default Links