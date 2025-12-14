import React from 'react';
import { ArrowLeft, PenTool } from 'lucide-react';
import '../../App.css'
import { useNavigate, Link } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-around">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div>
            <Link to={'/'}><img src="/blog-logo.png" alt="Blog Logo" className='w-10 h-10' /></Link>
          </div>
          <span className="font-bold! text-lg tracking-tight text-slate-900 roboto-mono">blogNow</span>
        </div>

        {/* Action Button */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md active:scale-95 transform duration-150 cursor-pointer" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4" />
          <span className='text-sm inter'>Back to Home</span>
        </button>
      </div>
      {/* 70% width bottom border */}
      <div className="w-[70%] mx-auto border-b border-gray-300"></div>
    </header>
  );
};