import StaticInfo from "./components/StaticInfo";
import LoginButton from "./components/LoginButton";
import LoginCheck from "../LoginCheck";

export default function Login() {
  return (
    <>
      <LoginCheck />
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="text-xl font-bold">
          <a href="/">BlogApp</a>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <StaticInfo />
          <LoginButton />
        </div>
      </div>
    </>
  );
}
