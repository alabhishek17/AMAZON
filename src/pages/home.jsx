import { useDispatch, useSelector } from "react-redux";
import FILTER from "../components/FILTER/filter";
import HERO from "../components/HEROSEC/hero";
import ALLCATORYLIST from "./allcatorylist";
import CATEGORY from "./productcatory";
import PHONE from "./productphone";
import { addToCart, deleteFromCart } from "../reducer/slices/cartSlice";
function HOME(){
    const dispatch = useDispatch();
    const cartIteam = useSelector((state)=>state.cart)
  
    console.log(cartIteam);
    const addCart=()=>{
        dispatch(addToCart("car"));
    }

    const deleteCart=()=>{
        dispatch(deleteFromCart("car"));
    }
    return (
        <div>
            {/* <div className="flex gap-3">
                <button onClick={()=>addCart()}>add</button>
                <button onClick={()=>deleteCart}>delete</button>
            </div> */}
            <HERO/>
            <FILTER/>
            {/* <CATEGORY/> */}
            {/* <PHONE/> */}
            <ALLCATORYLIST/>
        </div>
    )
}
export default HOME;