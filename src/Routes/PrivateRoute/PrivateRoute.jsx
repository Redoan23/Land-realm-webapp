import { useContext } from "react"
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider"
import { useNavigate, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    if (user) {
        return children
    }

    return <Navigate to={'/login'}></Navigate>

}