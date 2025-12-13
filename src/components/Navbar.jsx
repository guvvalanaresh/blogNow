import React, { useState, useEffect } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useSearch } from '../context/SearchContext'
import '../App.css';

const Navbar = () => {
  const { setSearchTerm } = useSearch();
  const [query, setQuery] = useState('');

  // Debounce updates to reduce re-renders
  useEffect(() => {
    const id = setTimeout(() => {
      setSearchTerm(query.trim());
    }, 250);
    return () => clearTimeout(id);
  }, [query, setSearchTerm]);

  const clearSearch = () => {
    setQuery('');
    setSearchTerm('');
  }

  return (
      <nav className='sticky top-0 z-50 flex justify-between items-center bg-[#F0F0F0] p-2 border-b border-gray-300 inter'>
        <div className='flex items-center gap-5 ml-3'>
            <a href="#"><img src="/blog-logo.png" alt="Blog Logo" className='w-10 h-10' /></a>
            <ul className='flex gap-5 text-sm'>
              <a href="#" className='hover:bg-gray-300 px-2 py-1 rounded-sm'><li>Home</li></a>
              <a href="#" className='hover:bg-gray-300 px-2 py-1 rounded-sm'><li>About</li></a>
              <a href="#" className='hover:bg-gray-300 px-2 py-1 rounded-sm'><li>Contact</li></a>
            </ul>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-3 mr-3">
          <div className="relative">
            <IoIosSearch
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-7 py-1.5 text-sm rounded-sm w-60 bg-[#E8E8E8] outline-none"
              placeholder="Search articles..."
            />
            {query && (
              <button onClick={clearSearch} title="Clear" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 px-1">✕</button>
            )}
          </div>

          <button className="px-3 py-1.5 text-sm rounded-md bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold cursor-pointer">
            Create New Post
          </button>
        </div>
      </nav>
  )
}

export default Navbar
