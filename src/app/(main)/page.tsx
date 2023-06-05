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
import CategoryNav from "@/components/CategoryNav";

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

const [initialPlace,setInitialPlace] =React.useState(false)

window.onscroll = function() {
  var distanceScrolled = document.documentElement.scrollTop;
  console.log('Scrolled: ' + distanceScrolled);
  if(distanceScrolled>1){
    setInitialPlace(false)
  }else{
    setInitialPlace(true)
    
  }
}
  return (
    <main className="relative flex flex-col space-y-5 text-black bg-white h-full px-10">
      <CategoryNav initialPlace={initialPlace}/>
      <div className="border p-5  rounded-xl">
        <h2>Display total price</h2>
      </div>
      <div className="h-screen border rounded"></div>
    </main>
  );
}

export default Home;

  
