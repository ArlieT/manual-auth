"use client";
import Image from "next/image";
import { useEffect } from "react";
import { getUser, isTokenExpired } from "../../service/tokenServices";
import { logout } from "../../service/user.auth";
import { useRouter } from "next/navigation";
export default function Home() {
  useEffect(() => {
    getUser();
  }, []);

  return <main className="underline">hello world</main>;
}
