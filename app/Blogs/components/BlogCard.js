export default function BlogCard() {
  return (
    <>
      <div className="flex flex-col items-evenly justify-evenly bg-gray-900 m-4 p-4 w-80 space-y-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Blog Title</h2>
        <p className="text-sm text-gray-600">John Doe</p>
        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex flex-row justify-between text-sm text-gray-500">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <a href="/Blogs/BlogDetails">Read More</a>
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            <a href="/Blogs/EditBlog">Edit</a>
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            <a href="/Blogs/DeleteBlog">Delete</a>
          </button>
        </div>
      </div>
    </>
  );
}
