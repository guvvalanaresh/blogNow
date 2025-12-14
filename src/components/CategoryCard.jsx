import React from 'react'
import '../App.css'

const CategoryCard = ({ categories = [], selectedCategory = '', setCategory = () => {} }) => {
  const categoryClassName = 'px-3 py-2 rounded-sm nunito hover:bg-[#B4C6FC] hover:text-blue-700';

  const handleClick = (cat) => (e) => {
    e.preventDefault();
    // Use empty string to represent "all posts"
    setCategory(cat === 'All Posts' ? '' : cat);
  }

  return (
    <section className='w-60 px-3 py-1 rounded-sm shadow-2xs border-gray-300 bg-white'>
      <div className='flex flex-col mt-3'>
        <h1 className='text-sm font-bold'>Categories</h1>
        <p className='text-sm text-gray-500 ninito'>Filter by topic</p>
      </div>
      <div className='mt-5 mb-2'>
        <ul className='flex flex-col text-sm'>
          <li>
            <button
              onClick={handleClick('All Posts')}
              className={`${categoryClassName} w-full text-left cursor-pointer ${selectedCategory === '' ? 'bg-[#B4C6FC] text-blue-700' : ''}`}
            >
              All Posts
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat} className='mt-1'>
              <button
                onClick={handleClick(cat)}
                className={`${categoryClassName} w-full text-left cursor-pointer ${selectedCategory === cat ? 'bg-[#B4C6FC] text-blue-700' : ''}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoryCard
