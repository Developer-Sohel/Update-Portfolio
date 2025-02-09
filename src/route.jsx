import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts/MainLayouts";
import Home from "./Pages/Home/Home";
import Expertise from "./Pages/Expertise/Expertise";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,

      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/expertise',
            element:<Expertise/>
        },

        

      ]
    },
  ]);