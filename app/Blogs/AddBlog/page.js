"use client";

export default function AddBlog() {
  function blogAdd(event) {
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const user = localStorage.getItem("username");
    event.preventDefault();
    // Logic to add a new blog post
    console.log("Blog added!");
    const blog = { title: title, user: user, content: content };
    console.log(blog);
    localStorage.setItem("blog", JSON.stringify(blog));
    const storedBlog = JSON.parse(localStorage.getItem("blog"));
    console.log(storedBlog);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen p-4 space-y-4">
        <h1 className="text-4xl font-bold">Add Blog</h1>
        <form className="flex flex-col w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="p-2 border border-gray-300 rounded"
            id="title"
            required
          />
          <textarea
            placeholder="Blog Content"
            className="p-2 border border-gray-300 rounded h-64"
            id="content"
            required
            minLength="10"
          ></textarea>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
            onClick={blogAdd}
          >
            <a href="/Blogs">Add Blog</a>
          </button>
        </form>
      </div>
    </>
  );
}
