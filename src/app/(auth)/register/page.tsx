"use client";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { login, signUp } from "../../../../service/user.auth";
import { useRouter } from "next/navigation";

type User = {
  username: string;
  password: string;
};

export default function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>();

  const onSubmit = (data: User) => {
    signUp(data.username, data.password).then((res) => {
      if (res.data.msg === "Successful") {
        router.push("/login");
      }
    });
  };

  return (
    <main className="flex items-center justify-center h-screen  bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col border space-y-12 p-5 rounded-md shadow bg-blue-950 text-white"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="flex flex-col">
          <label htmlFor="username">username</label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="bg-blue-950/30 px-2 py-0.5 border focus:outline-none"
          />
        </div>

        {/* include validation with required or other standard HTML validation rules */}
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            className="bg-blue-950/30 px-2 py-0.5 border focus:outline-none"
          />
          {/* errors will return when field validation fails  */}
        </div>

        <button className="border-white border rounded py-2">submit</button>
      </form>
    </main>
  );
}
