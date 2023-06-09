"use client";
import * as React from "react";
import { getUser, isSessionExpired } from "../../../service/tokenServices";
import { useRouter } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import { getSecuredData, postMessage } from "../../../service/apiRequest";
import { useForm } from "react-hook-form";
import Autoplay from "embla-carousel-autoplay";
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
import useEmblaCarousel from "embla-carousel-react";
function Home() {
  const [user, setuser] = React.useState<any>();

  const [initialPlace, setInitialPlace] = React.useState(false);

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <main className="relative flex flex-col pt-4 items-center justify-center space-y-5 text-black bg-white h-full ">
      {/* <CategoryNav initialPlace={initialPlace} /> */}

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container max-h-[210px] h-[50px] md:min-h-[480px] md:max-h-[480px]  ">
          <div className="embla__slide h-full border flex justify-center items-center ">
            <Image
              src="/images/banner.png"
              alt="banner"
              width={2000}
              height={100}
            />
            <div className="absolute text-white z-[99] md:right-24 md:top-1/3 right-6 bottom-8">
              <h1 className="font-bold text-2xl md:text-7xl">HOLIDAY SALE</h1>
              <h2 className=" md:text-3xl">NEW SALE STYLE ADDED</h2>
            </div>
          </div>

          <div className="embla__slide h-full border flex justify-center items-center">
            <Image
              src="/images/banner-2.png"
              alt="banner"
              width={2280}
              height={200}
            />
            <div className="absolute text-black z-[99] right-4 left-2 bottom-2  md:bottom-5 md:top-6">
              <h1 className="font-bold text-4xl md:text-7xl">GET YOURS NOW</h1>
              <h2 className="md:text-3xl">GROUP 6</h2>
            </div>
          </div>
          <div className="embla__slide h-full border flex justify-center items-center ">
            <Image
              src="/images/banner3.jpg"
              alt="banner"
              width={2000}
              height={200}
            />
            <div className="absolute text-amber-600 z-[99] left-5 bottom-5 md:right-12 md:bottom-[400px]  ">
              <h1 className="font-bold text-4xl md:text-7xl">GET YOURS NOW</h1>
              <h2 className=" text-lg md:text-3xl">GROUP 6</h2>
            </div>
          </div>
        </div>
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
