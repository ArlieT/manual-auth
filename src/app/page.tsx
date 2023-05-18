"use client";
import * as React from "react";
import { getUser, isSessionExpired } from "../../service/tokenServices";
import { useRouter } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import { getSecuredData, postMessage } from "../../service/apiRequest";
import { useForm } from "react-hook-form";

type user = {
  decoded: string | JwtPayload | null;
};

function Home() {

  const [user, setuser] = React.useState<user>();
  const router = useRouter();
  const session = getUser();

  const sessionTime: boolean = isSessionExpired();

  React.useEffect(() => {
    if (sessionTime) {
      router.push("/login");
    } else {
      setuser(session);
    }
  }, []);

  React.useEffect(() => {
    console.log({ user });
  }, [user]);

  // const getSecured = async () => {
  //   const res = await getSecuredData();

  //   console.log({ res });
  // };

  // React.useEffect(() => {
  //   getSecured();
  // }, []);

  const {register,handleSubmit,}=useForm()


  const onSubmitMessage = (data:any)=>{
    console.log(data)
    postMessage(data.message,user?.decoded?.username)
  }

  return <div>
    {user?.decoded?.username}


    <form onSubmit={handleSubmit(onSubmitMessage)}>
      <label htmlFor="">Message</label>
      <input type="text" {...register('message')} />
      <button>submit</button>
    </form>
  </div>;
}

export default Home;
