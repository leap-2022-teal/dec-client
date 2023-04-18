import Layout from "@/layout/layout"
import Head from "next/head"
import Link from "next/link";
import { HiFingerPrint , HiAtSymbol} from "react-icons/hi";
import { use, useState } from "react";


export default function Register(){

    const [show, setShow] = useState<any>({ password:false, cpassword:false})
    return(<Layout>

        <Head>
            <title>Register</title>
        </Head>


        <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
            <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
            <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <form className="flex flex-col gap-5">
            <div className="flex border rounded-xl relative">
                <input type="text"
                name="Username"
                placeholder="Username"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "/>
                <span className="icon flex items-center px-4 ">
                <HiAtSymbol size={25}/>
                </span>
            </div>

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
                <input type={`${show.password? "text": "password"}`}
                name="password"
                placeholder="Password"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
                />
                 <span className="icon flex items-center px-4" onClick={() => setShow({password:!show.password, cpassword:show.cpassword})}>
                <HiFingerPrint size={25} />
                </span>
            </div>

            <div className="flex border rounded-xl relative">
                <input type={`${show.cpassword? "text": "password"}`}
                name="password"
                placeholder="Confirm password"
                className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none
                "
                />
                 <span className="icon flex items-center px-4" onClick={() => setShow({cpassword:!show.cpassword, password:show.password})}>
                <HiFingerPrint size={25} />
                </span>
            </div>

            <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-800  rounded-md py-3 text-gray-50 text-lg ">
                <button  type="submit">Login</button>
            </div>
        </form>
        
        <p className="text-center text-gray-400">
            Have an account? <Link  className="text-blue-700" href={'./signin'}>Sign in</Link>
        </p>
        </section>       
        </Layout>
        )
}