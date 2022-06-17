import './ConversMobile.css'
import googlePlay from '../ConversPoints/PointsSlider/img/GooglePlay.png'
import appStore from '../ConversPoints/PointsSlider/img/AppStore.png'
import phones from '../ConversPoints/PointsSlider/img/Phones.png' 

export default function  ConversMobile () {
    return (
        <div className= "ConversMobileMain">
            <div style={{width : "50%"}}>
                <p style={{dispay : 'block'}} >Converse Mobile</p>
                <span> Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա կենտրոնանալ տեքստի ձևավորման վրա:</span>
                <div style={{ display : 'flex', gap : "22px" , marginTop : "40px"}}>
                    <div style={{ display : 'flex', gap : "10px" }}>
                      <a target='_blank' href='https://play.google.com/store/apps/details?id=am.conversebank.conversebankmobile.release&hl=hy&gl=US' rel="noreferrer"><img src={googlePlay}  /> </a>
                      <a target='_blank' href='https://apps.apple.com/am/developer/converse-bank-cjsc/id1276985152' rel="noreferrer"><img src={appStore}  /> </a>

                    </div>
                </div>
            </div>   
            <images  >
                    <img src={phones} ></img>
            </images>
        </div>
    )
}