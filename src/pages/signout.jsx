import { getdata } from "../components/passwords/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; 
function SIGNOUT(){
    const navigate=useNavigate()
   
    function handlesignout(){
        signOut(getdata).then(val=>{
            console.log(val,"val");
            navigate('/signin.jsx')
        })
   }
    return(
        <div className="flex justify-center items-center h-screen">
          <div className=" border border-black-500 px-10 py-10 bg-gray-800 rounded-lg">
            <div className="">
            <h1 className=" text-center text-white mb-4">SIGNOUT</h1>
            </div>
            {/* <form onSubmit={(e)=>handaleLogin(e)}> */}
            <div className="">
                <input type="email" name="email" placeholder="enter Email" className="bg-gray-600 mb-4 rounded-lg text-white border-none"/>
            </div>
            <div className="">
                <input type="password" name="password" placeholder="password" className=" bg-gray-600 mb-4 text-white rounded-lg"/>
            </div>
            <div className="flex justify-center bg-yellow-300 rounded-lg">
                <button onClick={handlesignout}>
                   signout
                </button>

            </div>
            {/* </form> */}
            <div>
                {/* <h2 className=" mt-4 text-white">login agin</h2> */}
            </div>
          </div>
        </div>
    )
}
export default SIGNOUT;