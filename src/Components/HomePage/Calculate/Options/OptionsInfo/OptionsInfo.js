import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { languageSelector } from '../../../../../Redux/slices/language/language'
import './OptionsInfo.css'

function OptionsInfo (){
    const navigate = useNavigate()
    const params = useParams()
    const currentLang = useSelector(languageSelector).toLowerCase()
    useEffect(()=>{  params.id = currentLang},[currentLang])
     
    return (
        <>  
            <div className='pracentDiv' >
                <span > Տոկոսադրույք </span>
                <span style={{fontWeight : "bold"}} > 16.9 % </span>
            </div>
            <span style={{display:"inline-block" , margin: "10px 0"}}> Հաշվարկները կրում են մոտավոր բնույթ </span> 
            <button className='calcButton' onClick={()=> navigate (`../loanDetails/${params.id}`)} > Մանրամասն </button>
        </>
    )
}
export default OptionsInfo
