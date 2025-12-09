import React from 'react'
import Navbar from '../components/BlogCreations/Navbar'
import '../App.css'

const CreateBlogPage = () => {
  return (
    <div className='bg-[#F0F0F0] h-screen'>
      <Navbar />
      <section>
        <div className='w-[70%] max-w-6xl mx-auto flex flex-col gap-4 mt-8'>
           <h1 className='text-2xl anton-regular font-extrabold!'>Create New Post</h1>
        </div>
      </section>
    </div>
  )
}

export default CreateBlogPage
