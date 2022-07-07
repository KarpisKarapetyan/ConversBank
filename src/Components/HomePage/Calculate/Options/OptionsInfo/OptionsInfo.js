import { useNavigate, useParams } from 'react-router-dom'
import './OptionsInfo.css'

function OptionsInfo (){
    const navigate = useNavigate()
    const params =useParams()

    return (
        <>  
            <div className='pracentDiv' >
                <span > Տոկոսադրույք </span>
                <span style={{fontWeight : "bold"}} > 16.9 % </span>
            </div>
            <span style={{display:"inline-block" , margin: "10px 0"}}> Հաշվարկները կրում են մոտավոր բնույթ </span> 
            <button className='calcButton' onClick={()=> navigate(`../loanDetails/${params.id}`)} > Մանրամասն </button>
        </>
    )
}
export default OptionsInfo
