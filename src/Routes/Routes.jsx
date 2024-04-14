import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/Profiles/UpdateProfile";
import UserProfile from "../Pages/Profiles/UserProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EstateDetails from "../Pages/EstaeDetails/EstateDetails";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/estates/estate.json")
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/userProfile',
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estatedetails/:id',
                loader: () => fetch("/estates/estate.json"),
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
            }

        ]
    },
]);

export default router