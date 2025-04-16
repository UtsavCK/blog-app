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
    <div className="bg-gray-700 text-white shadow-md rounded p-6 m-6 justify-between">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-400 mb-2">
        By {user || "Anonymous"} <br /> {new Date(date).toLocaleDateString()}
      </p>
      <p className="text-gray-200 mb-2">{previewContent}</p>

      <div className="flex justify-between">
        <Link href={`/Blogs/BlogDetails?id=${index}`}>
          <button className="bg-blue-800 text-white px-3 py-1 rounded text-sm">
            Read More
          </button>
        </Link>

        <Link href={`/Blogs/EditBlog?id=${index}`}>
          <button className="bg-green-700 text-white px-3 py-1 rounded text-sm">
            <img src="/edit.svg" alt="Edit" className="w-4 h-4 inline-block" />
          </button>
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-700 text-white px-3 py-1 rounded text-sm"
        >
          <img
            src="/delete.svg"
            alt="Delete"
            className="w-4 h-4 inline-block"
          />
        </button>
      </div>
    </div>
  );
}
