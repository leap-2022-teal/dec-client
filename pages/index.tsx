import NavBar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import MainLayout from "@/layout/mainLayout";

export default function Home() {
  return <MainLayout>Welcome</MainLayout>;
}
