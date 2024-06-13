import {  useState } from "react";
import Mycontext from "./mycontex";
import DRTAIL from "../pages/details";
function MYSTATE(props){
const[mode,setMode]=useState("light");
const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';

    }
}


const [productdata,setProductdata]=useState({DRTAIL})
return(
    <Mycontext.Provider value={{mode,toggleMode}} >
      {props.children}
    </Mycontext.Provider>
)
}

export default MYSTATE;