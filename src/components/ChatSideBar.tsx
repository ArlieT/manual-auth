import React from "react";

export default function ChatSideBar(
  { fakeUsers }: any,  setisChatClicked: any,
) {
  return (
    <aside className="h-screen w-52 bg-[#007aff] text-white px-2 py-2">
      <span className="text-xl font-semibold">Chat</span>

      <div className="space-y-2 py-5 text-white">
        {/* {fakeUsers?.map((chat: any, id: number) => (
          <div className="w-full" key={id}>
            <span
              onClick={() => setisChatClicked(id + 1)}
              className={`font-semibold block rounded   w-full cursor-pointer px-4 py-2
            ${id + 1 === chatClicked ? "bg-[#3596ff]" : ""}`}
            >
              {chat.name}
            </span>
          </div>
        ))} */}

        {/* {fakeUsers?.map((user :any)=>{
            <div>{user.text}</div>
        })} */}

        {fakeUsers && fakeUsers.user?.map((user:any,id:number)=>{
            <span key={id}> {user.name}</span>
        })}

      </div>
    </aside>
  );
}
