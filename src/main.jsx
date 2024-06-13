import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import NAVBAR from './components/NAVBAR/navbar'
import FOOTER from './components/FOOTER/footer'
import HOME from './pages/home'

import CART from './pages/cart'
import ORDER from './pages/order.jsx'
import ADMIN from './pages/admin.jsx'
import ALLPRODUCT from './pages/allProducts.jsx'
import DASHBORD from './pages/dashbord.jsx'
import MYSTATE from './context/myState.jsx'
import { Provider } from 'react-redux'
import store from './reducer/store/index.jsx'
import LOGIN from './pages/signin.jsx'
// import LOGOUT from './pages/logout.jsx'
import ProductCard from './pages/productinfo.jsx'
import CATEGORY from './pages/productcatory.jsx'
import DRTAIL from './pages/details.jsx'
import PHONE from './pages/productphone.jsx'
import COMPUTER from './pages/computer.jsx'
import FASHION from './pages/fashion.jsx'
import GAMES from './pages/alexa.jsx'
import MUSICAL from './pages/musical.jsx'
import DEVICES from './pages/devices.jsx'
import PRIMEVIDEO from './pages/primevideo.jsx'
import SPOETS from './pages/sports.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ALEXA from './pages/alexa.jsx'
import SIGNIN from './pages/signin.jsx'
import SIGNOUT from './pages/signout.jsx'
const Mainjsx=()=>{
  return(
    <>
    <Provider store={store}>

    <MYSTATE>
    
    <NAVBAR/>
    <ToastContainer />
    <Outlet/>
    <FOOTER/>
    </MYSTATE>
    </Provider>
    </>
  )
  }
  
  const routerA=createBrowserRouter([
    {
      path:"/",
      element:<Mainjsx/>,
      children:[
   {
    path:"/home.jsx",
      element:<HOME/>,
   },
        {
      path:"/order.jsx",
      element:<ORDER/>
    },{
      path:"/cart.jsx",
      element:<CART/>
    },{
      path:"/allProducts.jsx",
      element:<ALLPRODUCT/>
    }
    ,{
      path:"/fashion.jsx",
      element:<FASHION/>
    },{
      path:"/primevideo.jsx",
      element:<PRIMEVIDEO/>
    },{
      path:"/sports.jsx",
      element:<SPOETS/>
    },
    {
      path:"/productphone.jsx",
      element:<PHONE/>
    },{
      path:"/musical.jsx",
      element:<MUSICAL/>
    },{
      path:"/devices.jsx",
      element:<DEVICES/>
    }
    ,{
      path:"/alexa.jsx",
      element:<ALEXA/>
    },{
      path:"/computer.jsx",
      element:<COMPUTER/>
    },{
      path:"/signin.jsx",
      element:<SIGNIN/>
    },{
      path:"/signout.jsx",
      element:<SIGNOUT/>
    }
    ,{
      path:"/allProducts.jsx/:asin",
      element:<ProductCard/>
    },{
      path:"/productcatory.jsx",
      element:<CATEGORY/>
    },{
      path:"/details/:id",
      element:<DRTAIL/>
    }
      ]
  }
  ])
  
  const roote = ReactDOM.createRoot(document.getElementById("root"))
  
    roote.render(<RouterProvider router={routerA}/>)
