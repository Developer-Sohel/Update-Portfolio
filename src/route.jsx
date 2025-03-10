import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./MainLayouts/MainLayouts";
import Home from "./Pages/Home/Home";
import Expertise from "./Pages/Expertise/Expertise";
import { About } from "./Pages/About/About";
import Error from "./Components/Error/Error";
import Blog from "./Pages/Blog/Blog";
import BlogDes from "./Pages/BlogDes/BlogDes";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/project";


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
            path:'/portfolio',
            element:<Project/>
        },
        {
            path:'/error',
            element:<Error/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/blogdes',
            element: <BlogDes/>
        },

      {
        path: "/des/:blogId",
        element: <BlogDes/>,
        
      },
      {
        path: '/contact',
        element: <Contact/>

      },

     

      
        

      ]
    },
  ]);