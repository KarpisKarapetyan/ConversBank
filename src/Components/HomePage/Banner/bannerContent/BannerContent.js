import { NavLink } from "react-router-dom"

export const BannerContent = ({item}) => { 
    return (
        <div className="bannerContent">
            <span className="bannerTitle"  > {item.title} </span>
            <span className="bannerMessage"> {item.message} </span>
            <NavLink to = {item.link}> <button> Ավելին</button> </NavLink>  
        </div>
    )
}