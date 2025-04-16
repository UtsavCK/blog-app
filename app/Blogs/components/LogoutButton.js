"use client";

import Link from "next/link";

export default function LogoutButton() {
  return (
    <button
      className="text-sm float-right bg-blue-500 text-white px-2 py-1 rounded mb-2 font-light"
      onClick={() => sessionStorage.setItem("isLoggedIn", false)}
    >
      <Link href="/Login">
        Logout
        <img
          src="/logout.svg"
          alt="Logout"
          className="w-4 h-4 inline-block ml-1"
        />
      </Link>
    </button>
  );
}
