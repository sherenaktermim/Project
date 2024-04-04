import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Notfound from "../pages/static/Notfound";
import AllProducts from "../pages/products/AllProducts";
import SignUp from "../pages/login/SignUp";
import Login from "../pages/login/Login";
import Loding from "../pages/Loding";


const MainRoutes  = createBrowserRouter([
    {
path:"/",
element:<MainLayout/>,
children:[

   {
    path:"/",
    element:<Homepage/>,
   },
   {
    path:"/products/all",
    element:<AllProducts/>
   },
   

]
},



{
    path:"*",
    element:<Notfound/>,
},

{
    path:"/sign-up",
    element:<SignUp/>,
},
{
    path:"/log-in",
    element:<Login/>,
},

{
    path:"/loading",
    element:<Loding/>
   },
])

export default MainRoutes;