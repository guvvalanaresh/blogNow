import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import '../App.css'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import { blogData } from '../data/blogData'
import { useSearch } from '../context/SearchContext'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const { searchTerm } = useSearch();
  const [category, setCategory] = useState("");

  const categories = [...new Set(blogData.map((blog) => blog.category))]
  console.log(categories);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const q = params.get('q') ? params.get('q').toLowerCase() : '';

  let filteredBlogs = category === "all" ? blogData : (category ? blogData.filter((blog)=> blog.category === category) : blogData);

  if (searchTerm) {
    filteredBlogs = filteredBlogs.filter((b)=> {
      const hay = `${b.title} ${b.category} ${b.description || ''} ${b.tags?.category ?? ''}`.toLowerCase();
      return hay.includes(searchTerm.toLowerCase());
    })
  }

  if (q) {
    filteredBlogs = filteredBlogs.filter((blog) => {
    const hay = `${blog.title} ${blog.category} ${blog.description || ''}`.toLowerCase()
    return hay.includes(q)
    })
  }

  console.log(q);

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
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">No matching posts found.</div>
            )}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
