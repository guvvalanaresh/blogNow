import React from 'react';
import { Header } from '../components/BlogView/Header';
import { BlogPost } from '../components/BlogView/BlogPost';

export default function BlogViewPage() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-[#F0F0F0]">
      <Header />
      <main className="flex-grow w-full">
        <BlogPost />
      </main>
    </div>
  );
}