import React from "react";
import "../../styles/spinner.css";
export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-[80vh]">
      <div className="block my-6 text-black/50 font-bold text-2xl">
        Getting products... please wait
      </div>
      <div className="flex">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}
