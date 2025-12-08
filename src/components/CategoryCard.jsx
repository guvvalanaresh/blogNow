import React from 'react'
import '../App.css'

const CategoryCard = () => {

  const categoryClassName = 'px-3 py-2 rounded-sm nunito hover:bg-[#B4C6FC] hover:text-blue-700';

  return (
    <section className='w-60 px-3 py-1 rounded-sm shadow-2xs border-gray-300 bg-white'>
      <div className='flex flex-col mt-3'>
        <h1 className='text-sm font-bold'>Categories</h1>
        <p className='text-sm text-gray-500 ninito'>Filter by topic</p>
      </div>
      <div className='mt-5 mb-2'>
        <ul className='flex flex-col text-sm'>
          <a href="" className={`${categoryClassName}`}><li>All Posts</li></a>
          <a href="" className={`${categoryClassName}`}><li>Technology</li></a>
          <a href="" className={`${categoryClassName}`}><li>Design</li></a>
          <a href="" className={`${categoryClassName}`}><li>Productivity</li></a>
          <a href="" className={`${categoryClassName}`}><li>Marketing</li></a>
          <a href="" className={`${categoryClassName}`}><li>Business</li></a>
        </ul>
      </div>
    </section>
  )
}

export default CategoryCard
