import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'

export default function About() {
  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 flex items-center gap-4 mb-8">
          <img src="/blog-logo.png" alt="blogNow" className="w-14 h-14 rounded-md shadow-sm" />
          <div>
            <h1 className="text-2xl font-extrabold">blogNow</h1>
            <p className="text-sm text-gray-600">A minimal blogging platform crafted for thoughtful creators.</p>
          </div>
        </div>

        <section className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-3">About Us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            blogNow is a minimal blogging platform built to showcase clean design and fast performance. We care about high-quality writing, clear design, and an approachable developer experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600">Empower creators to share knowledge with elegant and useful tools.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-gray-600">We value clarity, typography, and simple interactions that make content shine.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-sm text-gray-600">We want to build a friendly community of authors and readers.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
