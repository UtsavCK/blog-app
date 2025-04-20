"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CheckAccess from "../components/CheckAccess";
import Link from "next/link";

export default function EditBlog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    if (id >= 0 && id < storedBlogs.length) {
      setBlog(storedBlogs[id]);
    } else {
      alert("Blog not found");
      router.push("/Blogs");
    }
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedBlogs[id] = blog;
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));
    router.push("/Blogs");
  };

  return (
    <>
      <CheckAccess />
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 space-y-4 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
        <div className="w-full max-w-lg bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100">
          <h1 className="text-4xl font-bold mb-6 text-white text-center drop-shadow-sm">
            Edit Blog
          </h1>
          <form
            onSubmit={handleUpdate}
            className="flex flex-col w-full space-y-5"
          >
            <input
              type="text"
              placeholder="Blog Title"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 text-lg bg-gray-800 text-white placeholder-gray-400"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
            <textarea
              placeholder="Blog Content"
              className="p-3 border border-gray-300 rounded-lg h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 text-base bg-gray-800 text-white placeholder-gray-400"
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            ></textarea>
            <div className="flex justify-between items-center">
              <button
                className="mt-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200"
                type="submit"
              >
                Save Changes
              </button>
              <Link href={"/Blogs"}>
                <button
                  type="button"
                  className="mt-2 bg-gray-700 hover:bg-gray-800 active:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200"
                >
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
