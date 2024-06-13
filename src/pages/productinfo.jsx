import { useParams } from "react-router-dom";
import { useGetProductIteamQuery } from "../reducer/services/productlist";
const ProductCard = () => {
    const  { asin } = useParams();
    const {data,error,isLoading}=useGetProductIteamQuery()
    
    if (isLoading) {
        return <h1>LOADING...</h1>;
      }
      if (error) {
        return <h1>Error found</h1>;
      }
    
      const product = data?.data?.products?.find(p => p.asin === asin);
    return (
      <div>
       < div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <img className="aspect-w aspect-h object-cover" src={product.product_photo} alt={product.product_title} />
      <div className="p-4">
        <h4>{asin}</h4>
        <h2 className="text-2xl font-semibold">{product.product_title}</h2>
        <p className="text-gray-600 mt-2">{product.product_description}</p>
        <p className="text-gray-600 mt-2">${product.product_price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>handleProdetails(iteam.asin)}>
          Buy Now
        </button>
      </div>
    </div>
      </div>
    );
  };

export default ProductCard;
