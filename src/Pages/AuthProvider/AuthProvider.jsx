import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../../firebase/firebase.config"

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, gitProvider)
    }
    const newProfile = () => {
        return updateProfile()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe
        }
    }, [])

    const logout = () => {
        signOut(auth)
        alert('successfully logged out')
    }



    const authInfo = { user, createUser, login, logout, googleLogin, githubLogin, newProfile }

    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    )
}

export default AuthProvider