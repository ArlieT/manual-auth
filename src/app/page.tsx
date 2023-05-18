"use client";
import * as React from "react";
import { getUser } from "../../service/tokenServices";
import { useRouter } from "next/navigation";

function Home() {
  const [user,setuser]= React.useState('')
  const router = useRouter();
  const session = getUser();


  console.log({session})
  
  // setuser(session.decoded.username);
  const time = Math.floor(Date.now() / 1000);
  const inMilli = time * 1000; // Convert to milliseconds
  const verifyDate = new Date(inMilli);
  const now = verifyDate.toLocaleString();

  
  if(session){
    const expirationDate = new Date(session.formattedExpirationDate)
    const currenDate = new Date(now)

    console.log({expirationDate})
    console.log({currenDate})
  if (currenDate >= expirationDate) {
    console.log('expired')
    router.push("/login");
  }else{
    console.log('sessoin not expired')
  }
}


  return <div>Home</div>;
}

export default Home;
