"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiFillEyeInvisible, AiOutlineEyeInvisible } from "react-icons/ai";
export default function Signin() {
  interface userAuth {
    username: string;
    password: string;
  }

  const { handleSubmit, register, setError, watch,formState: { errors } } = useForm<userAuth>();
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything

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

  const [seePass, setSeePass] = useState('password')
  const [isSubmitting, setIsSubmtting] = useState(false)

  const onSubmit = async (data:userAuth) => {
    setIsSubmtting(true)
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: true,
      callbackUrl: "/"
    });
    console.log({data})
  };

  return (
    <main className="h-screen flex flex-cols items-center justify-center text-black">

      {/* form con */}
      <div className="min-w-[50%] flex flex-col items-center border py-5 rounded">
        <h1 className="font-bold text-2xl my-2">Sign in with credentials\</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-2/4 space-y-5  rounded mx-auto"
      >
        {errors.username && <p>{errors.username.message}</p>}
        <div className=" flex justify-between items-center px-4 py-2 border">
        <input type="text" {...register("username",{ maxLength: 16,required:"This field is require",})}  className="w-full focus:outline-none"/>
        </div>



        {errors.password && <p>{errors.password.message}</p>}
        <div className=" flex justify-between items-center px-4 py-2 border">
        <input type={seePass} {...register("password", {min:8,maxLength:20,required:"Password is requuired"})} className="w-[85%] max-w-[85%] focus:outline-none "/>
          {seePass === 'password' ? 
          <AiFillEyeInvisible onClick={()=>setSeePass('text')}/>
           :
          <AiOutlineEyeInvisible onClick={()=>setSeePass('password')} className="inline-flex"/>
           }
        </div>

        <button className="w-full text-lg font-bold  border border-blue-500 hover:bg-blue-500 hover:text-white duration-200 py-2">
          {isSubmitting ? 'Submitting...' : "Submit"}
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
