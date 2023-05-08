import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { HiAtSymbol } from "react-icons/hi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <Head>
        <title>Reset Password</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Reset Password</h1>
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
          </div>
          <Link href={"./signin"} className="text-blue-600 text-lg">
            <ArrowBackIcon />
            Go back
          </Link>
        </form>
      </section>
    </Layout>
  );
}
