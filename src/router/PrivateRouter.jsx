import React, { useContext } from 'react'
import { authContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const PrivateRouter = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      {user? <>  <Navbar/> <Outlet/> </> : <Navigate to='/'/>}
    </div>
  )
}

export default PrivateRouter