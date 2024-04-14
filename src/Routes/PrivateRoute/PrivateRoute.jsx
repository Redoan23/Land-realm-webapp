import { useContext } from "react"
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider"
import { useNavigate, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    if(loading){
        return <span className="loading loading-ring w-40 flex justify-center items-center h-screen mx-auto"></span>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>

}