import { useForm } from 'react-hook-form';
import './footerInput.css'
import { FaArrowRight  } from 'react-icons/fa';
import faceBookIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/FB.png'
import twitterIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/Twitter.png'
import VKIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/VK.png'
import instaIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/Insta.png'
import youtubeIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/YouTube.png'
import LinkedinIcon from '../../../Components/HomePage/ConversPoints/PointsSlider/img/FB.png'
import { NavLink } from 'react-router-dom';

export default function FooterInput () { 
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = data => {
        const inputInfo = data.inputVal 
        console.log(inputInfo)
      };

    return (
        <>
        <div className='footerInput'>
            <span> Բաժանորդագրվել </span>
            <form onSubmit={handleSubmit(onSubmit)} className='footerForm' >
              <div className='footerInputDIV'>
                     <label> 
                      <input 
                        {...register("inputVal", {
                            mixLength : {
                            value : 20,
                            message : "*Miximum 20!" }
                         })}
                        type="text"
                        placeholder=""
                      />
                        {errors?.inputVal && <span>{errors?.inputVal?.message || "Error!"}</span>}  
                    </label> 
                   
              </div>
              <label className='footerInputButton'   onClick={handleSubmit(onSubmit)}><FaArrowRight/></label> 
            </form>

        </div>
        <div className='socialIcons'>
                   <NavLink target='_blank' to='/' ><img src={faceBookIcon}/></NavLink>
                   <NavLink target='_blank' to='/' ><img src={twitterIcon}/></NavLink>     
                   <NavLink target='_blank' to='/' ><img src={instaIcon}/></NavLink>     
                   <NavLink target='_blank' to='/' ><img src={LinkedinIcon}/></NavLink>     
                   <NavLink target='_blank' to='/' ><img src={youtubeIcon}/></NavLink>     
                   <NavLink target='_blank' to='/' ><img src={VKIcon}/></NavLink>     
        </div>
        </>
    )
}