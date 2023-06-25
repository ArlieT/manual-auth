"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEdit } from "react-icons/ai";

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(status);
    if (status == "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  console.log("check if client/server");
  // const favDialog = document.getElementById('favDialog');
  // const showButton = document.getElementById('showDialog');
  // showButton?.addEventListener('click', () => {
  //   favDialog?.showModal();
  // });
  console.log({ session });
  return (
    <main className=" h-screen py-6">
      {/* card */}

      <div className="relative w-auto h-1/2 md:max-w-[50%] mx-auto flex flex-col p-4 rounded shadow">
        <div className=" space-x-4   flex flex-col space-y-5  rounded">
          <div className="bg-black h-20 w-full">
            <Image
              src={
                session?.user?.image !== ""
                  ? session?.user?.image
                  : "/images/placeholder.jpg"
              }
              alt={session?.user?.name || "User Profile"}
              width={80}
              height={80}
              className="left-4 rounded-full relative "
            />
          </div>
          <div className="space-y-4 mt-12">
            <p>
              Name: <span className="font-bold"> {session?.user?.name} </span>
            </p>
            <p>
              Email: <span className="font-bold"> {session?.user?.email} </span>
            </p>{" "}
            <p>
              Address: <span className="font-bold"> </span>
            </p>
          </div>
          <button className="bottom-4 left-4 hover:bg-white hover:text-black bg-black text-white absolute  border px-6 p-1 border-black">
            <AiOutlineEdit className="inline mr-3" />
            Edit
          </button>
        </div>
      </div>

      <dialog id="favDialog">
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </main>
  );
}
