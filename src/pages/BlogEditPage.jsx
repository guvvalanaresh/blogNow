import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../components/BlogEditPage/Header.jsx';
import { Icons } from '../components/BlogEditPage/Icons.jsx';

// Local no-op stubs for description generation/refinement until
// an AI service is integrated.
const generateDescription = async (content) => {
  if (!content) return '';
  const trimmed = content.replace(/\s+/g, ' ').trim();
  return (trimmed.length > 160) ? trimmed.slice(0, 157).trim() + '...' : trimmed;
};

const refineContent = async (content) => content || '';

// Initial dummy data matching the image
const INITIAL_POST = {
  id: '1',
  title: 'Mastering Modern UI/UX Design Principles',
  description: 'A deep dive into the core concepts that define successful user interfaces and experiences in today\'s digital landscape. Learn how to create intuitive and beautiful designs.',
  category: 'Design',
  content: `The journey into modern UI/UX design begins with a fundamental understanding of user-centric principles. It's not just about making things look pretty; it's about creating seamless, intuitive, and enjoyable experiences for the user. One of the cornerstones of modern design is **clarity**. Users should be able to understand the interface and its purpose without any confusion.

Another key principle is **consistency**. A consistent design language across your application—from button styles to typography—helps users feel more comfortable and learn the interface faster. This builds trust and reduces cognitive load.

Finally, we cannot overlook the importance of **feedback**. Every user action should have an immediate and clear reaction from the interface. Whether it's a simple button press or a complex form submission, visual or haptic feedback confirms that the system has received the input and is processing it. This dialogue between the user and the system is what transforms a static page into a dynamic experience.`,
  lastSaved: new Date()
};

const CATEGORIES = ['Design', 'Development', 'Productivity', 'Business', 'Marketing'];

export default function BlogEditPage() {
  const [post, setPost] = useState(INITIAL_POST);
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingDesc, setIsGeneratingDesc] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const contentEditableRef = useRef(null);

  // Auto-resize textarea logic to mimic a rich text editor div
  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.style.height = 'auto';
      contentEditableRef.current.style.height = contentEditableRef.current.scrollHeight + 'px';
    }
  }, [post.content]);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setPost(prev => ({ ...prev, lastSaved: new Date() }));
    }, 800);
  };

  const handleGenerateDescription = async () => {
    if (!post.content) return;
    setIsGeneratingDesc(true);
    try {
      const desc = await generateDescription(post.content);
      setPost(prev => ({ ...prev, description: desc }));
    } catch {
      alert("Failed to generate description. Please check your API key.");
    } finally {
      setIsGeneratingDesc(false);
    }
  };

  const handleRefineContent = async () => {
     if (!post.content) return;
     setIsRefining(true);
     try {
       const refined = await refineContent(post.content);
       setPost(prev => ({ ...prev, content: refined }));
    } catch {
       alert("Failed to refine content.");
     } finally {
       setIsRefining(false);
     }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Edit Post</h1>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-70 flex items-center gap-2"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Post Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Post Details</h2>
              
              <div className="space-y-6">
                {/* Title Input */}
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="Enter post title"
                  />
                </div>

                {/* Description Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <button 
                      onClick={handleGenerateDescription}
                      disabled={isGeneratingDesc}
                      className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium disabled:opacity-50"
                      title="Auto-generate with AI"
                    >
                      <Icons.Sparkles size={12} />
                      {isGeneratingDesc ? 'Generating...' : 'Auto-Generate'}
                    </button>
                  </div>
                  <textarea
                    id="description"
                    rows={6}
                    value={post.description}
                    onChange={(e) => setPost({...post, description: e.target.value})}
                    className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder-gray-400"
                    placeholder="Enter a short description..."
                  />
                </div>

                {/* Category Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={post.category}
                      onChange={(e) => setPost({...post, category: e.target.value})}
                      className="w-full appearance-none px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                      <Icons.ChevronDown size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-4">
              <Icons.CheckCircle2 size={16} className={isSaving ? "text-gray-300" : "text-green-500"} />
              <span>{isSaving ? 'Saving changes...' : 'All changes saved'}</span>
            </div>
          </div>

          {/* Right Column: Editor (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col min-h-[600px]">
              
              {/* Toolbar */}
              <div className="border-b border-gray-200 px-4 py-2 flex items-center gap-1 flex-wrap sticky top-0 bg-white rounded-t-xl z-10">
                
                {/* Style Dropdown */}
                <div className="relative mr-2">
                  <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <span>Normal</span>
                    <Icons.ChevronDown size={14} className="text-gray-400" />
                  </button>
                </div>

                <div className="w-px h-5 bg-gray-200 mx-1"></div>

                {/* Formatting Group 1 */}
                <ToolbarBtn icon={<Icons.Bold size={18} />} />
                <ToolbarBtn icon={<Icons.Italic size={18} />} />
                <ToolbarBtn icon={<Icons.Underline size={18} />} />
                <ToolbarBtn icon={<Icons.Strikethrough size={18} />} />
                
                <div className="w-px h-5 bg-gray-200 mx-1"></div>

                {/* Lists */}
                <ToolbarBtn icon={<Icons.ListOrdered size={18} />} />
                <ToolbarBtn icon={<Icons.List size={18} />} />
                
                <div className="w-px h-5 bg-gray-200 mx-1"></div>

                {/* Insert */}
                <ToolbarBtn icon={<Icons.Link size={18} />} />
                <ToolbarBtn icon={<Icons.Image size={18} />} />
                <ToolbarBtn icon={<Icons.Code size={18} />} />
                
                <div className="grow"></div>

                {/* Utility */}
                <button 
                  onClick={handleRefineContent}
                  disabled={isRefining}
                  className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors mr-2 disabled:opacity-50"
                  title="Refine content with Gemini"
                >
                  <Icons.Sparkles size={14} />
                  {isRefining ? 'Refining...' : 'Refine'}
                </button>
                <ToolbarBtn icon={<Icons.RemoveFormatting size={18} />} />
              </div>

              {/* Editor Content Area */}
              <div className="grow p-8 bg-white rounded-b-xl cursor-text" onClick={() => contentEditableRef.current?.focus()}>
                <textarea
                  ref={contentEditableRef}
                  value={post.content}
                  onChange={(e) => setPost({...post, content: e.target.value})}
                  className="w-full h-full bg-transparent border-none focus:ring-0 text-gray-800 text-base leading-relaxed resize-none p-0 outline-none"
                  spellCheck={false}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component for toolbar buttons
const ToolbarBtn = ({ icon, active = false }) => (
  <button 
    className={`p-1.5 rounded-md transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-100 ${active ? 'bg-gray-100 text-gray-900' : ''}`}
  >
    {icon}
  </button>
);

// TODO: Do this edit page after completing the other functionalities and a buttin like edit and edit the details it should reflect on this particular blog. I think we can do this with id's.