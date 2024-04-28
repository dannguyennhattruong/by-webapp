import Image from "next/image";
import React from "react";
import LogoBY from "/public/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg text-by-peach-fuzz"
    >
      <Image
        src={LogoBY}
        height={5000}
        width={5000}
        alt="Be Yourself Logo"
        className="h-10 w-10 object-cover"
      />
      Be Yourself
    </Link>
  );
}

export default Logo;
