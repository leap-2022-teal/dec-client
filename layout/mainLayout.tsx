import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NavBar from "@/components/navbar/Navbar";
import Menu from "@/components/menuDesktop";
import SubBanner from "@/components/subBanner";
import { createContext } from "react";
import { useRouter } from "next/router";

export const ExampleContext = createContext([]);
export default function MainLayout({ children }: any) {
  const [visible, setVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSearch = (e: boolean) => {
    setIsSearchOpen(e);
  };

  const handleMenuDropDown = (e: boolean) => {
    setMenuDropDownOpen(e);
  };

  const handleSideMenuOpen = (e: boolean) => {
    setIsSideMenuOpen(e);
  };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("click", backToTop);
  });

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(JSON.parse(basketItems));
    }
  }, []);
  // const name = "bat";
  const router = useRouter();
  const { pathname } = router;

  const pageBlur = `${isSearchOpen || isMenuDropDownOpen || isSideMenuOpen ? `blur-sm relative -z-50` : ``}`;

  return (
    <>
      <ExampleContext.Provider value={basket}>
        {pathname !== "/auth/signin" ? (
          <>
            <NavBar />
            <Menu toggleSearch={toggleSearch} handleMenuDropDown={handleMenuDropDown} handleSideMenuOpen={handleSideMenuOpen} />

            <SubBanner />
          </>
        ) : null}

        <div className={`${pageBlur}`}>
          <div>{children}</div>

          <button id="button" onClick={backToTop} className={visible ? "fixed h-10 w-10 bg-black hover:bg-neutral-500 bottom-5 right-5 rounded-full text-white" : "hidden"}>
            <KeyboardArrowUpIcon className=" text-[30px]" />
          </button>
        </div>
      </ExampleContext.Provider>
    </>
  );
}
