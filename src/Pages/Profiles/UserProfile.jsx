import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function UserProfile() {
    document.title = 'User | Profile'
    const { user } = useContext(AuthContext)
    return (
        <div className=" flex flex-col justify-center items-center h-screen space-y-4">
            <div className=" text-3xl font-bold">{user.displayName}</div>
            <div className=" text-lg font-semibold"> {user.email}</div>
            <div className=" w-60"> {user?.photoURL? <img className=" w-full" src={user.photoURL} alt="" />: <div className=" w-80 h-72 border flex justify-center items-center "><p>No Photo found</p></div> }</div>
        </div>
    )
}