"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUser, isTokenExpired } from "../../service/tokenServices";
import { logout } from "../../service/user.auth";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import ChatSideBar from "@/components/ChatSideBar";



export default function Home() {
  const [chatClicked, setChatClicked] = useState(0);

  const fetcher = (...args: any[]) => fetch(...(args as [RequestInfo, RequestInit?])).then((res) => res.json());

  const {
    data,
    mutate,
    error,
    isLoading,
  } = useSWR("/api/getMessage", fetcher);

  const handleChatClicked = (id:number) => {
    setChatClicked(id);
  };

  useEffect(() => {
    console.log("clicked ", chatClicked);
  }, [chatClicked]);

  useEffect(() => {
    getUser();
    console.log(data)
  }, [data]);

  return <main className="underline flex">
    <ChatSideBar fakeUsers={data}  setisChatClicked={handleChatClicked} chatClicked={chatClicked} />
    <div className="flex-grow p-4 overflow-y-auto h-full">
      {data.messages.map((message:any)=>{
        <div>{message}</div>
      })}
    </div>
    </main>;
}
