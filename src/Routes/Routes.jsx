import { createBrowserRouter, } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/Profiles/UpdateProfile";
import UserProfile from "../Pages/Profiles/UserProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/userProfile',
                element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }

        ]
    },
]);

export default router