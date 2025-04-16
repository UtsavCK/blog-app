"use client";

import { useEffect, useState } from "react";
import LogoutButton from "./components/LogoutButton";
import BlogCard from "./components/BlogCard";
import CheckAccess from "./components/CheckAccess";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // If no blogs in localStorage, add dummy blogs
    if (storedBlogs.length === 0) {
      const dummyBlogs = [
        {
          title: "My First Blog",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          user: "Admin",
          date: new Date().toISOString(),
        },
        {
          title: "A Day in the Life",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          user: "User",
          date: new Date().toISOString(),
        },
        {
          title: "Travel Diaries",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          user: "Traveler",
          date: new Date().toISOString(),
        },
        {
          title: "Tech Insights",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          user: "Techie",
          date: new Date().toISOString(),
        },
        {
          title: "Foodie's Paradise",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          user: "Food Lover",
          date: new Date().toISOString(),
        },
      ];
      localStorage.setItem("blogs", JSON.stringify(dummyBlogs));
      storedBlogs = dummyBlogs;
    }

    // Sort blogs by date (most recent first)
    const sortedBlogs = storedBlogs.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setBlogs(sortedBlogs);
  }, []);

  const handleDelete = (index) => {
    let storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedBlogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));
    setBlogs(storedBlogs);
  };

  return (
    <>
      <CheckAccess />
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="flex flex-row justify-between text-xl font-bold text-left">
          <a href="/">BlogApp</a>
          <LogoutButton />
        </div>

        <div className="flex flex-col items-center justify-center w-full p-4">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            <a href="/Blogs/AddBlog">
              Create Blog
              <img
                src="/create.svg"
                alt="Create"
                className="w-4 h-4 inline-block ml-2"
              />
            </a>
          </button>

          <div className="grid grid-cols-3 justify-evenly w-full h-full m-4 p-4">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  content={blog.content}
                  user={blog.user}
                  date={blog.date}
                  index={index}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No blogs added yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
