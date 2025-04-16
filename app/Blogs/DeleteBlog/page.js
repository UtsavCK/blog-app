export default function DeleteBlog() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 space-y-4">
        <h1 className="text-4xl font-bold">Delete Blog</h1>
        <p className="text-lg text-gray-600">
          Are you sure you want to delete this blog?
        </p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
        <button className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">
          <a href="/Blogs">Cancel</a>
        </button>
      </div>
    </>
  );
}
