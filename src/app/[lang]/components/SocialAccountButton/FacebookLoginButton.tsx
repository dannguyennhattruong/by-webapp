import Image from "next/image";
import React from "react";
import facebookImg from "/public/facebook.svg";

interface Props {
  isLogined: boolean;
}

function FacebookLoginButton({ isLogined }: Props) {
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
          src={facebookImg}
          loading="lazy"
          alt="facebook logo"
        />
        <span>Sign in with Facebook</span>
      </button>
    </div>
  );
}

export default FacebookLoginButton;
