"use clinet";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { removeItemToken } from "../../../service/tokenServices";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart, useCartModal } from "@/lib/State";
interface User {
  session: {
    expiration: Date;
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
}

export default function UserMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data: session } = useSession();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    removeItemToken();
    router.push("/login");
  };

  const gotoProfile = () => {
    router.push("/profile");
  };
  /* from zustand */

  const { isShown, setCartModal } = useCartModal();
  const { cartItems, setCartItems } = useCart();

  console.log("cart items in nav", cartItems);

  const cartItemTotal = cartItems.length;

  return (
    <div className="relative  ">
      <div className="flex flex-row items-center gap-3">
        {/* cart */}
        <div
          onClick={() => {}}
          className="relative md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <AiOutlineShoppingCart size={24} onClick={() => setCartModal(true)} />

          {cartItemTotal > 0 && (
            <small className="absolute -top-1 right-1 bg-black w-[20px] h-[20px] text-center rounded-full text-white font-bold flex items-center justify-center">
              {cartItemTotal}
            </small>
          )}
        </div>
        <div
          onClick={toggleOpen}
          className="group p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="relative hidden w-[30px] h-[30px] rounded-full overflow-hidden md:block">
            {session?.user?.image ? (
            <Image
                src={session ? session?.user?.image : "/"}
                alt={session && session?.user?.name ? session?.user?.name : ""}
                height={100}
                width={100}
              />
            ) : (
              <Avatar />
            )}

            {session && (
              <p
                className={`bg-gray-200 rounded-md font-semibold px-3 py-1 shadow shadow-gray-300/80 absolute scale-0 ${
                  !isOpen ? "group-hover:scale-100" : ""
                } transition-all -left-32 -bottom-[42px] `}
              >
                {" "}
                {session?.user?.email}
              </p>
            )}
          </div>
        </div>
        {/* dropdown */}
        {isOpen && (
          <div className="absolute rounded-xl z-50 shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col  cursor-pointer">
              <>
                <MenuItem user={null} label="Profile" onclick={gotoProfile} />

                {session ? (
                  <MenuItem user={null} label="Logout" onclick={signOut} />
                ) : (
                  <MenuItem user={null} label="Login" onclick={signIn} />
                )}
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
