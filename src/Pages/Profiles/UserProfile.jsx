import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function UserProfile() {
    document.title = 'User Profile'
    const { user } = useContext(AuthContext)
    return (
        <div  className=" flex flex-col justify-center items-center h-screen space-y-4">
            <div className=" text-3xl font-bold">{user.displayName}</div>
            <div  data-aos='fade-right' className=" text-lg font-semibold"> {user.email}</div>
            <div data-aos='fade-left' className=" w-60 h-60 border"> {user?.photoURL? <img className=" w-full h-60" src={user.photoURL} alt="Image of the user" />: <div className=" w-60 h-60 flex justify-center items-center "> <img src={user.photoURL} alt="no photo found" /> </div> }</div>
        </div>
    )
}