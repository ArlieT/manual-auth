"use client";
import * as React from "react";
import { getUser, isSessionExpired } from "../../../service/tokenServices";
import { useRouter } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import { getSecuredData, postMessage } from "../../../service/apiRequest";
import { useForm } from "react-hook-form";

import "@fontsource/roboto/700.css";
import { DatePicker } from "@mui/x-date-pickers";
import { el } from "date-fns/locale";
import { LoginButton } from "@/components/buttons/buttons.components";

import { useSession } from "next-auth/react";
import CategoryNav from "@/components/CategoryNav";
import useCountStore from "@/lib/State";
import useUpdate from "@/lib/State";
import { useState } from "react";
import Product from "@/components/Product/page";
import Cart from "./cart/page";
import CartCom from "@/components/CartCom";
import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react/components/useEmblaCarousel";
import useEmblaCarousel from 'embla-carousel-react'
function Home() {
  const [user, setuser] = React.useState<any>();

  const [initialPlace, setInitialPlace] = React.useState(false);
  
  const [emblaRef] = useEmblaCarousel()
  return (
    <main className="relative flex flex-col pt-4 items-center justify-center space-y-5 text-black bg-white h-full ">
      {/* <CategoryNav initialPlace={initialPlace} /> */}

      <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container ">
            <div className="embla__slide">
              <Image
                src="/images/banner.png"
                alt="banner"
                width={2080}
                height={200}
              />
              <div className="absolute text-white z-[99] md:right-24 right-0 top-40">
                <h1 className="font-bold text-7xl">HOLIDAY SALE</h1>
                <h2 className="text-3xl">NEW SALE STYLE ADDED</h2>
              </div>
            </div>
            <div className="embla__slide">
              <Image
                src="/images/banner-2.png"
                alt="banner"
                width={2080}
                height={200}
              />
              <div className="absolute text-black z-[99] left-24 top-72">
                <h1 className="font-bold text-7xl">GET YOURS NOW</h1>
                <h2 className="text-3xl">GROUP 6</h2>
              </div>
            </div>
          </div>
      </div>
      <div
        ref={emblaRef}
        className="embla__slide w-screen pl-[1rem] relative  mx-2 flex flex-col items-center"
      >
        <div
          className={`embla__slide__number w-full h-[4.6rem] z-10 top-[0.6rem] right-[0.6rem] border-[50%] font-bold pointer-events-none bg-gradient-to-r`}
        ></div>
      </div>
      <Product />

      {/* <CartCom /> */}
    </main>
  );
}

export default Home;

/* get user from decoded token manual */
// const session = getUser();

// const checksSession = ()=>{
//   const sessionExpired: boolean = isSessionExpired();
//   if (sessionExpired) {
//     console.log({sessionExpired})
//     router.push("/login");
//   } else {
//     setuser(session);
//   }
// }

// React.useEffect(() => {
//   console.log({ user });
//   checksSession()
// }, []);

// window.addEventListener("focus", handleWindowFocus);

// Function to handle window focus event // check sesesion
// function handleWindowFocus() {
//   checksSession()
//   console.log("Page is active");
// }

// const getSecured = async () => {
//   const res = await getSecuredData();
//   console.log({ res });
// };

// React.useEffect(() => {
//   getSecured();
// }, []);
