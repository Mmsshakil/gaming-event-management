import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    }
])

export default router;