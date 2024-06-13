
import { useGetProductIteamQuery,useGetProductsByMusicalInstrumentQuery } from "../reducer/services/productlist"; 
import { useNavigate } from "react-router-dom";
function MUSICAL(){
    const navigate=useNavigate();
    const { data: musicData, error: musicError, isLoading: isLoadingmusic } = useGetProductsByMusicalInstrumentQuery(
        "search?query=Musical Instruments & DJ Equipment&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL"
      );
       
    console.log(musicData,musicError,isLoadingmusic);
    if(isLoadingmusic){
        return <h2>Loading....</h2>
    }
    if(musicError){
        return <h2>error...</h2>
    }
return(
    <div className="flex flex-wrap justify-center">
            {musicData.data.products.map((item,asin) => (
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
export default MUSICAL;