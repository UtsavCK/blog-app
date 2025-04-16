"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckAccess from "../components/CheckAccess";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  function blogAdd(event) {
    event.preventDefault();

    const newBlog = {
      title,
      content,
      user: localStorage.getItem("username") || "Anonymous",
      date: new Date().toISOString(),
    };

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    router.push("/Blogs");
  }

  return (
    <>
      <CheckAccess />
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 space-y-4">
        <h1 className="text-4xl font-bold">Add Blog</h1>
        <form
          onSubmit={blogAdd}
          className="flex flex-col w-full max-w-md space-y-4"
        >
          <input
            type="text"
            placeholder="Blog Title"
            className="p-2 border border-gray-300 rounded"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Blog Content"
            className="p-2 border border-gray-300 rounded h-64"
            id="content"
            required
            minLength="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
}
