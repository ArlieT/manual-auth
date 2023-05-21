'use client'
import { logout } from "./user.auth";
import jwt from "jsonwebtoken";

import { useRouter } from "next/navigation";

export interface DecodedToken {
  username: string
  iat: number | undefined
  exp: number | undefined
}


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
    console.log({ decoded })


    if (typeof decoded === 'string') {
      // Handle the case when decoded is a string
    } else if (decoded !== null && typeof decoded === 'object') {
      const decodedToken: DecodedToken = {
        username: decoded.username,
        iat: decoded.iat,
        exp: decoded.exp,
      };
      const expirationDateInSeconds = decodedToken.exp;
      const expirationDateInMillis = expirationDateInSeconds && expirationDateInSeconds * 1000; // Convert to milliseconds
      let expirationDate: Date | undefined;
      if (expirationDateInMillis !== undefined) {
        expirationDate = new Date(expirationDateInMillis);
      } else {
        null
      }

      const formattedExpirationDate = expirationDate?.toLocaleString();

      return {
        decodedToken,
        formattedExpirationDate

      }

      // Use the decodedToken object as needed
    } else {
      // Handle the case when decoded is null or not of type DecodedToken
      return null
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


export const isSessionExpired = ():boolean => {
  const time = Math.floor(Date.now() / 1000);
  const inMilli = time * 1000; // Convert to milliseconds
  const verifyDate = new Date(inMilli);
  const now = verifyDate.toLocaleString();

  /* get user from decoded token */
  const session = getUser()
  if (session) {

    let expirationDate: Date
    if (session.formattedExpirationDate) {
      expirationDate = new Date(session.formattedExpirationDate)

      const currenDateTime = new Date(now)
      if (currenDateTime >= expirationDate)
          return true
    }
    return false
  }
  else return true



}