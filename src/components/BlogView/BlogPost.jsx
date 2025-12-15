import React from 'react';
// import { Tag } from './Tag';
import '../../App.css'

export const BlogPost = ( { blog }) => {
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
          {/* <Tag label="UI/UX Design" /> */}
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg bg-slate-100">
        <img 
          src={`${blog.image}`} 
          alt="Abstract geometric shapes representing minimalism" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Body */}
      <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
        
        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 archivo-black-regular">Introduction to Minimalism</h2>
          <p className="mb-4 inter">
            Minimalism in design is not just about removing elements; it's about making intentional choices. 
            The core principle is to strip away the superfluous and focus on what is essential. This approach 
            leads to designs that are not only aesthetically pleasing but also highly functional and user-friendly. 
            By reducing visual clutter, we allow users to focus on the content and tasks that matter most, 
            leading to a more intuitive and efficient experience.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 archivo-black-regular">The Role of Whitespace</h2>
          <p className="mb-4 inter">
            Whitespace, or negative space, is one of the most powerful tools in a minimalist designer's arsenal. 
            It's the empty space around and between elements of a design. Far from being "wasted" space, 
            it plays a critical role in creating a sense of balance, harmony, and elegance. Proper use of 
            whitespace can improve readability, guide the user's eye, and create a calm, uncluttered interface 
            that feels premium and thoughtful.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-slate-400 mt-4">
            <li>
              <strong className="text-slate-900">Clarity and Focus:</strong> By giving elements room to breathe, whitespace helps to highlight the most important parts of your design.
            </li>
            <li>
              <strong className="text-slate-900">Improved Readability:</strong> Generous spacing between lines and paragraphs of text makes it easier for users to read and absorb information.
            </li>
            <li>
              <strong className="text-slate-900">Visual Hierarchy:</strong> Whitespace can be used to group related items and separate unrelated ones, creating a clear visual structure without the need for boxes or lines.
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 archivo-black-regular">Typography as a Cornerstone</h2>
          <p className="mb-4 inter">
            When visual elements are sparse, typography takes center stage. In minimalist design, the choice 
            of typeface, font size, weight, and spacing becomes critically important. A well-chosen typography 
            system can convey personality, establish hierarchy, and ensure legibility. The goal is to create 
            text that is not just readable but also beautiful in its own right, becoming a key design element 
            rather than just a carrier of information.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 archivo-black-regular">Conclusion</h2>
          <p className="mb-4 inter">
            Embracing minimalist design is about achieving more by using less. It requires discipline and a 
            deep understanding of user needs. By focusing on essential content, leveraging whitespace, and 
            mastering typography, designers can create experiences that are clear, efficient, and deeply 
            satisfying for the user. It is a philosophy that proves that simplicity is the ultimate sophistication.
          </p>
        </div>
      </div>
      
      {/* Article Footer Divider */}
      <div className="w-full h-px bg-gray-300 mt-12 mb-8"></div>
      
    </article>
  );
};