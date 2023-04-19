import Layout from "@/layout/layout";
import Head from "next/head";
import Link from "next/link";
import Register from "./register";
import { HiFingerPrint , HiAtSymbol} from "react-icons/hi";
import { useState } from "react";
import {  signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik'

interface User {
    email:String,
    password: String
}
export default function Signin(){
    
    const [show, setShow] = useState(false)

    // const form:User = {
    //     email:
    //     password:
    // // }

    // Google Handle Fucntion
    async function handleGoogleSignin() {
        signIn('google',{callbackUrl: "http://localhost:3001/"})        
    }

    // Github Login
    async function handleGithubSignin() {
        signIn('github',{callbackUrl: "http://localhost:3001/"})        
    }

    return(<Layout>
        
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
                <input type="email"
                name="email"
                placeholder="Email"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "/>
                <span className="icon flex items-center px-4 ">
                <HiAtSymbol size={25}/>
                </span>
            </div>
            <div className="flex border rounded-xl relative">
                <input type={`${show? "text": "password"}`}
                name="password"
                placeholder="password"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
                />
                 <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
                <HiFingerPrint size={25} />
                </span>
            </div>
            <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-800   rounded-md py-3 text-gray-50 text-lg ">
                <button  type="submit">Login</button>
            </div>
            <div className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200">
                <button onClick={handleGoogleSignin} type="button">Sign in with Google</button>
            </div>
            <div className="w-full border py-3 flex justify-center gap-2 hover:bg-gray-200">
                <button onClick={handleGithubSignin}type="button">Sign in with Github</button>
            </div>
        </form>
        
        <p className="text-center text-gray-400">
            dont have account? <Link  className="text-blue-700" href={'./register'}>Sign up</Link>
        </p>
        </section>
    </Layout>
    )
}