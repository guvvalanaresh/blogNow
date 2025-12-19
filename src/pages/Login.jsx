import React from 'react'
import '../App.css';

const Login = () => {
  return (
      <section className='bg-yellow-300 h-screen'>
        {/* Left Side */}
        <div className='bg-gray-300 w-1/2 h-full float-left items-center flex justify-center'>
          <div className='flex items-center'>
            <img src="/blog-logo.png" alt="Blog Logo" className='w-10 h-10' />
            <h1>blogNow</h1>
          </div>
          <div>
            <p>Hello everyone</p>
          </div>
        </div>
        {/* Right Side */}
        <div className='bg-white w-1/2 h-full float-right'>

        </div>
      </section>
  )
}

export default Login
