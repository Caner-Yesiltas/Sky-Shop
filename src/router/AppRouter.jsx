import React from 'react'
import { Route, Routes } from "react-router-dom";

import Login from '../pages/Login';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PrivateRouter from './PrivateRouter';


const AppRouter = () => {
  return (
    <> 
<Routes>
 <Route path='/' element={<Login/>}/>
<Route path="" element={<PrivateRouter/>} >
<Route path="/dashboard" element={<Home/>}/>
 <Route path="dashboard/products" element={<Products/>}/>
 <Route path="dashboard/about" element={<About/>}/>
</Route>
 <Route path="*" element={<NotFound/>}/>
</Routes>
</>
  )
}

export default AppRouter