import {createContext, useContext, useState, useEffect} from 'react'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");

    // se ja tiver no localstorage, mantem login
    
    useEffect(() => {
        const savedEmail = localStorage.getItem("email")
        if(savedEmail){
            setUser({email: savedEmail})
        }
    }, [])

    const login = (email) => {
        localStorage.setItem("email", email)
        localStorage.setItem("token", token)
        setUser({email})
    }
    
    const logout = () => {
        localStorage.removeItem("email")
        setUser("")
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
