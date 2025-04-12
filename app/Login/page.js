"use client";

import StaticInfo from "./components/StaticInfo";
import LoginButton from "./components/LoginButton";

export default function Login() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted!");
  //   let Username = document.getElementById("username");
  //   let Password = document.getElementById("password");
  //   // Perform validation and send data to the server
  //   if (
  //     localStorage.getItem("username") === Username.value &&
  //     localStorage.getItem("password") === Password.value
  //   ) {
  //     alert("Login Successful!");
  //     console.log("Username:", Username.value, "Password:", Password.value);
  //   } else {
  //     alert("Invalid Credentials!");
  //     console.log(
  //       "Try Username:",
  //       localStorage.getItem("username"),
  //       "Password:",
  //       localStorage.getItem("password")
  //     );
  //     Password.value = "";
  //   }
  // }

  return (
    <>
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
