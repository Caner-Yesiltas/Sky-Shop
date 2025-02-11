import {createContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

// exportconst {provider}=createContext()
export const authContext = createContext();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const Navigate = useNavigate();
console.log(user);
const login =(info)=>{
    setUser(info);
    Navigate('/dashboard');
}

const logout =() => setUser(null);


  return (
    <authContext.Provider value={{user, login}} >
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider

