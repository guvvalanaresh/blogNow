import React from 'react'
import '../App.css'
import { blogData } from '../data/blogData'


const BlogCard = () => {
  return (
    <>
      {blogData.map((blog, index) => (
        <section className='grid grid-cols-[2fr_1fr] gap-4 p-3 rounded-lg bg-white shadow-xs border-gray-300'>
        {/* Content */}
        <div className='flex flex-col p-2'>
          {/* Date details */}
            <ul className='flex text-xs gap-1 mb-3 text-gray-500 nunito'>
              <li>{blog.category}</li>&bull;
              <li>{blog.status.readingTime}</li>&bull;
              <li>{blog.status.date}</li>
            </ul>
          {/* Title & Description */}
          <div className='flex flex-col justify-between mb-3'>
            <h1 className='mb-2 text-xl font-bold archivo-black-regular line-clamp-1'>{blog.title}</h1>
            <p className='line-clamp-2 nunito text-gray-500'>{blog.description}</p>
          </div>
          {/* Button */}
          <div>
            <button className='px-4 py-2 rounded-sm text-sm font-semibold bg-gray-100 cursor-pointer hover:bg-gray-200'>Read More</button>
          </div>
        </div>
        {/* Image */}
        <div className='h-full'>
          <img src={blog.image} alt="Blog Image" className='w-full h-full object-cover rounded-md' />
        </div>
      </section>
      ))}
    </>
  )
}

export default BlogCard
