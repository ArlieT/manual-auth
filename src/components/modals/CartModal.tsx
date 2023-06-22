'use client'
import { cartModal, cart } from "@/lib/State";
import Image from "next/image";
import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Rock_Salt } from "next/font/google";
import Progress from "../Progress";
const Rock = Rock_Salt({ weight: "400", subsets: ["latin"] });

export default function CartModal() {
  const { isShown, setCartModal } = cartModal();
  const { cartItems, setCartItems } = cart();
  console.log("cart modal ", cartItems);

  return (
    <>
      {isShown && (
        <div
          className="justify-center items-center flex overflow-x-hidden  fixed 
      inset-0 
      z-50 
      outline-none 
      focus:outline-none
      bg-neutral-800/70
    "
        >
          <div className="w-[90%] relative h-[80%] flex flex-row items-center  rounded bg-white">
            <button
              onClick={() => setCartModal(false)}
              className="absolute right-6 top-5"
            >
              Close
            </button>

            <div className="flex flex-col relative max-h-full w-[50%] ">
              {/* header */}
              <div className="min-h-[134px] text-black bg-white shadow p-5 w-full  sticky top-0  z-10">
                <h1
                  className={`text-4xl leading-[94px] align-middle font-bold text-gray-600 `}
                >
                  Checkout
                </h1>
              </div>
              {/* items */}
              <div className="overflow-y-auto max-h-full">
                {cartItems &&
                  cartItems.map((p) => {
                    return (
                      <div
                        key={p.id}
                        className="flex flex-row mt-12  space-x-6 items-center justify-between w-[100%] h-auto p-6 mb-8 border rounded bg-white shadow text-black"
                      >
                        <div className="w-[70%] flex items-center justify-center border h-[20rem] mb-4 overflow-hidden">
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
                            Seller: {p?.product?.user.username}
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

                          <div className="abosolute w-2/3 text-center font-bold bottom-0 bg-black px-4 py-2 text-white">
                            delete
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* second col */}
            <div className="relative flex flex-col  items-center justify-center  w-[50%]  h-full bg-white ">
              <div className="absolute top-6 min-w-[100%] max-w-[100%] backdrop-blur-sm flex flex-col items-center bg-white/30 shadow w-3/4 px-4 py-2">
                <Image
                  src="/images/PayPal.png"
                  alt="card"
                  width={250}
                  height={100}
                />
                <strong className="text-lg">
                  Pay ₱10,000 with Credit card{" "}
                </strong>
              </div>

              <Progress />
              {/* form */}
              <div className="flex flex-col space-y-12 w-[90%]">
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
                      Cardholders Name
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
                      consectetur adipisicing elit. Quibusdam, recusandae! Cum,
                      asperiores.
                    </p>
                  </div>
                </div>
              </div>

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
      )}
    </>
  );
}
