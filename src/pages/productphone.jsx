
import { useGetProductIteamQuery,useGetProductsByCategoryQuery } from "../reducer/services/productlist"; 
import { useNavigate } from "react-router-dom";
import Loader from "../components/LOADER/loader.jsx";
function PHONE(){
    const navigate=useNavigate();
    const { data: categoryData, error: categoryError, isLoading: isLoadingCategory } = useGetProductsByCategoryQuery(
        "search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL"
      );
       
    console.log(categoryData,categoryError,isLoadingCategory);
    if(isLoadingCategory){
        return <h2><Loader/></h2>
    }
    if(categoryError){
        return <h2>error...</h2>
    }
return(
    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
            {categoryData.data.products.map((item,asin) => (
                <div key={asin} className="max-w-sm rounded overflow-hidden shadow-lg m-4" onClick={()=>navigate(`/details/${item.asin}`)}>
                    <img className="w-full" src={item.product_photo} alt={item.product_title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.product_title}</div>
                        <p className="text-gray-700 text-base">{item.product_price}</p>
                    </div>
                    <div className="px-6 py-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
)
}
export default PHONE;