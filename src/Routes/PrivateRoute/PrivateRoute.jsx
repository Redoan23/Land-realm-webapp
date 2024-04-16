import { useContext } from "react"
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const location = useLocation()
    console.log(location)
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-ring w-40 flex justify-center items-center h-screen mx-auto"></span>
    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>

}