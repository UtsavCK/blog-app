export default function Blogs() {
  return (
    <>
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="text-xl font-bold text-left">
          <a href="/">BlogApp</a>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <h1 className="text-2xl font-bold">Blogs</h1>
          <p className="mt-4 text-lg">No Blogs Available.</p>
        </div>
      </div>
    </>
  );
}
