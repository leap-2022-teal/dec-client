import Layout from "@/layout/layout";
import Link from "next/link";
import { useState } from "react";
import { emailValidator, passwordValidator } from "@/components/loginValidators/validators";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

interface IUser {
  name: string;
  email: string;
  password: string;
}
export default function Register() {
  // password haruulah
  const [show, setShow] = useState<any>({ password: false });
  const [copyPassword, setCopyPassword] = useState("");
  const [passErrorMsg, setPassErrorMsg] = useState<string>("");
  const router = useRouter();

  const notify = () =>
    toast("Амжилттай бүртгэгдлээ", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const toastError = () =>
    toast.error("Бүртгэлтэй хаяг байна", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const toastPasswordError = () =>
    toast.error("passwordoo shalgana uu", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  // Register
  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit() {
    if (formData && formData.password === copyPassword) {
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, { formData })
        .then((res) => {
          const { data, status } = res;
          if (status === 200) {
            notify();
            setTimeout(() => {
              router.push("/auth/signin");
            }, 2500);
          }
        })
        .catch((status) => {
          status === 400;
        });
    } else {
      toastPasswordError();
    }
  }

  function handleEmail(e: any) {
    const email: string = e.target.value;
    emailValidator({ email });
    setFormData({ ...formData, email: e.target.value });
  }

  function handlePassword(e: any) {
    const password: string = e.target.value;
    if (!password) {
      setPassErrorMsg("");
    } else if (password.length < 8) {
      setPassErrorMsg("nuuts ug 8 oron oos deesh baih estoi");
    } else {
      setPassErrorMsg("");
    }
    passwordValidator({ password });
    setFormData({ ...formData, password: e.target.value });
  }
  console.log(passErrorMsg);

  return (
    <Layout>
      <section className="desktop:w-[500px] laptop:w-[500px] mobile:w-full">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
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

        <h1 className="text-gray-800  text-3xl py-4">Register</h1>

        <form className="flex flex-col gap-5 py-8 w-full">
          <div className="flex-col border rounded-xl ">
            <input
              onChange={(e: any) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              value={formData.name}
              type="text"
              placeholder="User Name"
              className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none mb-8"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            <input type="email" placeholder="Email" className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none mb-8" onChange={handleEmail} value={formData.email} />
            <input
              type={`${show.password ? "text" : "password"}`}
              placeholder="Password"
              className="w-full mb-8 py-4 px-6 border border-black-800 rounded-xl focus:outline-none 
                "
              onChange={handlePassword}
              value={formData.password}
            />

            <input
              type={`${show.password ? "text" : "password"}`}
              placeholder="Confirm Password"
              className="w-full py-4 px-6 border border-black-800 rounded-xl focus:outline-none 
                "
              onChange={(e) => setCopyPassword(e.target.value)}
              value={copyPassword}
            />
          </div>
        </form>
        <p className="text-gray-400 py-4">
          Already have account?{" "}
          <Link className="text-slate-700 " href={"./signin"}>
            Sign in here
          </Link>
        </p>
        <div className="flex justify-between">
          <div></div>
          <button type="button" className="bg-black text-white p-3 w-[130px] rounded-full" onClick={handleSubmit}>
            Create Account
          </button>
        </div>
      </section>
    </Layout>
  );
}
