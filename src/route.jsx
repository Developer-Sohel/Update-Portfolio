import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts/MainLayouts";
import Home from "./Pages/Home/Home";
import Expertise from "./Pages/Expertise/Expertise";
import { About } from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Error from "./Components/Error/Error";

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
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/project',
            element:<Project/>
        },
        {
            path:'/error',
            element:<Error/>
        },

        

      ]
    },
  ]);