import React, { useContext } from 'react';
import { Header } from '../components/BlogView/Header';
import { BlogPost } from '../components/BlogView/BlogPost';
import { useNavigate, useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { BlogContext } from '../context/BlogContext';

export default function BlogViewPage() {

  const { id } = useParams();
  console.log("Viewing blog with ID:", id);
  const { getBlogById, deleteBlog } = useContext(BlogContext);

  // const blog = blogData.find((item) => item.id === Number(id));
  const blog = getBlogById(id);
  console.log("Blog data:", blog); 

  const navigate = useNavigate();

  const handleDelete = () => {
    const conformDelete = window.confirm("Are you sure you want to delete this blog post?");

    if (!conformDelete) return;

    deleteBlog(id);
    navigate('/');
  }

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-[#F0F0F0]">
      <Header />

      <main className="grow w-full">
        <BlogPost blog={blog} />
      </main>

      {/* Delete Button */}
      <div className="px-4 sm:px-6 mt-6 flex justify-end w-full mb-10">
        <button
          onClick={handleDelete}
          className="px-3 py-1.5 text-sm rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold mr-20"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}