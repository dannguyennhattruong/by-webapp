import Image from "next/image";
import React from "react";

interface Props {
  isLogined: boolean;
}

function GoogleLoginButton({ isLogined }: Props) {
  return (
    <div className="w-full bg-white">
      <button
        disabled={isLogined}
        className="flex w-full items-center justify-center gap-2 rounded-full  border border-by-peach-fuzz px-4 py-2 py-4 text-by-peach-fuzz transition duration-150 disabled:cursor-not-allowed"
      >
        <Image
          width={50000}
          height={50000}
          className="h-7 w-7"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}

export default GoogleLoginButton;
