"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function LoginSignupTabs() {
  const pathname = usePathname();
  return (
    <div className="absolute right-0 top-2/3 -translate-y-1/4">
      <div className="flex flex-col">
        <Link
          href={`/login`}
          className={`${
            pathname.includes("/login")
              ? "bg-by-white text-by-orange"
              : "text-by-white"
          } rounded-l-2xl py-5 pl-8 pr-6 text-left text-lg font-semibold`}
        >
          Login
        </Link>
        <Link
          href={`/signup`}
          className={`${
            pathname.includes("/signup")
              ? "bg-by-white text-by-orange"
              : "text-by-white"
          } rounded-l-2xl py-5 pl-8 pr-6 text-lg font-semibold`}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default LoginSignupTabs;
