import Image from "next/image";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlinePhone
} from "react-icons/ai";
export default function Footer() {
  return (
    <div className="relative min-h-[200px] mt-12 bg-black text-white">
      <div className="relative">
        <Image
          src="/images/banner.png"
          alt="footer-banner"
          width={500}
          height={500}
        />
        <div className="absolute flex flex-col space-y-5 top-5 left-1/2  z-10">
          <p>Socials</p>
          <div className="flex items-center space-x-2">
            <AiOutlineInstagram size="2rem" color="#fff" />
            <p>Instagram</p>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <AiOutlineFacebook size="2rem" color="#fff" />
            <p>Facebook</p>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <AiOutlinePhone size="2rem" color="#fff" />
            <p>Phone no.</p>
          </div>
        </div>
        <div className="absolute flex flex-col space-y-5 top-5 left-2/3  z-10">
          <p>Info</p>
          <div className="flex items-center space-x-2">
            <p>Lorem</p>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <p>Lorem ipsum</p>
          </div>{" "}
          <div className="flex items-center space-x-2">
            <p>Group 6.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
