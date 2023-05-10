import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setMenu(res.data));
  }, []);

  return (
    <div className="">
      <div className="w-full flex items-center flex-col " ref={dropdownRef}>
        <div className="flex-row gap-7 flex justify-center ">
          {menu
            .filter((category: any) => !category.parentId)
            .map((category: any) => (
              <Link href={""}>
                <div className="px-3 text-black border-solid border-black hover:border-b-2 text-base leading-10 h-14 flex items-center" onMouseOver={() => setMenuDropDownOpen(category._id)}>
                  {category.name}
                </div>
              </Link>
            ))}
        </div>
        <div className="flex justify-center bg-white w-[100%]">{isMenuDropDownOpen && <SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}</div>
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
