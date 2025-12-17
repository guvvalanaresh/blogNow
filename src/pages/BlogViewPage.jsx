import React, { useContext } from 'react';
import { Header } from '../components/BlogView/Header';
import { BlogPost } from '../components/BlogView/BlogPost';
import { useParams } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { BlogContext } from '../context/BlogContext';

export default function BlogViewPage() {

  const { id } = useParams();
  console.log("Viewing blog with ID:", id);
  const { getBlogById } = useContext(BlogContext);

  // const blog = blogData.find((item) => item.id === Number(id));
  const blog = getBlogById(id);
  console.log("Blog data:", blog); 

  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-[#F0F0F0]">
      <Header />
      <main className="grow w-full">
        <BlogPost blog={blog} />
      </main>
    </div>
  );
}