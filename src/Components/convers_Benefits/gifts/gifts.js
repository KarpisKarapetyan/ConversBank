import { useSelector } from 'react-redux'
import { testArrSelector } from '../../../Redux/slices/testInfo/testInfo'
import './gifts.css'
import GiftsSlider from './giftsSlider/giftsSlider'

export const Gifts = () => {
    const pointsCountArr = useSelector(testArrSelector)
    console.log('pointsCountArr-->', pointsCountArr)
    return (
        <div className='gift_Page'>  
            <div className='giftFilter'>
                <div style={{borderBottom : "0.1px #dbdbdb49 solid" , height : '88px'}}>
                    <span className='giftFilter_SPAN'> Նվերներ </span>
                </div>
                <div>
                    <p> Միավորների քանակ </p>
                    <div className='pointsCount'>  {pointsCountArr[0]} </div>
                    <div className='pointsCount'> {pointsCountArr[1]} </div>

                </div>
                    <GiftsSlider/>
            </div>
        </div>
    )
}