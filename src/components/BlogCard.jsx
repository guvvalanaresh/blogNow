import React from 'react'
import '../App.css'

const BlogCard = () => {
  return (
    <section className='grid grid-cols-[2fr_1fr] gap-4 p-3 rounded-lg bg-white shadow-xs border-gray-300'>
      {/* Content */}
      <div className='flex flex-col p-2'>
        {/* Date details */}
          <ul className='flex text-xs gap-1 mb-3 text-gray-500 nunito'>
            <li>Design</li>&bull;
            <li>8 min read</li>&bull;
            <li>Oct 26, 2023</li>
          </ul>
        {/* Title & Description */}
        <div className='flex flex-col justify-between mb-3'>
          <h1 className='mb-2 text-xl font-bold archivo-black-regular'>The Future of UI Design: Trends to Watch in 2024</h1>
          <p className='line-clamp-2 nunito text-gray-500'>A deep dive into the most anticipated user interface trends of the upcoming year, from AI integration to neo-brutalism.</p>
        </div>
        {/* Button */}
        <div>
          <button className='px-4 py-2 rounded-sm text-sm font-semibold bg-gray-100 cursor-pointer hover:bg-gray-200'>Read More</button>
        </div>
      </div>
      {/* Image */}
      <div className='h-full'>
        <img src="src/assets/images/blog-image.jpg" alt="Blog Image" className='w-full h-full object-cover rounded-md' />
      </div>
    </section>
  )
}

export default BlogCard
