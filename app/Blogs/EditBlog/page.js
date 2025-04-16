export default function EditBlog() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 space-y-4">
        <h1 className="text-4xl font-bold">Edit Blog</h1>
        <form className="flex flex-col w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Blog Content"
            className="p-2 border border-gray-300 rounded h-64"
          ></textarea>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
}
