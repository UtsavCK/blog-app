import SingUpButton from "./components/SignUpButton";
import StaticInfo from "./components/StaticInfo";
import LoginCheck from "../LoginCheck";

export default function SignUp() {
  return (
    <>
      <LoginCheck />
      <div className="flex flex-col w-full h-screen p-4 space-y-4">
        <div className="text-xl font-bold text-left">
          <a href="/">BlogApp</a>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
          <StaticInfo />
          <SingUpButton />
        </div>
      </div>
    </>
  );
}
