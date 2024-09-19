import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from './../pages/Home';
import Applied from './../pages/Applied';
import Blogs from './../pages/Blogs';


const Route = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement: <h2>Error</h2>,
        children : [{
            path : "/",
            element : <Home/>
        },
        {
           path : "/Applied",
           element :  <Applied/>
        },
        {
            path : "/Blogs",
            element: <Blogs/>
        },
    ]
    }
])


export default Route;