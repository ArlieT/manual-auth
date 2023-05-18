'use client'
import { logout } from "./user.auth";
import jwt from "jsonwebtoken";

import { useRouter } from "next/navigation";

export const setItemToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeItemToken = () => {
  localStorage.removeItem("token");
};

export const getItemToken = () => {
  return localStorage.getItem("token");
};


export const getUser = () => {
  const userToken = getItemToken();
  if (userToken) {
    const decoded = jwt.decode(userToken);

    console.log({ decoded });
    const expirationDateInSeconds = decoded?.exp;
    const expirationDateInMillis = expirationDateInSeconds * 1000; // Convert to milliseconds

    const expirationDate = new Date(expirationDateInMillis);
    const formattedExpirationDate = expirationDate.toLocaleString();
    return{
      decoded,
      formattedExpirationDate
    }
  } else {
    console.log("no token");
  }
};

export const isTokenExpired = (router: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = localStorage.getItem("token");

  if (token) {
    // const date = new Date(expiration * 1000); // Convert seconds to milliseconds
    // const formattedTime = date.toLocaleTimeString(); // Get the formatted time
    // console.log("Formatted Time:", formattedTime);
    // console.log("Token exp: ", decodedToken.exp < currentTime);
  } else {
    // return true; // Token is not found or expired

    // const isSessionExpired = await isTokenExpired();
    logout();
    router.push("/login");
  }
};


export const isSessionExpired = ()=>{
  const time = Math.floor(Date.now() / 1000);
  const inMilli = time * 1000; // Convert to milliseconds
  const verifyDate = new Date(inMilli);
  const now = verifyDate.toLocaleString();


  const session = getUser()
  if(session){
  const expirationDateTime =new Date(session?.formattedExpirationDate)
  const currenDateTime = new Date(now)

  if(currenDateTime >= expirationDateTime)
    return true
  }
  return false

}