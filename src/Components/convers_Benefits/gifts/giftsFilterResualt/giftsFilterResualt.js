import { useEffect,  useState } from "react"
import { useSelector } from "react-redux"
import { giftsCheckSelectsSelector, giftsMainArrSelector, giftsSelectsSelector } from "../../../../Redux/slices/giftsSelects/giftsSelects"

export const GiftsFilterResualt = ({ products , giftsSliderValue,setGiftsSliderValue})=>{
    let categorySelect = useSelector(giftsSelectsSelector)
    const brendsSelect = useSelector(giftsCheckSelectsSelector)
    const giftsMainReduxArr = useSelector(giftsMainArrSelector)
    const [filteredProducts , setFilteredProducts ] = useState('')
    
    
    useEffect(()=>{
        categorySelect = categorySelect.length > 15 ? JSON.parse(categorySelect) : categorySelect
        setFilteredProducts(
              (giftsSliderValue[0]!==3000 ||  giftsSliderValue[1]!== 13000)
                && categorySelect === "" 
                && brendsSelect.length ===0 ? products.length>0 && products?.filter(item=> (item.points[0] > giftsSliderValue[0] ) 
                                                                                    &&  item.points[0]< giftsSliderValue[1] )
                
            : (giftsSliderValue[0]!==3000 ||  giftsSliderValue[1]!== 13000)
                && categorySelect !== "" 
                && brendsSelect.length === 0 ? products.length>0 && products?.filter(item=> (item.points[0] > giftsSliderValue[0] 
                                                                                    &&  item.points[0]< giftsSliderValue[1]) 
                                                                                    && item.category === categorySelect)
            : (giftsSliderValue[0]!==3000 ||  giftsSliderValue[1]!== 13000)
                && categorySelect === ""
                && brendsSelect.length > 0 ? products.length > 0 && products?.filter(item=>(item.points[0] > giftsSliderValue[0] 
                                                                                    &&  item.points[0]< giftsSliderValue[1]) 
                                                                                    && brendsSelect.includes(item.brandName))
            : (giftsSliderValue[0]===3000 ||  giftsSliderValue[1]=== 13000)
                && categorySelect === ""
                && brendsSelect.length > 0 ? products.length > 0 && products?.filter(item=>(item.points[0] > giftsSliderValue[0] 
                                                                                    &&  item.points[0]< giftsSliderValue[1]) 
                                                                                    && brendsSelect.includes(item.brandName))
                
            : products      
        )
    },[giftsSliderValue ,giftsMainReduxArr,products])

    return(  
            <div className = 'gifts_ProductsContanier'>
                { filteredProducts.length > 0 && filteredProducts?.map((product , i)=>(
                        <div className="gifts_ProductCard" key={i}>
                            <div className="gifts_ProductCard_Header">
                                <img src={product.brandLogo}/> 
                                <span>{ product.brandName}</span> 
                            </div>
                            <div className="gifts_ProductCard_Body">
                                <img src={product.productImg}/>
                                <span>{product.productName}</span>
                                <span>{product.productDescription}</span>
                                <span>{product.points[0]>9999  ? product.points[0].toLocaleString("ru") : product.points[0]}</span>
                                <span>{product.points[1]}</span>
                            </div>
                            <div className="gifts_ProductCard_Code">
                                <label>
                                    <span>Կոդ</span>
                                    <span >{product.code}</span>
                                    <img src={product.codePaper}/>
                                </label>
                            </div>
                        </div >
                    ))
                }
            </div>
    )
}