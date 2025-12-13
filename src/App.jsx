import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// viteLogo import removed — unused
import './App.css'
import Home from './pages/Home'
import CreateBlogPage from "./pages/CreateBlogPage"
import BlogViewPage from "./pages/BlogViewPage"
import BlogEditPage from "./pages/BlogEditPage"
import { SearchProvider } from './context/SearchContext'

function App() {

  return (
    <SearchProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="/view-blog" element={<BlogViewPage />} />
        <Route path="/edit-blog" element={<BlogEditPage />} />
      </Routes>
    </BrowserRouter>
    </SearchProvider>
  )
}

export default App
