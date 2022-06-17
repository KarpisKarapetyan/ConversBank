import { useNavigate } from 'react-router-dom'
import './OptionsInfo.css'

function OptionsInfo (){
    const navigate = useNavigate()
    const goToDetails = ()=>{
        navigate ("../loanDetails")
    }

    return (
        <div>
            <div className='OptionsInfoMain'>
                <span> Տոկոսադրույք</span>
                <span>  16.9 % </span>
            </div>
            <div> <span> Հաշվարկները կրում են մոտավոր բնույթ </span> </div>
            <div> 
                <button className='calcButton' onClick={goToDetails} > Մանրամասն </button>
            </div>

        </div>
    )
}
export default OptionsInfo
