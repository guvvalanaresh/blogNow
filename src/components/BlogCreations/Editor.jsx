import { useRef, useState, useEffect } from "react";

export default function CustomEditor() {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const [active, setActive] = useState({
    bold: false,
    italic: false,
    underline: false,
    h1: false,
    h2: false,
    h3: false,
    ul: false,
    ol: false,
    pre: false,
    quote: false
  });

  const updateContent = () => {
    setContent(editorRef.current.innerHTML);
  };

  // Check active format (IMPORTANT)
  const updateActive = () => {
    setActive({
      bold: document.queryCommandState("bold"),
      italic: document.queryCommandState("italic"),
      underline: document.queryCommandState("underline"),
      h1: document.queryCommandValue("formatBlock") === "h1",
      h2: document.queryCommandValue("formatBlock") === "h2",
      h3: document.queryCommandValue("formatBlock") === "h3",
      ul: document.queryCommandState("insertUnorderedList"),
      ol: document.queryCommandState("insertOrderedList"),
      pre: document.queryCommandValue("formatBlock") === "pre",
      quote: document.queryCommandValue("formatBlock") === "blockquote"
    });
  };

  const format = (cmd, value = null) => {
    editorRef.current.focus();
    document.execCommand(cmd, false, value);
    updateContent();
    updateActive();
  };

  const insertImage = () => {
    const url = prompt("Image URL:");
    if (url) format("insertImage", url);
  };

  const insertLink = () => {
    const url = prompt("Enter link URL:");
    if (url) format("createLink", url);
  };

  const activeBtn = "bg-blue-100 border-blue-500 text-blue-600";

  return (
    <div className="mt-4">
      <div className="border rounded-md overflow-hidden">

        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 p-2 bg-gray-50">

          {/* Inline Styles */}
          <button
            onClick={() => format("bold")}
            className={`btn ${active.bold ? activeBtn : ""}`}
          >
            B
          </button>

          <button
            onClick={() => format("italic")}
            className={`btn ${active.italic ? activeBtn : ""}`}
          >
            I
          </button>

          <button
            onClick={() => format("underline")}
            className={`btn ${active.underline ? activeBtn : ""}`}
          >
            U
          </button>

          {/* Headings */}
          <button
            onClick={() => format("formatBlock", "h1")}
            className={`btn ${active.h1 ? activeBtn : ""}`}
          >
            H1
          </button>

          <button
            onClick={() => format("formatBlock", "h2")}
            className={`btn ${active.h2 ? activeBtn : ""}`}
          >
            H2
          </button>

          <button
            onClick={() => format("formatBlock", "h3")}
            className={`btn ${active.h3 ? activeBtn : ""}`}
          >
            H3
          </button>

          {/* Lists */}
          <button
            onClick={() => format("insertUnorderedList")}
            className={`btn ${active.ul ? activeBtn : ""}`}
          >
            • List
          </button>

          <button
            onClick={() => format("insertOrderedList")}
            className={`btn ${active.ol ? activeBtn : ""}`}
          >
            1. List
          </button>

          {/* Code Block */}
          <button
            onClick={() => format("formatBlock", "pre")}
            className={`btn ${active.pre ? activeBtn : ""}`}
          >
            Code
          </button>

          {/* Quote */}
          <button
            onClick={() => format("formatBlock", "blockquote")}
            className={`btn ${active.quote ? activeBtn : ""}`}
          >
            Quote
          </button>

          {/* Link / Image */}
          <button onClick={insertLink} className="btn">Link</button>
          <button onClick={insertImage} className="btn">Image</button>
        </div>

        {/* Divider */}
        <div className="border-b"></div>

        {/* Editable area */}
        <div
          ref={editorRef}
          contentEditable
          onInput={() => {
            updateContent();
            updateActive();
          }}
          onClick={updateActive}
          onKeyUp={updateActive}
          placeholder="Write your blog content here..."
          className="editor min-h-[220px] p-4 focus:outline-none leading-relaxed"
        ></div>
      </div>
    </div>
  );
}
