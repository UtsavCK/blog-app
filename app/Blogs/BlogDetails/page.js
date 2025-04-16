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
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-5xl font-bold mb-6">{blog.title}</h1>
        <p className="text-sm text-gray-600 mb-4">
          By <span className="font-medium">{blog.user || "Anonymous"}</span> on{" "}
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <div className="prose max-w-none text-lg text-gray-800 leading-relaxed">
          {blog.content}
        </div>
        <div className="mt-8">
          <Link href="/Blogs">
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
              ← Back to Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
