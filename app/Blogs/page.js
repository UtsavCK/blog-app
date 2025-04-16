import LogoutButton from "./components/LogoutButton";
import BlogCard from "./components/BlogCard";
import CheckAccess from "./components/CheckAccess";

export default function Blogs() {
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
            <a href="/Blogs/AddBlog">Create Blog</a>
          </button>
          <div className="grid grid-cols-3 justify-evenly w-full h-full m-4 p-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}
