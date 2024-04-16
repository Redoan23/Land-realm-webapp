import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { updateProfile } from "firebase/auth";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";


export default function Register() {

    document.title = 'Register'

    const { createUser } = useContext(AuthContext)
    const [errMsg, setErrMsg] = useState('')
    const [showPass, setShowPass] = useState(false)

    const handleRegisterSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.PhotoUrl.value
        const password = e.target.password.value

        setErrMsg('')

        if (password.length < 6) {
            const err = 'your password must be at least six character'
            setErrMsg(err)
            return
        }

        if (!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)) {

            const err = 'your password must contain an uppercase and an lowercase letter'
            setErrMsg(err)
            return

        }

        createUser(email, password)
            .then(result => {
                console.log(result)
                const user = result.user
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })

                alert('Congratulations! Registration Successful.')

            })
            .catch(err => (
                console.error(err)
            ))

        e.target.reset()

    }

    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="PhotoUrl" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className=" relative input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className=" absolute top-[360px] left-72 md:left-[325px]" onClick={() => { setShowPass(!showPass) }}>
                            {!showPass && <IoIosEye />}
                            {showPass && <IoIosEyeOff />}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-transparent  border-2 border-red-500 text-red-700 hover:bg-red-500 hover:border-0 hover:text-white">Register</button>
                        </div>
                    </form>

                    <p className="text-xs text-center pb-3">Already have an account? <Link to='/login' className="text-blue-600">Login</Link></p>

                    {
                        errMsg && <p className=" text-center text-red-500 py-2">{errMsg}</p>
                    }
                </div>
            </div>
            {/* <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Flip
            /> */}
        </div>
    )
}