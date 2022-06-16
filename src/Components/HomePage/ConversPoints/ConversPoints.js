import "./ConversPoints.css"
import PointsSlider from "./PointsSlider/PointsSlider"


export default  function ConversPoints() {
    return (
        <div className="ConversPointsContanier">
            <div  className = 'pointsTitle'>
                <span> Կոնվերս միավորներ </span>  
            </div>
            <div className="pointsMainBox">
            <PointsSlider  /> 
            </div>
             
                
        </div>
    )
}