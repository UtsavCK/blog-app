"use client";

import { useEffect } from "react";

export default function LoginCheck() {
  return useEffect(() => {
    sessionStorage.setItem("isLoggedIn", "false");
    console.log(sessionStorage.getItem("isLoggedIn"));
  }, []);
}
