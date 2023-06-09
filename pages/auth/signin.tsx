import Layout from "@/layout/layout";
import Link from "next/link";

import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";

export default function Signin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event: any) {
    event.preventDefault();
    if (email && password) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, { email, password })
        .then((res: AxiosResponse) => {
          const { data, status } = res;
          if (status === 200) {
            localStorage.setItem("loginToken", res.data.accessToken);
            router.push("/order");
          }
        })
        .catch(({ error, code }) => {
          if (error.status === 401) {
            setError("Нэвтрэх нэр эсвэл нууц үг буруу байна");
          } else {
            setError(code);
          }
        });
    } else {
      alert("Нууц үг болон нэвтрэх нэрээ оруулна уу!!!");
    }
  }
  return (
    <Layout>
      <section className="desktop:w-[500px] laptop:w-[500px] mobile:w-full">
        <div className="flex justify-between">
          <div>
            <svg aria-hidden="true" className="pre-logo-svg w-full  h-20 flex justify-start" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                fill="currentColor"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              ></path>
            </svg>
          </div>
          <div></div>
        </div>

        <h1 className="text-gray-800  text-3xl py-4">Enter your email or password</h1>

        <form className="flex flex-col gap-5 py-8 w-full">
          <div className="flex-col border rounded-xl ">
            {/* <label htmlFor="email" className="">
              Email
            </label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none mb-8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none 
                "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
        </form>

        <p className="text-gray-400 py-4">
          Dont have account?{" "}
          <Link className="text-slate-700 " href={"./register"}>
            Register here
          </Link>
        </p>
        <div className="flex justify-between">
          <div></div>
          <button className="bg-black text-white p-3 w-[90px] rounded-full" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </section>
    </Layout>
  );
}
