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
    <div className="flex justify-between">
      <div className=" w-[6%] flex items-center">
        <img className="w-[100%]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="nike logo" />
      </div>
      <div className="w-full flex items-center flex-col " ref={dropdownRef}>
        <div className="flex-row  gap-7 lg:flex justify-center ">
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

        {isMenuDropDownOpen && <SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}
      </div>
      <div>search</div>
      <div>icons</div>
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
            <div className=" text-neutral-600 hover:text-black">{category.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
