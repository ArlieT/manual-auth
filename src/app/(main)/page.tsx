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
import { LoginButton } from "@/components/buttons/buttons.components";

import { useSession } from "next-auth/react";

function Home() {
  const [user, setuser] = React.useState<any>();
  const {data} = useSession();

  const router = useRouter();
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

  


  const { register, handleSubmit } = useForm();



React.useEffect(()=>{

  console.log("session: ",data) 
},[data])


  return (
    <div className="text-black bg-white h-full">
      {/* <LoginButton/> */}
    </div>
  );
}

export default Home;

  
