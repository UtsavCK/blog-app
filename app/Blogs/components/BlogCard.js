import Link from "next/link";

export default function BlogCard({
  title,
  content,
  user,
  date,
  index,
  onDelete,
}) {
  const previewContent =
    content.length > 100 ? content.slice(0, 100) + "....." : content;

  const handleDelete = () => {
    onDelete(index);
  };

  return (
  <div className="bg-gray-900 text-white rounded-2xl p-8 m-6 flex flex-col gap-4 border border-gray-600">
    <h1 className="text-2xl font-bold mb-2">
      {title}
    </h1>
    <p className="text-xs text-gray-300 mb-2 flex items-center gap-2">
      <span className="font-semibold">{user || "Anonymous"}</span>
      <span className="mx-1">|</span>
      <span className="italic">{new Date(date).toLocaleDateString()}</span>
    </p>
    <p className="text-gray-200 mb-4 line-clamp-3 text-base leading-relaxed">
      {previewContent}
    </p>
  
    <div className="flex gap-3 items-center mt-auto">
      <Link href={`/Blogs/BlogDetails?id=${index}`}>
        <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow transition-all duration-200">
          Read More
        </button>
      </Link>
  
      <Link href={`/Blogs/EditBlog?id=${index}`}>
        <button
          className="flex items-center justify-center bg-green-700 hover:bg-green-800 active:bg-green-600 text-white px-3 py-1.5 rounded-lg shadow transition-all duration-200"
          aria-label="Edit"
        >
          <img src="/edit.svg" alt="Edit" className="w-4 h-4" />
        </button>
      </Link>
  
      <button
        onClick={handleDelete}
        className="flex items-center justify-center bg-red-700 hover:bg-red-800 active:bg-red-600 text-white px-3 py-1.5 rounded-lg shadow transition-all duration-200"
        aria-label="Delete"
      >
        <img src="/delete.svg" alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  </div>
  
  );
}
