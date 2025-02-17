import {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

// exportconst {provider}=createContext()
export const authContext = createContext();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user") || null));
const Navigate = useNavigate();
console.log(user);

const login =(info)=>{
    setUser(info);
    Navigate('/dashboard');
}

const logout =() => setUser(null);

useEffect(() => {
 sessionStorage.setItem("user", JSON.stringify(user));
}, [user])


  return (
    <authContext.Provider value={{user, login, logout}} >
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider

