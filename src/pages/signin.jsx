

import { getdata } from "../components/passwords/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SIGNIN(){
    const [login,setLogin]=useState(false);
    const navigate=useNavigate()
 
    const handaleLogin=(e,type)=>{
      e.preventDefault()
      const email=e.target.email.value
      const password=e.target.password.value
           
      if(type==="signUp"){
      createUserWithEmailAndPassword(getdata,email,password).then(data=>{
        console.log(data,"authData")
        navigate('/home.jsx')
    }).catch(err=>{
        alert(err.code)
        setLogin(true)
    })
}else{
    signInWithEmailAndPassword(getdata,email,password).then(data=>{
        console.log(data,"authData")
        navigate('/home.jsx')
    }).catch(err=>{
        alert(err.code)
    })

}
    }

    return(
        <div className="flex justify-center items-center h-screen">
          <div className=" border border-black-500 px-10 py-10 bg-gray-800 rounded-lg">
            <div className="">
            <h1 className=" text-center text-white mb-4">{login?"signIn":"signUp"}</h1>
            </div>
            <form onSubmit={(e)=>handaleLogin(e,login?"signIn":"signUp")}>
            <div className="">
                <input type="email" name="email" placeholder="enter Email" className="bg-gray-600 mb-4 rounded-lg text-white border-none"/>
            </div>
            <div className="">
                <input type="password" name="password" placeholder="password" className=" bg-gray-600 mb-4 text-white rounded-lg"/>
            </div>
            <div className="flex justify-center bg-yellow-300 rounded-lg">
                <button>
                   {login?"signIn":"signUp"}
                </button>

            </div>
            </form>
            <div>
                <h2 className=" mt-4 text-white">Don't have an account</h2>
            </div>
          </div>
        </div>
    )
}
export default SIGNIN;