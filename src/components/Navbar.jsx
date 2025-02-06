import React, { useState } from 'react';
import logo from '../assets/logo3.png';
import { closeNavbar, openNavbar } from '../helper/icons';
import { NavLink, useLocation } from 'react-router-dom';

const navigation = [
  {
    title:'Home',
    path:'/dashboard'
  },
  {
    title:'Products',
  },
  {
    title:'About',
    path:'/dashboard/about'
  }
]

const Navbar = () => {
  const [show,setShow] = useState(false);
  const location = useLocation();


  return (
    <nav className='bg-navbarColor md:text-sm'>
      <div className='gap-x-14 items-between max-w-screen-xl mx-auto  px-4 md:flex md:px-8'>
        <div  className='flex items-center justify-center py-5 ' >
          <a href='/' target='' className='flex items-center'>
           
            <img src={logo} alt='logo' width={75} height={75} />
            <span>Sky Shop</span>
          </a>
          <div className='md:hidden md:flex'>
            <button  onClick={()=>setShow(!show)} className='text-gray hover:text-gray-800'>
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div className={`${show ? "flex flex-col" : "hidden"} md:flex md:flex-row flex-1 items-center`} >
          
          <ul className='md:flex md:space-x-6' >
            {
              navigation.map((item)=>(
                <li className='text-gray700 font-medium flex justify-center' key={item.title}  >
                  <NavLink className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white  ${location.pathname === item.pathname ? "underline scale-110" : ""}    `} to={item.path}>{item.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
