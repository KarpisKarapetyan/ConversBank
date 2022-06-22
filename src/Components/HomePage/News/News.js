import { NavLink } from 'react-router-dom'
import './News.css'

export default function News () {
    const news = [
        {
            data  : "16/06/2022 " , 
            message : `Կոնվերս Բանկի փորձը ներկայացվել է 
            Հայաստանում Արգենտինայի առեւտրային
            պալատի բացման արարողության ժամանակ`        
        },
        {
            data  : "16/06/2022 " , 
            message : `Բացառիկ հնարավորություն Կոնվերս Բանկի
            VISA Signature քարտապանների համար `
        },
        {
            data  : "16/06/2022 " , 
            message : `Cashback եւ անվճար Ուսանողականքարտեր՝
            Սեպտեմբերի 1-ին ընդառաջ`
        },
        
    ]
    const styleMain = {
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        width: '366px',
        height: '152px',
        left: '814px',
        top: '58px',
        background: '#FFFFFF',
        border: '1px solid #E9E9E9',
        borderRadius: '20px',
        padding : '20px'
    }

    return (
        <>
        <div className= "newsMain">
            <div className='allNews'>
                <span > Նորություններ </span>
                <NavLink className='navLinkNews' to="///"> Բոլոր Նորությունները </NavLink>
            </div>
       </div>
       <div style={{display : 'flex', justifyContent : 'center', alignItems: 'center', gap: "20px", marginBottom : '105px'}}>
       {
        news.map((item, i )=>{
            return (
                <div style={styleMain} key={item.i}>
                    <div >
                        <span style={{display : 'block' , marginBottom : "29px"}}> {item.data}</span>
                        <span> {item.message} </span>
                    </div>
                </div>
            )
            })
    }
       </div>
       
        </>
        
    )
}