import React from 'react'
import Navbar from '../components/BlogCreations/Navbar'
import '../App.css'
import CustomEditor from '../components/BlogCreations/Editor'

const CreateBlogPage = () => {
  return (
    <div className='bg-[#F0F0F0]'>
      <Navbar />
      <section>
          <div className='w-[70%] max-w-6xl mx-auto flex flex-col gap-4 mt-8 pb-10'>
           <h1 className='text-2xl anton-regular font-extrabold!'>Create New Post</h1>
           <div className='flex flex-col gap-5'>
              <div>
                <label htmlFor="" className='inter text-sm'>Blog Title</label><br />
                <input type="text" placeholder='Enter your post title' className='w-full inter border border-gray-300 rounded-sm py-2 pl-2 outline-none mt-1 placeholder:text-sm' />
              </div>
              <div>
                <label htmlFor="" className='inter text-sm'>Short Description</label><br />
                <textarea type="text" placeholder='Write a brief summary for your post' className='w-full inter rounded-sm border border-gray-300 p-2.5 pb-16 text-sm resize-none leading-relaxed outline-none mt-1 placeholder:text-sm'></textarea>
              </div>
              <div>
                <label htmlFor="" className='inter text-sm'>Cover Image</label><br />
                <div className='flex flex-col justify-center items-center p-6 mt-1 border-2 border-dashed rounded-sm border-gray-300'>
                    <h2 className='font-bold mb-1 oswald'>Upload Cover Image</h2>
                    <p className='text-sm text-gray-500 inter'>Drag and drop a cover image or click to Upload (Optional)</p>
                    <div className='mt-5'>
                      <button className='border-gray-300 bg-gray-300 font-bold inter rounded-sm px-2 py-1 cursor-pointer'>Upload</button>
                    </div>
                </div>
              </div>
              <div>
                <label htmlFor="" className='inter text-sm'>Category</label><br />
                <select name="" id="" className='w-full inter border border-gray-300 rounded-sm py-2 pl-2 outline-none mt-1'>
                  <option value="">Technology</option>
                  <option value="">Design</option>
                  <option value="">Productivity</option>
                  <option value="">Marketing</option>
                  <option value="">Business</option>
                </select>
              </div>
              <div>
                <label htmlFor="" className='inter text-sm'>Content</label><br />
                <CustomEditor />
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}

export default CreateBlogPage
