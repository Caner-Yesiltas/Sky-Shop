import React, { useContext } from 'react'
import { authContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      {user? <Outlet/> : <Navigate to='/'/>}
    </div>
  )
}

export default PrivateRouter