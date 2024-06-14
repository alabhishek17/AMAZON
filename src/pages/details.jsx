import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducer/slices/cartSlice";
function DRTAIL() {
    const [detaildata, setDetaildata] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();  //
    useEffect(() => {
        feachData()
    }, [id])
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'be8121cb02mshc41e2b8ffe7322dp193598jsn52c63d92b682',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };
    async function feachData() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data);
            setDetaildata(result.data)
        } catch (error) {
            console.error(error);
        }
    }
    if (!detaildata) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            {detaildata.product_photo ? (
                <div className="flex border border-gray-200 rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
                    <div className="w-1/3">
                        <img className="rounded-lg" src={detaildata.product_photo} alt="product" />
                    </div>
                    <div className="w-2/3 pl-4">
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{detaildata.product_title}</h5>
                        <p className="text-gray-700 dark:text-gray-300">{detaildata.product_description}</p>
                        <div className="flex items-center mt-2">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className={`w-4 h-4 ${index < detaildata.product_star_rating ? 'text-yellow-300' : 'text-gray-300'} `}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                {detaildata.product_star_rating}
                            </span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{detaildata.product_price}</span>
                            <button
                                className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => dispatch(addToCart({
                                    asin: detaildata.asin,
                                    product_title: detaildata.product_title,
                                    product_price: detaildata.product_price,
                                    product_photo: detaildata.product_photo
                                }))}
                            >
                                Buy
                            </button>

                        </div>
                    </div>
                </div>


            ) : (
                <h1>no data</h1>
            )
            }

        </div>
    )
}
export default DRTAIL