import { bannerInfo, linerDots } from '../../../helpers/constants';
import SlickSlider from '../../slickSlider/slickSlider'
import './Banner.css'
import { BannerContent } from './bannerContent/BannerContent';
import { useTranslate } from '../../../contexts/LanguageProvider'
export default function Banner(){
    const {t} = useTranslate()

    const SLIDER_SETTINGS = {
        autoplay: true,
        arrows: true,
        fade: false,
        autoplaySpeed: 5000,
        dots:  true,
        customPaging: i => <div className='linerTilte'><span className='dotsDiv'> { linerDots[i] } </span></div> ,
        appendDots: dots => <div>  {dots} </div>,
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        pauseOnHover : false
    };
    return (
        <SlickSlider  settings={SLIDER_SETTINGS}>
                {t('bannerInfo')?.map((item , i)=>(
                 <div key={i}>
                                <img src={item.img}></img>
                                <BannerContent item={item}/>
                 </div>           
                 ))}   
        </SlickSlider>   
    )
}


