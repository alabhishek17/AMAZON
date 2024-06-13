import { useNavigate } from "react-router-dom";

// Your component here...
function SearchProduct({ searchQuery }) {
    const navigate = useNavigate();

    const categories = [
        {
            title: "Computers & Accessories",
            image: "https://m.media-amazon.com/images/I/61zcD6CSi2L._SX522_.jpg",
            path: "/computer.jsx"
        },
        {
            title: "Books",
            image: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/653075-amaozn-atria-orion-childrens-books-ends-six-e25a7cd23195d4be0c8e326b344282e5.jpg",
            path: "/alexa.jsx"
        },
        {
            title: "Amazon Fresh",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/Mob_Tile_400x400_3x.jpg",
            path: "/amazonfresh.jsx"
        },
        {
            title: "Fashion",
            image: "https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/Incrementalscroll/V1/coupons._SS700_QL85_.jpg",
            path: "/fashion.jsx"
        },
        {
            title: "Grocery",
            image: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/0ac6449b-215a-44f3-98f5-28bab8724d9e._CR0%2C0%2C1500%2C1500_.jpg",
            path: "/productcatory.jsx"
        },
        {
            title: "Musical Instruments & DJ Equipment",
            image: "https://m.media-amazon.com/images/I/61B6d6gWriL._SL1500_.jpg",
            path: "/musical.jsx"
        },
        {
            title: "Sports & Outdoors",
            image: "https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/Brandsinfocus/Puma-40-60_Off_775x1090._SX564_QL85_FMpng_.png",
            path: "/sports.jsx"
        },
        {
            title: "Prime Video",
            image: "https://m.media-amazon.com/images/S/pv-target-images/931acdec3c2ac4fe7ca5026f80a32792f1f4afb1680d9c1345b3c0f674bcf9fd._UR2000,3000_SX750_FMjpg_.jpg",
            path: "/primevideo.jsx"
        },
        {
            title: "Phone",
            image: "https://m.media-amazon.com/images/I/61rEc3pkrpL._SL1200_.jpg",
            path: "/productphone.jsx"
        }
    ];
  // Your existing code...

  return (
    <div className="flex justify-around flex-wrap flex-shrink-0 flex-grow-0 my-4">
      {categories.map(category => (
        <div key={category.title} className="flex flex-wrap mb-10 flex-shrink-0 flex-grow-0 justify-center my-4">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <img className="aspect-w aspect-h object-cover" src={category.image} alt={category.title} />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300" onClick={() => navigate(category.path)}>
                Explore all
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default  SearchProduct;