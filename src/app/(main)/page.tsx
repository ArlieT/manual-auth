"use client";
import * as React from "react";
import { getUser, isSessionExpired } from "../../../service/tokenServices";
import {  useRouter } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import { getSecuredData, postMessage } from "../../../service/apiRequest";
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';

import '@fontsource/roboto/700.css';
import { DatePicker } from "@mui/x-date-pickers";
import { el } from "date-fns/locale";



function Home() {
  const [user, setuser] = React.useState<any>();
  const router = useRouter();
  /* get user from decoded token */
  const session = getUser();

  const checksSession = ()=>{
    const sessionExpired: boolean = isSessionExpired();
    if (sessionExpired) {
      console.log({sessionExpired})
      router.push("/login");
    } else {
      setuser(session);
    }
  }

  React.useEffect(() => {
    console.log({ user });
    checksSession()
  }, []);
 

  window.addEventListener("focus", handleWindowFocus);
  
  // Function to handle window focus event // check sesesion
  function handleWindowFocus() {
    checksSession()
    console.log("Page is active");
  }

  // const getSecured = async () => {
  //   const res = await getSecuredData();
  //   console.log({ res });
  // };

  // React.useEffect(() => {
  //   getSecured();
  // }, []);

  


  const { register, handleSubmit } = useForm();






  return (
    <div className="text-black bg-white h-full">
    
    </div>
  );
}

export default Home;

  
//   window.addEventListener("blur", handleWindowBlur);
// // Function to handle window blur event
// function handleWindowBlur() {
//   console.log("Page is inactive");
// }