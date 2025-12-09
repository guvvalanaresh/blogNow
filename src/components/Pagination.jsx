import React from 'react'
import '../App.css'

const Pagination = () => {
  return (
    <div>
        <div className="flex justify-center mt-8">
        <nav className="flex gap-3 nunito text-sm">
            <a href="#" className="px-3 py-1.5 hover:bg-gray-100">&lt;</a>
            <a href="#" className="px-3 py-1.5 text-black hover:bg-gray-300">1</a>
            <a href="#" className="px-3 py-1.5 text-black hover:bg-gray-300">2</a>
            <a href="#" className="px-3 py-1.5 text-black hover:bg-gray-300">3</a>
            <a href="#" className="px-3 py-1.5 hover:bg-gray-100">&gt;</a>
        </nav>
        </div>
    </div>
  )
}

export default Pagination
