"use client";
import { useCartModal, useCart } from "@/lib/State";
import Image from "next/image";
import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Rock_Salt } from "next/font/google";
import Progress from "../Progress";
import { useSession } from "next-auth/react";
import { BiLoader } from "react-icons/bi";
const Rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export default function CartModal() {
  const { isShown, setCartModal } = useCartModal();
  const { cartItems, setCartItems } = useCart();
  console.log("cart modal ", cartItems);

  return (
    <>
      {isShown && (
        <div
          className="h-screen justify-center items-center flex   fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70
    "
        >
          <div className="w-[90%] h-[70vh]  mb-6   flex flex-col items-center   z-[99]  rounded-md ">
            {/* header */}
            <div className="w-full   flex items-center justify-between text-black bg-white shadow px-4 md:p-3    top-0  z-10">
              <h1
                className={`text-4xl leading-[94px] align-middle font-bold text-gray-600 `}
              >
                Checkout
              </h1>
              <button
                onClick={() => setCartModal(false)}
                className="flex  items-center   w-10 h-10  pb-2  px-4 py-3 hover:scale-[1.02] bg-black font-semibold text-white rounded-full"
              >
                <p className=" -translate-x-[1px]  -translate-y-[1px]    align-top leading-[35px]">
                  X
                </p>
              </button>
            </div>

            <div className="flex divide-x w-full h-[100%]  ">
              {/* first col */}
              <div className="flex-1 px-2  overflow-y-auto h-full bg-white ">
                {cartItems.length > 0 ? (
                  cartItems?.map((p) => {
                    return (
                      <div
                        key={p.id}
                        className="flex flex-col  md:flex-row  mt-12  space-x-6 items-center justify-between w-[100%] h-auto p-6 mb-8 border rounded bg-white shadow text-black"
                      >
                        <div className="w-[70%] flex items-center justify-center  h-[20rem] mb-4 overflow-hidden">
                          <Image
                            src={p?.product?.image}
                            alt={p?.product.name}
                            width={350}
                            height={400}
                            className=" "
                          />
                        </div>
                        {/* about product */}
                        <div className="mr-20 min-h-full relative  ">
                          <strong className="text-xl mb-2 text-center">
                            {p?.product?.name}
                          </strong>

                          <strong className="mb-4 text-gray-600 block">
                            Seller: {p.userId}
                          </strong>
                          <div className="flex  w-full space-x-12 flex-nowrap whitespace-nowrap">
                            <p className="mb-4 text-gray-600 block">
                              Price: ₱
                              <span className="font-semibold">
                                {p?.product.price}
                              </span>
                            </p>
                            <p className="mb-4 text-gray-600">
                              Quantity:{" "}
                              <span className="font-semibold">
                                {p?.quantity}
                              </span>
                            </p>
                          </div>

                          <p className="mb-4 text-gray-600">
                            Description: {p?.product?.description}
                          </p>
                          <div className="space-x-4">
                            <button className="px-4 py-2 w-20 max-h-10 max-w-20 mt-2 font-semibold rounded-full transition-all bg-white text-black border-black  hover:bg-black/80 border duration-150 hover:text-white whitespace-nowrap">
                              delete
                            </button>
                            <button className="px-4 py-2 w-24 max-h-10 max-w-[96px] font-semibold mt-2 rounded-full transition-all hover:bg-white hover:text-black hover:border-black  bg-black/80 hover:border duration-150 text-white whitespace-nowrap">
                              checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex-1 h-full justify-center items-center flex flex-col">
                    <h1>Getting your cart data...</h1>
                    <BiLoader size={30} className=" animate-spin" />
                  </div>
                )}
              </div>
              {/* second col */}
              <div className="hidden lg:flex relative pt-10 max-h-full flex-1  flex-col  items-center    bg-white ">
                {/* <Progress /> */}
                {/* form */}
                {/* <div className="flex flex-col space-y-12 w-[90%]">
                  <div className="flex flex-col md:flex-row justify-around md:space-x-2">
                    <div className="flex flex-col md:flex md:w-full ">
                      <label className="text-stone-400 font-semibold ">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        className="border px-4 py-1.5 mt-2 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col md:flex md:w-full ">
                      <label className="text-stone-400 font-semibold ">
                        
                      </label>
                      <input
                        type="text"
                        className="border px-4 py-1.5 mt-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-around md:space-x-2">
                    <div className="flex flex-col md:flex md:w-full ">
                      <label className="text-stone-400 font-semibold ">
                        Cardholders Name
                      </label>
                      <input
                        type="text"
                        className="border px-4 py-1.5 mt-2 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col md:flex md:w-full pt-6 ">
                      <p className="font-semibold text-stone-400">
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quibusdam, recusandae!
                        Cum, asperiores.
                      </p>
                    </div>
                  </div>
                </div> */}

                <iframe className="w-full h-full " src="https://embed.lottiefiles.com/animation/83655"></iframe>

                <div className="absolute bottom-6 right-6">
                  <button
                    onClick={() => setCartModal(false)}
                    className="min-w-[160px] px-4 py-3 bg-black font-semibold text-white rounded-full"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
