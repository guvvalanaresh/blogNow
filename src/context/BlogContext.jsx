import React from "react"
import { createContext, useEffect, useState } from "react"
import { initialBlogData } from "../data/initialBlogData"

export const BlogContext = createContext();

export const BlogProvider = ( { children} ) => {
    const [blogs, setBlogs ] = useState(() => {
        const storedBlogs = localStorage.getItem("blogs");
        return storedBlogs ? JSON.parse(storedBlogs) : initialBlogData;
    });

    useEffect(() => {
        localStorage.setItem("blogs", JSON.stringify(blogs));
    }, [blogs]);

    const addBlog = (blog) => {
        setBlogs((prev) => [...prev, blog])
    }

    const getBlogById = (id) => {
        return blogs.find((blog) => blog.id === Number(id));
    }

    return (
        <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
            {children}
        </BlogContext.Provider>
    );
}