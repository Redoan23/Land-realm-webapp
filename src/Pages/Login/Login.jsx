import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"

export default function Login() {

    document.title='Login'

    const { login, googleLogin, githubLogin } = useContext(AuthContext)
    const [errMsg, setErrMsg] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setErrMsg(null)

        login(email, password)
            .then(res => {
                console.log(res.user)
                alert('login successful')
            })
            .catch(err => {
                console.error(err)
                setErrMsg(err)

            })

        e.target.reset()
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div>
                            {
                                errMsg && <p className="text-red-500 text-center">invalid credential</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-blue-500 bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:text-md hover:border-0 hover:border-blue-600">Login</button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center pb-5 gap-6">
                        <Link onClick={googleLogin}><span className="text-blue-600 font-semibold">G</span><span className=" text-red-600">o</span><span className=" text-yellow-400">o</span><span className=" text-blue-600">g</span><span className=" text-green-700">l</span><span className="text-red-600">e</span></Link>
                        <Link onClick={githubLogin}><span className="text-black ">Github</span></Link>
                    </div>

                    <p className="text-xs pb-3 flex justify-center gap-2">Don't have an account? <Link to='/register' className="text-red-600">Register</Link></p>

                </div>
            </div>
        </div>
    )
}