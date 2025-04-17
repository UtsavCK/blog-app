import StaticInfo from "./components/StaticInfo";
import LoginButton from "./components/LoginButton";
import LoginCheck from "../LoginCheck";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <LoginCheck />
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="text-xl font-bold">
          <Link href="/">BlogApp</Link>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 w-full">
          <div className="w-full max-w-md bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-8 border border-gray-800">
            <div className="mb-6 text-center">
              <StaticInfo />
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
