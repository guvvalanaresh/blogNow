import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <header className='w-full flex justify-center'>
        <nav className='flex justify-between w-[70%] max-w-6xl items-center p-2 border-b border-gray-300 inter'>
                <div className='flex items-center gap-1 ml-3'>
                <a href="#"><img src="/blog-logo.png" alt="Blog Logo" className='w-10 h-10' /></a>
                <span className='roboto-mono font-bold!'>blogNow</span> 
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-3 mr-3">
                <ul className='flex gap-5 text-sm'>
                    <Link to={'/'} className='hover:bg-gray-300 px-2 py-1 rounded-sm'><li>Dashboard</li></Link>
                    <Link to={'/'} className='hover:bg-gray-300 px-2 py-1 rounded-sm'><li>View Posts</li></Link>
                </ul>
                <button className="px-3 py-1.5 text-sm rounded-md bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold cursor-pointer">
                    New Post
                </button>
            </div>
        </nav>
      </header>
  )
}

export default Navbar