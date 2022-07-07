import gift from './img/gift.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.jpg'
import image4 from './img/4.jpg'
import SlickSlider from "../../../slickSlider/slickSlider";
import "./PointsSlider.css";
import { NavLink } from "react-router-dom";

export default function PointsSlider() {

  const contentArr = [ 
    {
      img : gift,
      title : "Նվերներ",
      message : "Ստացեք Ձեր նվերը",
      link : '../conversBenefits'
    },
    {
      img : image2,
      title : "Նվերներ",
      message : "Ստացեք Ձեր նվերը",
      link : '../conversBenefits'
    },
    {
      img : image3,
      title : "Նվերներ",
      message : "Ստացեք Ձեր նվերը",
      link : '../conversBenefits'
    },
    {
      img: image4,
      title : "Նվերներ",
      message : "Ստացեք Ձեր նվերը",
      link : '../conversBenefits'
      
    },
  ]

  const SLIDER_SETTINGS = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,
    fade: false,
    speed: 1000,
    autoplaySpeed: 5000,
    className: 'main_slider'
};

  return ( 
     <SlickSlider settings={SLIDER_SETTINGS}>
     {contentArr?.map((item , i)=>(
                 <div key={i}>
                            <div className='giftBox' >       
                                 <img src={item.img} className="sliderimg" alt=""/>
                                 <NavLink  to={item.link} 
                                           style={isActive => ({
                                              color: isActive ?  "#007DC3": "green",
                                              textDecoration : 'none'
                                            })}
                                 > { item.title } </NavLink>
                                 <p> {item.message}  </p>                          
                            </div>
                 </div>             
                 ))}    
    </SlickSlider> 
  );
}