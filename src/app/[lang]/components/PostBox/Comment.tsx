import Image from "next/image";
import React from "react";
import avatar from "/public/default-avatar.jpg";

function Comment() {
  return (
    <div className="flex items-end gap-1">
      <div className="flex w-fit items-center gap-3 rounded-full bg-by-white/50 px-3">
        <Image
          src={avatar}
          width={5000}
          height={5000}
          alt="Author"
          className="h-6 w-6 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-xs font-semibold">Asha</h3>
          <p className="text-left text-xs text-by-orange">
            Her voice is so pure...
          </p>
        </div>
      </div>
      <p className="text-[10px] text-by-orange">12:00</p>
    </div>
  );
}

export default Comment;
