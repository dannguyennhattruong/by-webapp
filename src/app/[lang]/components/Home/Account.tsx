import Image from "next/image";
import React from "react";
import bannerImg from "/public/postbox_image.jpeg";

function Account() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex w-full cursor-pointer gap-3">
        <Image
          src={bannerImg}
          width={5000}
          height={5000}
          alt="Author"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold">Uyen Phuong</h3>
          <p className="text-xs text-by-orange">@uynhphng</p>
        </div>
      </div>
      <p className="text-xs font-semibold text-by-orange">Switch</p>
    </div>
  );
}

export default Account;
