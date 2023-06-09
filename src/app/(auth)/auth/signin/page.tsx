"use client";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEyeInvisible, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiUser, CiLock } from "react-icons/ci";
import Image from "next/image";

interface userAuth {
  username: string;
  password: string;
}
export default function Signin() {
  const {
    handleSubmit,
    register,
    setError,
    watch,
    formState: { errors }
  } = useForm<userAuth>();
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const router = useRouter();

  // const onSubmit = async (data:userAuth)=>{
  //   console.log('on submit" ')
  //   console.log({data})
  //   //   signIn('credential',{
  //   //   username:data.username,
  //   //   password:data.password,
  //   //   redirect:false

  //   // })

  //   // console.log(result)
  // }
  const [seePass, setSeePass] = useState("password");
  const [errorLogin, setErrorLogin] = useState(false);
  const [isSubmitting, setIsSubmtting] = useState(false);

  const notify = () =>
    toast.error("Invalid Username or password!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    });

  const onSubmit = async (data: userAuth) => {
    setIsSubmtting(true);
    const signInResponse = await signIn("credentials", {
      email: data.username,
      password: data.password,
      redirect: false
    });

    console.log(signInResponse);
    if (signInResponse?.error !== "Invalid username or password") {
      router.push("/");
      setIsSubmtting(false);
    } else {
      notify();
      setIsSubmtting(false);
      // setErrorLogin(true);
    }
  };

  // useEffect(() => {
  //   notify();
  // }, [errorLogin]);

  return (
    <main className="gradient2  h-screen flex flex-cols items-center justify-center text-black">
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        theme="light"
      />
      {/* form con */}
      <div className="w-[80%] md:max-w-[35%] h-[80%] flex flex-col justify-center items-center  border py-5 shadow bg-[#ffffff]  rounded">
        {/* <Image src='/images/logo-black.png' alt='logo' width={300} height={200}/> */}
        <h1 className="font-bold text-4xl my-2">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-3/4  h-1/2 py-6 justify-between mt-24  rounded mx-auto"
        >
          <div className="space-y-5">
            {errors.username && <p>{errors.username.message}</p>}
            <div className=" flex space-x-3 justify-between items-center px-4 py-2 border-b">
              <CiUser className="h-6 w-6" />
              <input
                type="text"
                {...register("username", {
                  maxLength: 16,
                  required: "This field is require"
                })}
                placeholder="Type your username"
                className="w-full focus:outline-none border-none"
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div className=" flex space-x-3 justify-between items-center px-4 py-2 border-b">
              <CiLock className="h-6 w-6" />
              <input
                type={seePass}
                {...register("password", {
                  min: 8,
                  maxLength: 20,
                  required: "Password is requuired"
                })}
                placeholder="Type your password"
                className="w-[85%] max-w-[85%] focus:outline-none "
              />
              {seePass === "password" ? (
                <AiFillEyeInvisible className="cursor-pointer" onClick={() => setSeePass("text")} />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setSeePass("password")}
                  className="inline-flex cursor-pointer"
                />
              )}
            </div>
            <button type="button" onClick={()=>router.push('/auth/signup')} className="text-end w-full text-sm  text-blue-500 underline-offset-2 underline">register?</button>
          </div>

          <button className=" w-full mt-12 text-lg font-bold  border hover:border-black bg-black/80 hover:bg-white hover:text-black text-white duration-200 py-2">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}
// "use client";

// import { signIn } from "next-auth/react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { ChangeEvent, useState } from "react";

// export const Signin = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [formValues, setFormValues] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/profile";

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setFormValues({ email: "", password: "" });

//       const res = await signIn("credentials", {
//         redirect: false,
//         email: formValues.email,
//         password: formValues.password,
//         callbackUrl,
//       });

//       setLoading(false);

//       console.log(res);
//       if (!res?.error) {
//         router.push(callbackUrl);
//       } else {
//         setError("invalid email or password");
//       }
//     } catch (error: any) {
//       setLoading(false);
//       setError(error);
//     }
//   };

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const input_style =
//     "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

//   return (
//     <form onSubmit={onSubmit}>
//       {error && (
//         <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
//       )}
//       <div className="mb-6">
//         <input
//           required
//           type="email"
//           name="email"
//           value={formValues.email}
//           onChange={handleChange}
//           placeholder="Email address"
//           className={`${input_style}`}
//         />
//       </div>
//       <div className="mb-6">
//         <input
//           required
//           type="password"
//           name="password"
//           value={formValues.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className={`${input_style}`}
//         />
//       </div>
//       <button
//         type="submit"
//         style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
//         className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
//         disabled={loading}
//       >
//         {loading ? "loading..." : "Sign In"}
//       </button>

//       <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
//         <p className="text-center font-semibold mx-4 mb-0">OR</p>
//       </div>

//       <a
//         className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
//         style={{ backgroundColor: "#3b5998" }}
//         onClick={() => alert("Not implemented yet")}
//         role="button"
//       >
//         <img
//           className="pr-2"
//           src="/images/google.svg"
//           alt=""
//           style={{ height: "2rem" }}
//         />
//         Continue with Google
//       </a>
//       <a
//         className="px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
//         style={{ backgroundColor: "#55acee" }}
//         onClick={() => alert("Not implemented yet")}
//         role="button"
//       >
//         <img
//           className="pr-2"
//           src="/images/github.svg"
//           alt=""
//           style={{ height: "2.2rem" }}
//         />
//         Continue with GitHub
//       </a>
//     </form>
//   );
// };
