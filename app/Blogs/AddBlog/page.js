"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CheckAccess from "../components/CheckAccess";
import Link from "next/link";

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
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 space-y-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-4xl font-bold mb-6 text- text-center drop-shadow-sm">
            Add Blog
          </h1>
          <form onSubmit={blogAdd} className="flex flex-col w-full space-y-5">
            <input
              type="text"
              placeholder="Blog Title"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 text-lg"
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Blog Content"
              className="p-3 border border-gray-300 rounded-lg h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 text-base"
              id="content"
              required
              minLength="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="flex justify-between items-center">
              <button
                className="mt-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200"
                type="submit"
              >
                Add Blog
              </button>
              <Link href={"/Blogs"}>
                <button className="mt-2 bg-gray-700 hover:bg-gray-800 active:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
