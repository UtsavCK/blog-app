import Link from "next/link";
import LoginCheck from "./LoginCheck";

export default function Home() {
  return (
    <>
      <LoginCheck />
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="text-xl font-bold">
          <Link href="/">BlogApp</Link>
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold">Welcome to the Blog App</h1>
          <p className="mt-4 text-lg">
            Your one-stop solution for all your blogging needs.
          </p>
          <p className="mt-4 text-lg">Please Sign Up or Login to continue.</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href={"/SignUp"}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Sign Up
            </Link>
            <Link
              href={"/Login"}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
