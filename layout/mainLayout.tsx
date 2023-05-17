import React from "react";

import NavBar from "@/components/navbar/Navbar";
import Menu from "@/components/menuDesktop";
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
