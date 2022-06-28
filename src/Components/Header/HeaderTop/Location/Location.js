import './Location.css'
import location from '../../../HomePage/ConversPoints/PointsSlider/img/location.png'
import businessLocation from  '../../../HomePage/ConversPoints/PointsSlider/img/businessLocation.png'
import { useSelector } from 'react-redux'
import { mainTabsSelector } from '../../../../Redux/slices/mainTabs/mainTabs'

export default function  Location () {
    const changeTabValue = useSelector(mainTabsSelector)
    return (
        <div className='location'>
             <img src={ changeTabValue ? businessLocation : location }/>
        </div>
    )
}