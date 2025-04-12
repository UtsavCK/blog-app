export default function StaticInfo() {
  return (
    <form className="flex flex-col items-center justify-center w-full p-4 space-y-4">
      <h2 className="text-2xl font-bold">Login!</h2>
      <input
        id="username"
        type="text"
        placeholder="Username"
        className="px-4 py-2 border rounded"
        autoFocus
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="px-4 py-2 border rounded"
      />
    </form>
  );
}
