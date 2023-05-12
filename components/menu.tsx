import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";
import SideMenu from "./sideMenu";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  // search icon darah uyd oorchlogdoj bgaa style

  const searchInactive = " flex items-center flex-col ";
  const searchActive = "hidden ";
  const outDivInActive = " flex justify-between items-center desktop:mx-auto max-w-[1830px] mx-6 ";
  const outDivActive =
    " ease-linear duration-500 delay-100 duration-100 laptop:h-[300px] desktop:h-[300px] tablet:h-full mobile:h-full bg-white fixed top-0 inset-x-0 flex laptop:justify-around desktop:justify-around tablet:justify-between mobile:justify-between mobile:px-6 tablet:px-6";
  const heartIconInActive = "desktop:flex laptop:flex mobile:hidden w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const heartIconActive = "hidden";
  const bagIconInActive = "w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const bagIconActive = "hidden";
  const searchIconInActive =
    "desktop:absolute laptop:absolute tablet:block mobile:block w-10  h-10 hover:bg-neutral-200 rounded-full desktop:flex desktop:items-center desktop:justify-center laptop:flex laptop:items-center laptop:justify-center";
  const searchIconActive = "laptop:absolute w-10 mt-4  h-10 hover:bg-neutral-200 rounded-full laptop:flex laptop:items-center laptop:justify-center";
  const cancelInActive = "hidden";
  const cancelActive = "flex hover:text-neutral-500 h-16";
  const inputInActive = " hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-12 w-28  bg-neutral-100 rounded-3xl h-10";
  const imageInActive = "w-16";
  const imageActive = "w-16 laptop:block mobile:hidden desktop:block tablet:hidden";
  const inputActive =
    " h-10 mt-4 pl-14 w-[500px] ease-in transition delay-300 duration-300 hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 pl-6 bg-neutral-100 rounded-3xl";
  const menuIconInActive = " mobile:flex items-center desktop:hidden laptop:hidden ";
  const menuIconActive = "mobile:hidden tablet:hidden";

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setMenu(res.data));
  }, []);

  return (
    <div className="w-[100%]">
      <div className={isSearchActive ? outDivActive : outDivInActive}>
        <Link href={"/"}>
          <div className={isSearchActive ? imageActive : imageInActive}>
            <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-16" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
        <div className={isSearchActive ? searchActive : searchInactive} ref={dropdownRef}>
          <div className="flex-row gap-7 flex justify-center ">
            {menu
              .filter((category: any) => !category.parentId)
              .map((category: any) => (
                <Link href={""}>
                  <div
                    className=" mobile:hidden tablet:hidden laptop:flex desktop:flex px-3 text-black border-solid border-black hover:border-b-2 text-base leading-10 h-14 items-center"
                    onMouseOver={() => setMenuDropDownOpen(category._id)}
                  >
                    {category.name}
                  </div>
                </Link>
              ))}
          </div>
          <div className="flex justify-center bg-white w-[100%]">{isMenuDropDownOpen && <SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}</div>
        </div>

        <div className="mobile:flex mobile:gap-4">
          <button className={isSearchActive ? searchIconActive : searchIconInActive} onClick={() => setIsSearchActive(true)}>
            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
              ></path>
            </svg>
          </button>
          <input type="text" placeholder="search" className={isSearchActive ? inputActive : inputInActive} />
          <div className={isSearchActive ? heartIconActive : heartIconInActive}>
            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
              ></path>
            </svg>
          </div>

          <div className={isSearchActive ? bagIconActive : bagIconInActive}>
            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
          </div>
          <div className={isSearchActive ? menuIconActive : menuIconInActive}>
            <SideMenu />
          </div>
        </div>
        <div className={isSearchActive ? cancelActive : cancelInActive}>
          <button onClick={() => setIsSearchActive(false)}>cancel</button>
        </div>
      </div>
    </div>
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
        <Link href={"/products"}>All sheos</Link>
        {subMenu.map((category: any) => {
          console.log(subMenu);
          return (
            <Link href={`/category/${category._id}`}>
              <div className="  text-neutral-600 hover:text-black">{category.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
