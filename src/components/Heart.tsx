import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

export default function Heart() {
  const notify = () =>
    toast("Added to liked", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });

  return (
    <>
    

      <button
        onClick={notify}
        className="group-hover:opacity-100 group-hover:-translate-x-1.5 translate-x-12 opacity-0 transition-all duration-150 absolute right-10 top-8 bg-black/50 h-9 w-9 rounded-full text-white flex items-center z-[99] justify-center"
      >
        <AiOutlineHeart size={20} />
      </button>
    </>
  );
}
