import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import '../App.css'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import { blogData } from '../data/blogData'

const Home = () => {

  return (
    <div className='bg-[#F0F0F0]'>
      <Navbar />
      <div className='grid grid-cols-[250px_1fr] gap-4 ml-8 mt-6'>
        <div>
          <CategoryCard />
        </div>
        {/* The main Page content goes here */}
        <div>
          <div className='flex flex-col mb-2'>
            <h1 className='text-3xl font-bold archivo-black-regular tracking-tight'>From the Blog</h1>
            <p className='nunito mt-1 text-gray-500'>The latest news,tips and insights from our team</p>
          </div>
          <div className='flex flex-col gap-4 mr-4 mt-8 mb-10'>
            {/* Blog card component */}
            {blogData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
