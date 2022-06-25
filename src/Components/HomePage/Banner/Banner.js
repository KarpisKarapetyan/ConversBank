import { bannerInfo } from '../../../helpers/constants';
import SlickSlider from '../../slickSlider/slickSlider'
import './Banner.css'
import { BannerContent } from './bannerContent/BannerContent';
import LinearDots from './LinearDots/LinerDots';

export default function Banner(){
    const SLIDER_SETTINGS = {
        autoplay: true,
        arrows: true,
        fade: false,
        autoplaySpeed: 5000,
        dots:  true,
        customPaging: function(i) {
            return (
              <div className='dotsDiv'>
                <LinearDots/>
              </div>
            );
          },
          appendDots: dots => (
            <div>
              <ul style={{ width : '100px'}}> {dots} </ul>
            </div>
          ),
        lazyLoad: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
    };
    return (
        <SlickSlider  settings={SLIDER_SETTINGS}>
                {bannerInfo?.map((item , i)=>(
                 <div key={i}>
                                <img src={item.img}></img>
                                <BannerContent item={item}/>
                 </div>           
                 ))}   
        </SlickSlider>   
    )
}


