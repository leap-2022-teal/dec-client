import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import Register from "./register";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import axios, { AxiosResponse } from "axios";

export default function Signin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    if (email && password) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, { email, password })
        .then((res: AxiosResponse) => {
          const { data, status } = res;
          if (status === 200) {
          }
        })
        .catch(({ response, code }) => {
          if (response.status === 401) {
            setError("Нэвтрэх нэр эсвэл нууц үг буруу байна");
          } else {
            setError(code);
          }
        });
    } else {
      alert("Нууц үг болон нэвтрэх нэрээ оруулна уу!!!");
    }
  }

  // Google Handle Fucntion
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000/" });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000/" });
  }

  return (
    <Layout>

      <section className="w-full mx-auto flex flex-col gap-10">

        <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-16" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                fill="currentColor"

                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"

              ></path>
        </svg>

        <div className="title">
          <h1 className="text-gray-800 font-thin text-3xl py-4">Enter your email to join us or sign in.</h1>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex border rounded-xl relative">
            {/* <label htmlFor="email" className="">
              Email
            </label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none 
                "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            {/* <span className="icon flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span> */}
          </div>
          {/* <div className="flex border rounded-xl relative">
            <label htmlFor="password">Password</label>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" name="remember" className="ml-2" />
            </div>
            <div>
              <Link href={"./resetpassword"} className={"text-blue-600"}>
                Reset Password
              </Link>
            </div>
          </div>

          <div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-800   rounded-md py-3 text-gray-50 text-lg " type="button" onClick={handleSubmit}>
              Login
            </button>
          </div>
          <div>
            <button className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200" onClick={handleGoogleSignin} type="button">
              Sign in with Google
            </button>
          </div>
          <div>
            <button className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200" onClick={handleGithubSignin} type="button">
              Sign in with Github
            </button>
          </div> */}
        </form>

        <p className="text-gray-400">
          Dont have account?{" "}
          <Link className="text-slate-700 " href={"./register"}>
            Register here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
