import React, { useContext, useState } from "react";
import Navbar from "../components/BlogCreations/Navbar";
import "../App.css";
import CustomEditor from "../components/BlogCreations/Editor";
import { BlogContext } from "../context/BlogContext";

const CreateBlogPage = () => {
  const { addBlog } = useContext(BlogContext);

  // ✅ ALWAYS initialize controlled inputs properly
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Technology");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handlePublish = () => {
    if (!title || !description || !content) {
      alert("Please fill all required fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      category,
      image: coverImage || "src/assets/images/blog-image.jpg",
      tags: {
        category,
        date: new Date().toDateString(),
        readingTime: "5 min read",
      },
      sections: [
        {
          heading: title,
          type: "paragraph",
          content,
        },
      ],
    };

    addBlog(newBlog);
    alert("Blog published successfully!");
  };

  return (
    <div className="bg-[#F0F0F0] min-h-screen">
      <Navbar />

      <section>
        <div className="w-[70%] max-w-6xl mx-auto flex flex-col gap-4 mt-8 pb-10">
          <h1 className="text-2xl anton-regular font-extrabold">
            Create New Post
          </h1>

          <div className="flex flex-col gap-5">
            {/* Blog Title */}
            <div>
              <label className="inter text-sm">Blog Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your post title"
                className="w-full inter border border-gray-300 rounded-sm py-2 pl-2 outline-none mt-1 placeholder:text-sm"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="inter text-sm">Short Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a brief summary for your post"
                className="w-full inter rounded-sm border border-gray-300 p-2.5 pb-16 text-sm resize-none leading-relaxed outline-none mt-1 placeholder:text-sm"
              />
            </div>

            {/* Cover Image (UI only for now) */}
            <div>
              <label className="inter text-sm">Cover Image</label>
              <div className="flex flex-col justify-center items-center p-6 mt-1 border-2 border-dashed rounded-sm border-gray-300">
                <h2 className="font-bold mb-1 oswald">
                  Upload Cover Image
                </h2>
                <p className="text-sm text-gray-500 inter">
                  Drag and drop a cover image or click to upload (Optional)
                </p>
                <button className="mt-4 bg-gray-300 px-3 py-1 rounded-sm font-semibold">
                  Upload
                </button>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="inter text-sm">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full inter border border-gray-300 rounded-sm py-2 pl-2 outline-none mt-1"
              >
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Productivity">Productivity</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Content */}
            <div>
              <label className="inter text-sm">Content</label>
              <CustomEditor value={content} onChange={setContent} />
            </div>

            {/* Publish Button */}
            <div className="flex justify-end">
              <button
                onClick={handlePublish}
                className="px-3 py-1.5 text-sm rounded-md bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold"
              >
                Publish Post
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateBlogPage;
