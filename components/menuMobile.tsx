import { Ruthie } from "@next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuSearch from "./menuSearch";
import { useContext } from "react";
import NavBar from "./navbar/Navbar";

export default function MenuMobile({ categories, toggleSearch, handleSideMenuOpen }: any) {
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const [isSubCategoryActive, setSubCategoryActive] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState("");
  const [isOnCategoryName, setIsOnCategoryName] = useState("");

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className={` flex justify-between desktop:hidden laptop:hidden mx-6  ${visible ? `sticky top-0 bg-white ` : ``}`}>
        <Link href={"/"}>
          <div className="w-16">
            {/* <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-16" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg> */}
            <img src="Screenshot.png" alt="sneaker" />
          </div>
        </Link>
        <div className={isSideMenuActive ? "hidden" : "flex gap-4 items-center "}>
          <MenuSearch toggleSearch={toggleSearch} />

          <div className="h-10 w-10 flex justify-center items-center hover:bg-neutral-200 rounded-full ">
            <Link href={"/order"}>
              <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
            </Link>
          </div>
          {/* btn click  */}
          <button
            onClick={() => {
              setIsSideMenuActive(true);
              handleSideMenuOpen(true);
            }}
            className="h-10 w-10 flex items-center justify-center hover:bg-neutral-200 rounded-full"
          >
            <svg aria-hidden="true" className=" pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className={isSubCategoryActive ? "hidden" : ""}>
        <div className={isSideMenuActive ? `transition-all fixed duration-300 h-full w-[300px] ease-in-out bg-white top-0 right-0 p-8` : `w-0  `}>
          <div className="flex justify-between">
            <div></div>
            <button
              onClick={() => {
                setIsSideMenuActive(false);
                handleSideMenuOpen(false);
              }}
              className={`outline-none ${isSideMenuActive ? "w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center " : "hidden"}`}
            >
              <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
              </svg>
            </button>
          </div>
          <div className={isSideMenuActive ? "flex-col flex text-2xl w-full" : "hidden"}>
            {categories
              .filter((categroy: any) => !categroy.parentId)
              .map((category: any) => (
                <div className="flex justify-between items-center w-full py-4" key={category._id}>
                  <button
                    onClick={() => {
                      setIsSubMenuOpen(category._id), setSubCategoryActive(true), setIsOnCategoryName(category.name);
                    }}
                  >
                    {category.name}
                  </button>
                  <div className="h-10 w-10 flex justify-center items-center">
                    <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
          <div className={isSideMenuActive ? `flex` : `hidden`}>
            <NavBar isSideMenuActive={isSideMenuActive} />
          </div>
        </div>
      </div>
      <div className={!isSubCategoryActive ? `transition-all fixed duration-300 h-full w-[0px] top-0 ease-in-out bg-white right-0 ` : ` w-[300px]  `}>
        <div className={isSubCategoryActive ? `transition-all fixed  h-full w-[300px] duration-300 ease-in-out top-0 p-8  bg-white right-0` : ` w-0  `}>
          <button onClick={() => setSubCategoryActive(false)} className={isSubCategoryActive ? "flex my-8 " : "hidden"}>
            <div className="mr-4">
              <svg aria-hidden="true" className="pre-chevron pre-chevron-back d-sm-b" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
              </svg>
            </div>
            <p>All</p>
          </button>
          <div className=" text-2xl mb-8">
            <Link href={`/${isOnCategoryName}`}>{isOnCategoryName}</Link>
          </div>
          <div className="">
            <SubCategoriesMenu categories={categories} isOn={isSubMenuOpen} categoryId={isSubMenuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

export function SubCategoriesMenu({ categories, isOn, categoryId }: any) {
  const [subMenu, setSubMenu] = useState([]);
  useEffect(() => {
    if (isOn === categoryId) {
      const filtered = categories.filter((e: any) => {
        if (e.parentId === isOn) {
          return e;
        }
      });

      setSubMenu(filtered);
    }
  }, [isOn]);

  return (
    <>
      <div className="">
        {/* <Link href={"/products"}>All sheos</Link> */}
        {subMenu.map((category: any) => {
          return (
            <Link href={`/category/${category._id}`} key={category._id}>
              <div className=" text-neutral-500 hover:text-black py-1">{category.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
