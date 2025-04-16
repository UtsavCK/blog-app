"use client";

import { useEffect } from "react";

export default function CheckAccess() {
  useEffect(() => {
    const user = sessionStorage.getItem("isLoggedIn");
    if (!user || user === "false") {
      window.location.href = "/";
    }
  });

  return <></>;
}
