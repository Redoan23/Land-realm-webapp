import { Link, NavLink, useNavigate } from "react-router-dom"
import "./nav.css"
import Login from "../../Login/Login"
import { IoPersonCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Navbar() {

    const { user, logout } = useContext(AuthContext)
    console.log(user)

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        {user && <li><NavLink to={'/updateProfile'}>Update Profile</NavLink></li>}
        {user && <li><NavLink to={'/userProfile'}>User Profile</NavLink></li>}

    </>

    const navigate = useNavigate()

    return (
        <div className="navbar bg-base-100 pt-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-4xl text-white "><span className="   text-green-400 font-black">Land</span> <span className="stroke text-white">Realm</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">


                {
                    user ?
                        <div className=" flex items-center gap-3">
                            {user?.photoURL ? <div data-tip={user.displayName} className="lg:tooltip  w-10 h-30"><img className="  w-full h-full rounded-full lg:tooltip" src={user.photoURL} alt="" /></div> : <div data-tip={user.displayName} className=" text-5xl">< IoPersonCircle /></div>}
                            <Link onClick={logout}><button className=" btn">Logout</button></Link>
                        </div>
                        :
                        <div>

                            <Link to='/login'><button className=" btn">Login</button></Link>
                        </div>
                }





            </div>

        </div>
    )
}