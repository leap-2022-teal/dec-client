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
        .post("http://localhost:8000/user/login", { email, password })
        .then((res: AxiosResponse) => {
          const { data, status } = res;
          if (status === 200) {
            // const { token } = data;
            // localStorage.setItem("loginToken", token);
            // window.location.reload();
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
      console.log("Нууц үг болон нэвтрэх нэрээ оруулна уу!!!");
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
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex border rounded-xl relative">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            <span className="icon flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className="flex border rounded-xl relative">
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
          </div>
        </form>

        <p className="text-center text-gray-400">
          dont have account?{" "}
          <Link className="text-blue-700" href={"./register"}>
            Register here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
