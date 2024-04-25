import Image from "next/image";
import React from "react";
import LogoBY from "/public/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2 text-lg">
      <Image
        src={LogoBY}
        height={5000}
        width={5000}
        alt="Be Yourself Logo"
        className="h-10 w-10 object-cover"
      />
      Be Yourself
    </div>
  );
}

export default Logo;
