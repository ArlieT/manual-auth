import { cartModal, cart } from "@/lib/State";
import Image from "next/image";
import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import {Rock_Salt} from 'next/font/google'
const Rock = Rock_Salt({weight: '400', subsets:['latin']})

export default function CartModal() {
  const { isShown, setCartModal } = cartModal();
  const { cartItems, setCartItems } = cart();
  console.log("cart modal ", cartItems);
  return (
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

        <div className="flex flex-col relative max-h-full w-[50%] items-center  border border-red-500">
            {/* header */}
            <div   className="text-black bg-white shadow p-5 w-full  sticky top-0  z-10">
                <h1  className={`text-2xl font-serif ${Rock.className}`}>E-com</h1>
            </div>
            {/* items */}
            <div className="overflow-y-auto">
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
                  <div className="mr-20 min-h-full relative border ">
                    <strong className="text-xl mb-2 text-center">
                      {p?.product?.name}
                    </strong>

                    <strong className="mb-4 text-gray-600 block">
                      Seller: {p?.product?.user.username}
                    </strong>
                    <div className="flex  w-full space-x-12 flex-nowrap whitespace-nowrap">
                      <p className="mb-4 text-gray-600 block">
                        ₱ {p?.product?.price}
                      </p>
                      <p className="mb-4 text-gray-600">
                        Quantity: {p?.quantity}
                      </p>
                    </div>

                    <p className="mb-4 text-gray-600">
                      Description: {p?.product?.description}
                    </p>

                    <div className="abosolute bottom-0">
                        delete
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
        </div>

        <div className="absolute w-[50%] right-0 h-full bg-stone-100 flex justify-between items-center">
          <button onClick={()=>setCartModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}
