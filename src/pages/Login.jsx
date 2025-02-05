import React, { useContext, useState } from 'react';
import { authContext } from '../context/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {login} =useContext(authContext)
  
 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.toLocaleLowerCase() === 'admin@aa.com' && pass === 'admin') {
      console.log('Login Successfull');
      login({email, pass});
    } else {
      alert('invalid crediantials');
    }

  };
  return (
    <div className='loginDiv'>
      <div className='h-[31.25rem] w-11/12  sm:w-[29.6875rem] bg-white rounded-[1.25rem] o-5 flex flex-col justify-center text-center '>
        <div className='flex justify-center items-center mt-2 gap-2'>
          <span className='w-[6px] h-[30px] bg-yellow-500'></span>
          <h1 className='text-[1.375rem] sm:text-[32px] font-montserrat font-[700] uppercase'>
            SKY SHOP
          </h1>
        </div>

        <div className='my-2'>
          <h3 className='font-montserrat font-[600]'>SIGN IN ⛈️ </h3>
          <p className='font-montserrat text-labelColor text-label mt-1'>
            Enter your credentials to acces your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-5 text-left p-3'
        >
          <div className='flex flex-col gap-2'>
            <label
              className="font-montserrat text-label text-labelColor hover:after:content-['admin@aa.com'] hover:after:text-red hover:after:pl-3 hover:cursor-pointer"
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='login-input'
              id='email'
              placeholder='Enter your email'
              required
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className='flex flex-col gap-2'>
            <label
              className="font-montserrat text-label text-labelColor hover:after:content-['admin'] hover:after:text-red hover:after:pl-3 hover:cursor-pointer"
              htmlFor='Password'
            >
              Password
            </label>
            <input
              className='login-input'
              id='password'
              placeholder='Enter your email'
              required
              type='password'
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <button className='bg-main h-[2.75rem] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[.25rem] mr-3 ml-3'>
            Sign In
          </button>
          <div className='flex justify-center items-center gap-2 mt-2 flex-wrap'>
            <span className='text-label font-montserrat font-[400] text-labelColor'>
              Forgot your password
            </span>
            <span className='text-main text-[.875rem] font-montserrat font[500] underline ml-1'>
              Reset your password
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
