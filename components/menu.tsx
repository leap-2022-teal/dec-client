import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";
import SideMenu from "./sideMenu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import SearchCanvas from "./searchCanvas";

export default function Menu() {
  const [inputWidth, setInputWidth] = useState("100px");
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  const expandInput = () => {
    setInputWidth("500px");
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setMenu(res.data));
  }, []);

  return (
    <div className="w-[100%]">
      <div className=" flex justify-between items-center 2xl:mx-auto max-w-[1830px]	 mx-[32px] ">
        <div className="w-16 object-cover ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/994/232/original/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
            alt="nike logo"
          />
        </div>
        <div className=" flex items-center flex-col " ref={dropdownRef}>
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
        </div>
        {/* <div className="flex justify-center bg-white w-[100%]">{isMenuDropDownOpen && <SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}</div> */}
        <div className="mobile:flex mobile:gap-4">
          <div className="flex gap-4 items-center">
            {/* <SearchCa5nvas /> */}
            <div className="w-10 h-10 hover:bg-neutral-200 rounded-full desktop:flex justify-center items-center laptop:flex mobile:flex">
              <button onClick={expandInput}>
                <SearchIcon />
              </button>
            </div>
            <input
              onClick={expandInput}
              style={{ width: inputWidth, transition: "width 0.5s" }}
              type="text"
              placeholder="search"
              className=" hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-6 bg-neutral-100 rounded-3xl h-10"
            />
            <div className="w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ">
              <FavoriteBorderIcon className="desktop:block laptop:block mobile:hidden " />
            </div>

            <div className="w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ">
              <WorkOutlineIcon />
            </div>
          </div>
          <div className=" mobile:flex items-center desktop:hidden laptop:hidden ">
            <SideMenu />
          </div>
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
        {subMenu.map((category: any) => (
          <Link href={""}>
            <div className="  text-neutral-600 hover:text-black">{category.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
