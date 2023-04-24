import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import { HiFingerPrint, HiAtSymbol } from "react-icons/hi";
import { use, useState } from "react";
import {
  confirmPasswordValidator,
  emailValidator,
  passwordValidator,
} from "@/components/loginValidators/validators";

interface IUser {
  userName: string;
  email: string;
  password: string;
  cpassword: string;
}
export default function Register() {
  // password haruulah
  const [show, setShow] = useState<any>({ password: false, cpassword: false });
  const [passErrorMsg, setPassErrorMsg] = useState<string>("")




  // Register
  const [formData, setFormData] = useState<IUser>({
    userName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handleSave() {
    fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function handleEmail(e: any) {
    const email: string = e.target.value;
    setFormData({ ...formData, email: e.target.value });
    console.log(emailValidator({ email }));
  }

  function handlePassword(e: any) {
    const password: string = e.target.value;
    if (!password) {
        setPassErrorMsg("")
    } else if (password.length < 8) {
        setPassErrorMsg("nuuts ug 8 oron oos deesh baih estoi")
    }else{
        setPassErrorMsg("")
    }
    // console.log(passwordValidator({ password }));
    setFormData({ ...formData, password: e.target.value });
}
  console.log(passErrorMsg)
  function handleCpassword(e: any) {
    const cpassword: string = e.target.value;
    const password = formData.password;
    setFormData({ ...formData, cpassword: e.target.value });
    console.log(confirmPasswordValidator({ password, cpassword }));
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex border rounded-xl relative">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              onChange={(e: any) => {
                setFormData({ ...formData, userName: e.target.value });
              }}
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              value={formData.userName}
            />
            <span className="icon flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className="flex border rounded-xl relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              onChange={handleEmail}
              value={formData.email}
            />
            <span className="icon flex items-center px-4 ">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className="flex border rounded-xl relative">
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              onChange={handlePassword}
              value={formData.password}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() =>
                setShow({ password: !show.password, cpassword: show.cpassword })
              }
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {passErrorMsg && 
          <p >{passErrorMsg}</p>}

          <div className="flex border rounded-xl relative">
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="password"
              placeholder="Confirm password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
              onChange={handleCpassword}
              value={formData.cpassword}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() =>
                setShow({ cpassword: !show.cpassword, password: show.password })
              }
            >
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className="">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-800  rounded-md py-3 text-gray-50 text-lg hover:from-blue-500 hover:first-letter: to-indigo-800 "
              type="button"
              onClick={handleSave}
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400">
          Have an account?{" "}
          <Link className="text-blue-700" href={"./signin"}>
            Sign in
          </Link>
        </p>
      </section>
    </Layout>
  );
}
