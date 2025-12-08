import React from 'react'
import Navbar from '../components/Navbar'
import CategoryCard from '../components/CategoryCard'
import '../App.css'

const Home = () => {
  return (
    <div className='bg-[#F0F0F0] h-screen'>
      <Navbar />
      <div className='grid grid-cols-[250px_1fr] gap-4 ml-8 mt-6'>
        <div>
          <CategoryCard />
        </div>
        <div className='flex flex-col mb-2'>
          <h1 className='text-3xl font-bold archivo-black-regular tracking-tight'>From the Blog</h1>
          <p className='nunito mt-2 text-gray-500'>The latest news,tips and insights from our team</p>
        </div>
        <div>
          {/* Blog card component */}
        </div>
      </div>
    </div>
  )
}

export default Home
