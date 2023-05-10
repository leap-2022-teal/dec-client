import React from "react";
import Link from "next/link";
import CategoryIcon from "@mui/icons-material/Category";
import NavBar from "@/components/navbar/Navbar";
import Menu, { SubMenu } from "@/components/menu";
import SubBanner from "@/components/subBanner";

export default function MainLayout({ children }: any) {
  return (
    <>
      <NavBar></NavBar>
      <Menu />
      <SubBanner />
      {children}
    </>
  );
}
