"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CheckAccess from "../components/CheckAccess";

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
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 space-y-4">
        <h1 className="text-4xl font-bold">Edit Blog</h1>
        <form
          className="flex flex-col w-full max-w-md space-y-4"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            placeholder="Blog Title"
            className="p-2 border border-gray-300 rounded"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <textarea
            placeholder="Blog Content"
            className="p-2 border border-gray-300 rounded h-64"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
