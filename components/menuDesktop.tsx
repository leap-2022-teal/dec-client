import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";
import SideMenu from "./sideMenu";
import NavBar from "./navbar/Navbar";
import { useDebounce } from "use-debounce";
import { useProducts } from "./useProducts";
import Highlighter from "react-highlight-words";
import MenuMobile from "./menuMobile";
import MenuSearch from "./menuSearch";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const [isSubMenuIsSubCategory, setIsSubMenuIsSugCategory] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setMenu(res.data));
  }, []);

  // sideMenu cancel button function

  const handleCancelSideMenu = () => {
    setIsSideMenuActive(false);
  };

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  // search icon darah uyd oorchlogdoj bgaa styles

  const outDivInActive = " flex justify-between items-center tablet:mx-6 laptop:mx-6 mobile:mx-6 between:mx-6  desktop:mx-auto  mx-6";
  const outDivActive = `  laptop:h-[500px] desktop:h-[500px] tablet:h-full mobile:h-full bg-white fixed top-0 inset-x-0 flex laptop:justify-around desktop:justify-around tablet:justify-between mobile:justify-between mobile:px-6 tablet:px-6`;
  const heartIconInActive = "desktop:flex laptop:flex mobile:hidden w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const heartIconActive = "hidden";
  const bagIconInActive = "w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const bagIconActive = "hidden";

  const imageInActive = "w-16";
  const imageActive = "w-16 laptop:block mobile:hidden desktop:block tablet:hidden";

  const menuIconInActive = " mobile:flex items-center desktop:hidden laptop:hidden ";
  const menuIconActive = "mobile:hidden tablet:hidden";

  const inputOutDivInActive = "mobile:flex mobile:gap-4 flex items-center";
  const inputOutDivActive = "transition duration-700 ease-in-out -translate-y-0 h-[500px] fixed  top-0 mobile:flex mobile:gap-4";
  const categoryInActive = "h-14 mobile:hidden tablet:hidden laptop:flex desktop:flex px-3 text-black text-base leading-10  items-center";
  const categoryActive = "h-14 relative px-3 text-black border-solid border-black border-b-2 text-base leading-10  items-center flex";
  const searchInactive = " flex items-center flex-col ";
  const searchActive = "hidden ";
  const subCategoryInActive = "flex justify-between tablet:mx-6 laptop:mx-6 mobile:mx-6 between:mx-6  desktop:mx-auto max-w-[1830px] mx-6";
  const subCategoryActive = " fixed w-full h-[350px] bg-white transition-all duration  ";

  const sideMenuOutDivInActive = "";
  const sideMenuOutDivActive = " h-full w-[300px] bg-white fixed right-0 top-0  duration-500   -translate-x-0";

  const sideMenuCategoryActive = " mobile:flex tablet:flex px-3 text-black text-2xl leading-10 ";

  return (
    <>
      {/* desktop menu  */}
      <div className={`h-16 justify-between items-center max-w-[1830px] desktop:mx-auto laptop:mx-6 mobile:hidden between:hidden tablet:hidden laptop:flex desltop:flex`}>
        {/* nike logo image */}
        <div className="w-24 h-16">
          <Link href={"/"}>
            <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-[100%]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>

        <div className={`w-full`} ref={dropdownRef}>
          <div className={`${`flex-row gap-7 flex justify-center items-center h-16`}`}>
            {menu
              .filter((category: any) => !category.parentId)
              .map((category: any) => (
                <Link href={""}>
                  {/* nemu deerhi angilaluud */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`${category._id === isMenuDropDownOpen ? categoryActive : categoryInActive}`}
                      onMouseOver={() => setMenuDropDownOpen(category._id)}
                      onClick={() => setIsSubMenuIsSugCategory(true)}
                    >
                      {category.name}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {/* subcategories  */}
          <div className={`${isMenuDropDownOpen ? `left-[0px] absolute bg-white w-full overflow-visible justify-center flex h-[300px]  transition-all   duration-500 ease-in-out` : `h-0 `}  `}>
            {<SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}
          </div>
        </div>

        <div className=" flex items-center justify-between">
          <MenuSearch />

          {/* heart icon */}
          <div className="flex ml-8">
            <div className="desktop:flex laptop:flex mobile:hidden w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center">
              <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
            </div>
            {/* bag icon */}
            <div className={`w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center `}>
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
          </div>
        </div>
      </div>
      <MenuMobile />
    </>
  );
}

export function SubMenu({ categories, categoryId, isOn }: any) {
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
            <Link href={`/category/${category._id}`}>
              <div className=" pt-4 w-[300px] flex justify-start  text-neutral-600 hover:text-black">{category.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
