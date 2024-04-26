import React from "react";
import { IoFilter } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function SearchInput() {
  return (
    <div className="relative hidden md:block">
      <input
        className="text-by-peach-fuzz placeholder:text-by-peach-fuzz/60 bg-by-light-peach-fuzz h-9 w-[20rem] rounded-full px-10 text-sm outline-none"
        placeholder="Search"
      />
      <IoFilter
        size={22}
        className="absolute left-3 top-1/2 -translate-y-1/2"
      />
      <IoMdSearch
        size={22}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default SearchInput;
