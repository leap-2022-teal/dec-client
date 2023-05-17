import React, { useEffect, useState } from "react";

import NavBar from "@/components/navbar/Navbar";
import Menu from "@/components/menuDesktop";
import SubBanner from "@/components/subBanner";
import { createContext } from "react";

export const ExampleContext = createContext([]);
export default function MainLayout({ children }: any) {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(JSON.parse(basketItems));
    }
  }, []);
  // const name = "bat";
  return (
    <>
      <ExampleContext.Provider value={basket}>
        <NavBar></NavBar>
        <Menu />
        <SubBanner />
        {children}
      </ExampleContext.Provider>
    </>
  );
}
