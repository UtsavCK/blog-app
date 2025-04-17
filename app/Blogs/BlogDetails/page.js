"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CheckAccess from "../components/CheckAccess";
import Link from "next/link";

export default function BlogDetails() {
  const [blog, setBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const blogId = queryParams.get("id");

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const selectedBlog = blogs[blogId];

    if (!selectedBlog) {
      router.push("/Blogs");
      return;
    }

    setBlog(selectedBlog);
  }, [router]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <CheckAccess />
      <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-2xl shadow-lg mt-10 mb-10 border border-gray-600">
  <h1 className="text-6xl font-bold mb-4">
    {blog.title}
  </h1>
  <p className="text-sm text-gray-300 mb-8 flex items-center gap-2">
    By <span className="font-semibold text-gray-200">{blog.user || "Anonymous"}</span>
    <span className="text-gray-400">|</span>
    <span className="italic">{new Date(blog.date).toLocaleDateString()}</span>
  </p>
  <div className="text-gray-800 bg-gray-400 rounded-xl p-6 shadow-inner mb-8 overflow-hidden">
    {blog.content}
  </div>
  <div className="mt-10 flex">
    <Link href="/Blogs">
      <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-lg shadow transition-all duration-200">
        
        <span className="font-medium">←Back to Blogs</span>
      </button>
    </Link>
  </div>
</div>
    </>
  );
}
