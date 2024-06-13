import { useNavigate } from "react-router-dom";


function ALLCATORYLIST() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-center flex-wrap flex-shrink-0 flex-grow-0 my-4">
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4 ">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/I/61zcD6CSi2L._SX522_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Computers & Accessories</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/computer.jsx`)}>
                        Explore all        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/35ccaf21-6529-4890-820c-c79595c5361e._CR0,0,1200,628_SX507_QL67_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Alexa Skills</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/alexa.jsx`)}>
                        Explore all        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0db81042-4977-41c4-9678-2fac0442dc27._CR0,0,1200,628_SX382_QL67_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Amazon Fresh</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
                        Explore all        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Ethnic/Gemstone_Shades._SS700_QL85_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Electronics & Photo</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
                        Explore all       </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/Incrementalscroll/V1/coupons._SS700_QL85_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Fashion</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
                        Explore all       </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/abs-image-upload-na/6/AmazonStores/A21TJRUUN4KGV/40b0ec52d150e2336cc40ac6d9f6089b.w3000.h1500._CR0%2C0%2C3000%2C1500_SX1920_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Grocery</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
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
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
                        Explore all       </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7be142b8-e993-4685-a427-84ad7ac88633._CR0,0,1200,628_SX507_QL67_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Sports & Outdoors</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/allProducts.jsx`)}>
                        Explore all        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/pv-target-images/4a191fa60b74a02a980353a36d2eb1f5fafcbdabe506ddf99a3650e346c36893._SX1920_FMwebp_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Prime Video</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/primevideo.jsx`)}>
                        Explore all       </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
                <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                    <img className="aspect-w aspect-h object-cover " src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/6b9b8bbf-0441-4775-a126-fb1557541ac2._CR0%2C0%2C1500%2C1500_SX420_SY420_.jpg" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-gray-600 mt-2"></p>
                        <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={()=>navigate(`/productphone.jsx`)}>
                        Explore all        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ALLCATORYLIST;