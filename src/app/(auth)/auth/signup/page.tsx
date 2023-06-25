"use client";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { login, signUp } from "../../../../../service/user.auth";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  password: string;
  email: string;
};

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const onSubmit = (data: User) => {
    signUp(data.username, data.password, data.email).then((res) => {
      if (res.data.msg === "Successful") {
        router.push("/auth/signin");
      }
    });
  };

  return (
    <main className="gradient2 flex items-center justify-center h-screen  bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] md:max-w-[35%] h-[80%] flex flex-col justify-center space-y-8 items-center  border py-5 shadow bg-[#ffffff]  rounded"
      >
        <h1 className="text-4xl font-bold mb-12">Signup</h1>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="w-[80%] border-b flex flex-col">
          {/* <label htmlFor="username">username</label> */}
          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="username"
            className="w-full pl-2 focus:outline-none border-none"
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="w-[80%] border-b flex flex-col">
          {/* <label htmlFor="password">password</label> */}
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="username"
            className="w-full pl-2 focus:outline-none border-none"
          />
          {/* errors will return when field validation fails  */}
        </div>
        <div className="border-b w-[80%] flex flex-col">
          {/* <label htmlFor="email">email</label> */}
          <input
            {...register("email", { required: true })}
            type="email"
            
            id="email"
            placeholder="email"
            className="w-full pl-2 focus:outline-none border-none"
          />
          {/* errors will return when field validation fails  */}
        </div>

        <button className="w-[80%] bg-black text-white hover:bg-white duration-100  hover:border-black b hover:text-black  mt-12 border rounded py-2">submit</button>
      </form>
    </main>
  );
}
