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

function Home() {
  const [user, setuser] = React.useState<any>();
 

  const [initialPlace, setInitialPlace] = React.useState(false);
  // if (window !== undefined) {
  //   window.onscroll = function () {
  //     var distanceScrolled = document.documentElement.scrollTop;
  //     console.log("Scrolled: " + distanceScrolled);
  //     if (distanceScrolled > 6) {
  //       setInitialPlace(false);
  //     } else {
  //       setInitialPlace(true);
  //     }
  //   };
  // }

  return (
    <main className="relative flex flex-col pt-4 items-center justify-center space-y-5 text-black bg-white h-full ">
      {/* <CategoryNav initialPlace={initialPlace} /> */}

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
