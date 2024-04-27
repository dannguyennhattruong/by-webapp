import Image from "next/image";
import React from "react";
import avatar from "/public/default-avatar.jpg";

function Author() {
  return (
    <div className="flex cursor-pointer gap-3">
      <Image
        src={avatar}
        width={5000}
        height={5000}
        alt="Author"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col items-start">
        <h3 className="text-sm font-semibold">Lii Lii</h3>
        <p className="text-xs text-by-orange">US-UK Music list</p>
      </div>
    </div>
  );
}

export default Author;
