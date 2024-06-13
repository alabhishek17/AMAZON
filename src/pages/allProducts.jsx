// import { useGetProductIteamQuery } from "../reducer/services/productlist";
// import { useNavigate  } from 'react-router-dom';

// function ALLPRODUCT(){

//   const { data, error, isLoading} = useGetProductIteamQuery({
//     query: 'Phone',
//     page: 1,
//     country: 'US',
//     sort_by: 'RELEVANCE',
//     product_condition: 'ALL',
//   });

//     console.log(data,error,isLoading);

//    //handleing product detali button
//    const navigate=useNavigate()

//    const handleProdetails=(asin)=>{
    
//     navigate(`/allProducts.jsx/${asin}`)
//    }

//     if(isLoading){
//         return <h1>LOADIN...</h1>
//     }
//     if(error){
//         return <h1>error is found</h1>
//     }

//     return(
//         <div>
//            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
//             <h1>all Products</h1>
//            {
//             data.data.products.map((iteam,asin)=>(
//                 <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500" key={asin}>
//       <img className="aspect-w aspect-h object-cover " src={iteam.product_photo}  />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">{iteam.product_title}</h3>
//         <p className="text-gray-600 mt-2">{iteam.product_price}</p>
//         <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>handleProdetails(iteam.asin)}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//             ))
//            }
//             </div> 
//       </div>

       
//     )
// }
// export default ALLPRODUCT;

import COMPUTER from "./computer";
import DEVICES from "./devices";
import FASHION from "./fashion";
// import GAMES from "./alexa";
import MUSICAL from "./musical";
import PRIMEVIDEO from "./primevideo";
import CATEGORY from "./productcatory";
import PHONE from "./productphone";
import SPOETS from "./sports";
import ALEXA from "./alexa";
function ALLPRODUCT(){
  return(
    <>
  <PHONE/>
  <COMPUTER/>
  <ALEXA/>
  <FASHION/>
  <DEVICES/>
  <MUSICAL/>
  <PRIMEVIDEO/>
  <SPOETS/>
  <CATEGORY/>
  </>
  )
}
export default ALLPRODUCT;