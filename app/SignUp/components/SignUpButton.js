"use client";

import Link from "next/link";

export default function SingnUpButton() {
  function handleSubmit(e) {
    e.preventDefault();
    let Username = document.getElementById("username");
    let Password = document.getElementById("password");
    if (!Username.value || !Password.value) {
      alert("Try valid username and password");
      return;
    }
    if (
      Username.value !== localStorage.getItem("username") ||
      Password.value !== localStorage.getItem("password")
    ) {
      if (confirm("Update username and password?")) {
        localStorage.setItem("username", Username.value);
        localStorage.setItem("password", Password.value);
        alert("User Created Successfully!");
      }
    } else {
      alert("User already exists!");
    }
    Username.value = "";
    Password.value = "";
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        id="signup-button"
        type="submit"
        onClick={handleSubmit}
      >
        Sign Up
      </button>

      <p className="text-sm text-gray-500 space-x-2">
        <span>Already have an account?</span>
        <Link href="/Login" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </>
  );
}
