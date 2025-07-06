import React from 'react'

const LoginSignup = () => {
  return (
    <div className='bg-gradient-to-b from-pink-100 to-purple-200 h-dvh flex justify-center items-center'>
      <div className='bg-white p-7 mb-10 m-5'>
        <h2 className='font-semibold text-2xl mb-4'>Sign Up</h2>
        <div className='flex flex-col'>
          <input className='border border-gray-300 outline-none px-4 py-2 rounded my-2' type="text" placeholder='Your Name' autoComplete='off' />
          <input className='border border-gray-300 outline-none px-4 py-2 rounded my-2' type="email" placeholder='Email Address' autoComplete='off' />
          <input className='border border-gray-300 outline-none px-4 py-2 rounded my-2' type="password" placeholder='Password'/>
        </div>   
        <button className='bg-red-500 w-full py-3 text-white my-4 cursor-pointer'>Continue</button>
        <p>Already have an Account? <span className='font-semibold text-red-500'>Login here</span></p>
        <div className='flex mt-5 gap-2'>
          <input type="radio" />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>   
      </div>
    </div>
  )
}

export default LoginSignup
