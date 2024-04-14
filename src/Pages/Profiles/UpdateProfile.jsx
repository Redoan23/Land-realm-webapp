import { useContext, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { updateProfile } from "firebase/auth"

export default function UpdateProfile() {
    document.title = 'Update | Profile'
    const { user } = useContext(AuthContext)
    // const [newName, setNewName] = useState(null)
    // const [URL, setURL] = useState(null)
    // console.log(URL, newName)


    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const Photo = e.target.PhotoURL.value
        let newName = name ? name : user.displayName
        let url = Photo ? Photo : user.photoURL
        updateProfile(user, {
            displayName: newName,
            photoURL: url,
        })
    }

    return (
        < div >
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <p><span className="">Current Username</span> : <span className=" font-semibold">{user.displayName}</span></p>
                        <p><span>Current Useremail</span> : <span className=" font-semibold">{user.email}</span></p>
                        <p><span>Current PhotoURL </span>: <span className=" font-semibold">{user.photoURL}</span></p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update Username</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update PhotoURL</span>
                                </label>
                                <input type="text" name="PhotoURL" placeholder="PhotoURL" className="input input-bordered" />
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}