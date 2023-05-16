import jwtDecode from "jwt-decode";
import { logout } from "./user.auth";

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
  const userToken = localStorage.getItem("token");
  if (userToken) {
    const decoded = jwtDecode(userToken);
    console.log("user ", decoded);
  } else {
    console.log("no token");
  }
};

export const isTokenExpired = (router: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    const expiration = decodedToken.exp;
    const date = new Date(expiration * 1000); // Convert seconds to milliseconds

    const formattedTime = date.toLocaleTimeString(); // Get the formatted time

    console.log("Formatted Time:", formattedTime);

    console.log("Token exp: ", decodedToken.exp < currentTime);
  } else {
    // return true; // Token is not found or expired

    // const isSessionExpired = await isTokenExpired();
    logout();
    router.push("/login");
  }
};
