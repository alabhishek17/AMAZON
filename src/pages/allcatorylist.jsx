import { useNavigate } from "react-router-dom";


function ALLCATORYLIST() {

    const navigate = useNavigate();

    

    return (
        <div>
            
                <div className="flex justify-around flex-wrap flex-shrink-0 flex-grow-0 my-4">

                    <div  className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center  ">
                        <div className="max-w-sm  bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/61zcD6CSi2L._SX522_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Computers & Accessories</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/computer.jsx`)}>
                                    Explore all        </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/81mrHB1SvbL._SX679_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Women Fashion</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/alexa.jsx`)}>
                                    Explore all        </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/61Ndsk3EhOL._SL1080_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Premium Beauty</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/amazonfresh.jsx`)}>
                                    Explore all        </button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Ethnic/Gemstone_Shades._SS700_QL85_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Alexa</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/alexa.jsx`)}>
                        Explore all       </button>
                    </div>
                </div>
            </div> */}
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/Incrementalscroll/V1/coupons._SS700_QL85_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Fashion</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/fashion.jsx`)}>
                                    Explore all       </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0ac6449b-215a-44f3-98f5-28bab8724d9e._CR0%2C0%2C1500%2C1500_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Grocery</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/productcatory.jsx`)}>
                                    Explore all       </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/61B6d6gWriL._SL1500_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Musical Instruments & DJ Equipment</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/musical.jsx`)}>
                                    Explore all       </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Brandsinfocus/Puma-40-60_Off_775x1090._SX564_QL85_FMpng_.png" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Sports & Outdoors</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/sports.jsx`)}>
                                    Explore all        </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/pv-target-images/931acdec3c2ac4fe7ca5026f80a32792f1f4afb1680d9c1345b3c0f674bcf9fd._UR2000,3000_SX750_FMjpg_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Prime Video</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/primevideo.jsx`)}>
                                    Explore all       </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/61rEc3pkrpL._SL1200_.jpg" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p className="text-gray-600 mt-2"></p>
                                <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(`/productphone.jsx`)}>
                                    Explore all        </button>
                            </div>
                        </div>
                    </div>
            
                </div>
        
        </div>
    )
}
export default ALLCATORYLIST;