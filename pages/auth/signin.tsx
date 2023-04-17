import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import Register from "./register";

export default function Signin(){
    return(<Layout>
        
        <Head>
            <title>Login</title>
        </Head>

        <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
            <p className="w-3/4 mx-auto text-gray-400">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <form className="flex flex-col gap-5">
            <div className="flex border rounded-xl relative">
                <input type="email"
                name="email"
                placeholder="Email"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "/>
            </div>
            <div className="flex border rounded-xl relative">
                <input type="password"
                name="password"
                placeholder="password"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
                />
            </div>
            <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-500  rounded-md py-3 text-gray-50 text-lg hover:bg-red-900">
                <button  type="submit">Login</button>
            </div>
            <div className="input-button">
                <button type="submit">Sign in with Google</button>
            </div>
            <div className="input-button">
                <button type="submit">Sign in with Facebook</button>
            </div>
        </form>
        
        <p className="text-center text-gray-400">
            dont have account? <Link  className="text-blue-700" href={'./register'}>Sign up</Link>
        </p>
        </section>
    </Layout>
    )
}