"use client";

import SingUpButton from "./components/SignUpButton";
import StaticInfo from "./components/StaticInfo";

export default function SignUp() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   let Username = document.getElementById("username");
  //   let Password = document.getElementById("password");
  //   if (!Username.value || !Password.value) {
  //     alert("Try valid username and password");
  //     return;
  //   }
  //   if (
  //     Username.value !== localStorage.getItem("username") &&
  //     Password.value !== localStorage.getItem("password")
  //   ) {
  //     if (!confirm("Rewrite username and password?")) {
  //       Username.value = "";
  //       Password.value = "";
  //     } else {
  //       console.log("Form submitted!");
  //       localStorage.setItem("username", Username.value);
  //       localStorage.setItem("password", Password.value);
  //       alert("User Created Successfully!");
  //       console.log("Username:", Username.value, "Password:", Password.value);
  //     }
  //   }
  // }

  return (
    <>
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
