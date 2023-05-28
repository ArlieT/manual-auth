"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(status);
    if(status == 'unauthenticated'){

      router.push("/");
    }
  }, [status, router]);

  console.log("check if client/server");
  const favDialog = document.getElementById('favDialog');
  const showButton = document.getElementById('showDialog');
  showButton?.addEventListener('click', () => {
    favDialog?.showModal();
  });
  return (
    <main className="py-6">
      {/* card */}

      <div className="w-auto h-auto md:max-w-[50%] mx-auto flex flex-col p-4 rounded shadow">
        <div className="space-x-4  shadow flex flex-col space-y-5 items-center rounded">
          <div className="bg-rose-500 h-20 w-full">
            <Image
              src={session?.user?.image || ""}
              alt={session?.user?.name || "User Profile"}
              width={80}
              height={80}
              className="mx-auto rounded-full relative top-1/2"
            />
          </div>
          <div className="mt-12">
            <p>
              Name: <span className="font-bold"> {session?.user?.name} </span>
            </p>
            <p>
              Email: <span className="font-bold"> {session?.user?.email} </span>
            </p>
          </div>
        </div>
      </div>

      <dialog id="favDialog">
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>


      <p>
        <button id="showDialog">Show the dialog</button>
      </p>
    </main>
  );
}
