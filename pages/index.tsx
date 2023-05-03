import NavBar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import MainLayout from "@/layout/mainLayout";

<<<<<<< HEAD
export default function Home() {
  return <MainLayout>Welcome</MainLayout>;
}
=======
export default function Home(){
  return (
    <MainLayout></MainLayout>
  )
}
>>>>>>> e7b297b (navbar)
