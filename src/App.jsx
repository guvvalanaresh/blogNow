import React from "react"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import CreateBlogPage from "./pages/CreateBlogPage"
import BlogViewPage from "./pages/BlogViewPage"
import BlogEditPage from "./pages/BlogEditPage"
import About from './pages/About'
import Contact from './pages/Contact'
import { SearchProvider } from './context/SearchContext'

function App() {

  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/:id" element={<BlogViewPage />} />
        <Route path="/edit-blog" element={<BlogEditPage />} />
      </Routes>
    </SearchProvider>
  )
}

export default App
