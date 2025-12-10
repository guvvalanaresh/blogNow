import React from 'react';
import { Icons } from './Icons.jsx';
import '../../App.css'

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div>
            <a href="#"><img src="/blog-logo.png" alt="Blog Logo" className='w-10 h-10' /></a>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900 roboto-mono">blogNow</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 h-full flex items-center inter font-semibold!">
            Dashboard
          </a>
          <a href="#" className="text-sm text-blue-600 h-full flex items-center border-b-2 border-blue-600 inter font-semibold!">
            Posts
          </a>

          {/* User Profile */}
           <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden ring-2 ring-transparent hover:ring-gray-200 transition-all">
                <img src="/blog-logo.png" alt="User" className="w-full h-full object-cover opacity-80" />
                </button>
            </div>
        </nav>
      </div>
    </header>
  );
};