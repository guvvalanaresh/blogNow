import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import '../App.css'
import BlogCard from '../components/BlogCard'
import Pagination from '../components/Pagination'
import { blogData } from '../data/blogData'
import { useSearch } from '../context/SearchContext'

const Home = () => {
  const { searchTerm } = useSearch();
  const [category, setCategory] = useState("");

  // To know the available categories
  const categories = [...new Set(blogData.map((blog) => blog.category))]

  let filteredBlogs = category ? blogData.filter((blog)=> blog.category === category) : blogData;

  // Apply search filtering (ensure this runs before pagination calculations).We should check it first then only it will work properly.After that we can do pagination.
  if (searchTerm) {
    filteredBlogs = filteredBlogs.filter((b)=> {
      const hay = `${b.title} ${b.category} ${b.description || ''} ${b.tags?.category ?? ''}`.toLowerCase();
      return hay.includes(searchTerm.toLowerCase());
    })
  }

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 4;
  const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category]);

  const displayedBlogs = filteredBlogs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  
  // console.log("Search Term:", searchTerm);
  // console.log(filteredBlogs);

  return (
    <div className='bg-[#F0F0F0]'>
      <Navbar />
      <div className='grid grid-cols-[250px_1fr] gap-4 ml-8 mt-6'>
        <div>
          <CategoryCard categories={categories} selectedCategory={category} setCategory={setCategory} />
        </div>
        {/* The main Page content goes here */}
        <div>
          <div className='flex flex-col mb-2'>
            <h1 className='text-3xl font-bold archivo-black-regular tracking-tight'>From the Blog</h1>
            <p className='nunito mt-1 text-gray-500'>The latest news,tips and insights from our team</p>
          </div>
          <div className='flex flex-col gap-4 mr-4 mt-8 mb-10'>
            {/* Blog card component */}
            {displayedBlogs.length > 0 ? (
              displayedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">No matching posts found.</div>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
