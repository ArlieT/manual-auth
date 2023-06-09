"use client";
import { useSearch } from "@/lib/State";
import * as react from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
export default function Search() {
  const {setSearch,isOpen}= useSearch()

  const handleClick = () => {
    setSearch(!isOpen)
  };

  return (
    <div
      className="
      border-[1px] 
      w-full 
      md:w-auto 
      py-2 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    "
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Trend </div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] text-center">
          Latest
        </div>
        <div className="flex flex-row items-center gap-3 pr-2 pl-6 text-sm">
          <div className="hidden sm:blocko"></div>
          <button
            onClick={handleClick}
            className="p-2 bg-gray-950 rounded-full text-white"
          >
            <BiSearch size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
