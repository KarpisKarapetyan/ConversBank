import { useNavigate } from 'react-router-dom'

function DepositInfo (){
    const navigate = useNavigate()
    const goToDetails = ()=>{
        navigate ("../loanDetails")
    }

    return (
        <div>
            <div className='OptionsIndoMain'>
                <span> Տոկոսադրույք</span>
                <span>  16.9 % </span>
            </div>
            <div> <span> Հաշվարկները կրում են մոտավոր բնույթ </span> </div>
            <div> 
                <button onClick={goToDetails} > Մանրամասն </button>
            </div>

        </div>
    )
}
export default DepositInfo
