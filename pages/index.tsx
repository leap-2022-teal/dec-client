import NavBar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Page(){

  const {data:session} = useSession()

  return(<div>
    Hello

    {session? User({ session }): Guest()}
  </div>)
}

// Guest
function Guest(){
  return(
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homopage</h3>

      <div className="flex justify-center">
      <Link href={"/auth/signin"} className="mt-5 px-10 py-1 rounded-sm bg-gray-200">Sign in</Link>
      </div>

    </main>
  )
}



// Authorize User
function User({ session}:any){
  return(
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Нэвтэрсэн хэрэглэгч</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

        <div className="flex justify-center">
          <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">Sign Out</button>
        </div>
      <div className="flex justify-center">
        <Link href={"/auth"} className="mt-5 px-10 py-1 rounded-sm bg-gray-200"></Link>
      </div>

    </main>
  )
}