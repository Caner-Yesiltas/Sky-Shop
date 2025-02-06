import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import NotFound from '../pages/NotFound';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
<Routes>
 <Route path='/' element={<Login/>}/>
 <Route path="/dashboard" element={<Home/>}/>
 <Route path="dashboard/products" element={<Products/>}/>
 <Route path="dashboard/about" element={<About/>}/>
 <Route path="*" element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  )
}

export default AppRouter