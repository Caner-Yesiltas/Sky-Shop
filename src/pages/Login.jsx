import React from 'react';

const Login = () => {
  return (
    <div className='loginDiv'>
      <div className='h-[31.25rem] w-11/12  sm:w-[29.6875rem] bg-white rounded-[1.25rem] o-5 flex flex-col justify-center text-center '>
      
      <div className='flex justify-center items-center mt-2 gap-2'  >
        <span className='w-[6px] h-[30px] bg-yellow-500' ></span>
        <h1 className='text-[1.375rem] sm:text-[32px] font-montserrat font-[700] uppercase' >SKY SHOP</h1>
      </div>
      
      <div className='my-2'>
        <h3 className='font-montserrat font-[600]'  >SIGN IN</h3>
        <p className='font-montserrat text-labelColor text-label mt-1'   >Enter your credentials to acces your account</p>
      </div>
      
      </div>
    </div>
  );
};

export default Login; 
