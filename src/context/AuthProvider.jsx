import {createContext, useState} from 'react';

// exportconst {provider}=createContext()
export const authContext = createContext();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
console.log(user);
const login =(info)=>{
    setUser(info);
}

  return (
    <authContext.Provider value={{user, login}} >
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider

