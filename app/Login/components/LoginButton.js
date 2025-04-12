"use client";

import Link from "next/link";

export default function LoginButton() {
  function handleSubmit(e) {
    e.preventDefault();
    let Username = document.getElementById("username");
    let Password = document.getElementById("password");
    if (
      localStorage.getItem("username") === Username.value &&
      localStorage.getItem("password") === Password.value
    ) {
      localStorage.setItem("isLoggedIn", true);
      console.log(localStorage.getItem("isLoggedIn"));
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials!");
      Password.value = "";
    }
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        id="login-button"
        type="submit"
        onClick={handleSubmit}
      >
        Login
      </button>

      <p className="text-sm text-gray-500 space-x-2">
        <span>Don't have an account?</span>
        <a href="/SignUp" className="text-blue-500 underline">
          Sign Up
        </a>
      </p>
    </>
  );
}
