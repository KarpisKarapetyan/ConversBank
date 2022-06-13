import { Calculate } from './Calculate/Calculate'
import './Homepage.css'

export const HomePage = () =>{
    return (
        <div className="mainHome">
            <div>
                <Calculate/>
            </div>
        </div>
    )
}