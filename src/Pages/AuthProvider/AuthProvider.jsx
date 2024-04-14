import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const newProfile = () => {
        return updateProfile()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe
        }
    }, [])

    const logout = () => {
        signOut(auth)
            .then(res => {
                alert('successfully logged out')
            })
    }



    const authInfo = { user, createUser, login, logout, googleLogin, githubLogin, newProfile, loading }

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    )
}

export default AuthProvider