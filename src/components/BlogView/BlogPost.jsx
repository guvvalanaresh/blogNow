import React from "react";
import "../../App.css";
import { blogContent } from "../../data/blogContent";

export const BlogPost = ({ blog }) => {

  // Here i extracted sections from the blogContent using the ids.
  
  const sections = blog.sections?.length
  ? blog.sections
  : blogContent[blog.id] || [];

  console.log(blog.sections);
  console.log(blogContent[blog.id]);


  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
          {blog.title}
        </h1>

        <p className="text-lg text-slate-500 italic mb-6 font-light">
          {blog.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium">
          <span>Published on {blog.tags.date}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span>{blog.tags.readingTime}</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg bg-slate-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Body */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            {/* Section Heading */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4 archivo-black-regular">
              {section.heading}
            </h2>

            {/* Paragraph Section */}
            {section.type === "paragraph" && (
              <p className="mb-4 inter">{section.content}</p>
            )}

            {/* List Section */}
            {section.type === "list" && (
              <>
                {section.content && (
                  <p className="mb-4 inter">{section.content}</p>
                )}

                <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 mt-4">
                  {section.points.map((point, i) => (
                    <li key={i}>
                      <strong className="text-slate-900">
                        {point.title}:
                      </strong>{" "}
                      {point.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Article Footer Divider */}
      <div className="w-full h-px bg-gray-300 mt-12 mb-8"></div>
    </article>
  );
};
