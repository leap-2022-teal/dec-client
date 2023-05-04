import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      <div className="flex-row gap-20 hidden lg:flex justify-center w-full">
        {categories
          .filter((category: any) => !category.parentId)
          .map((category: any) => (
            <div className="text-black-500 cursor-pointer hover:text-gray-400 transition text-l" onMouseOver={() => setMenuDropDownOpen(category._id)}>
              {category.name}
            </div>
          ))}
      </div>
      {isMenuDropDownOpen && <SubCategories isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={categories} />}
    </div>
  );
}

export function SubCategories({ categories, categoryId, isOn }: any) {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    if (isOn === categoryId) {
      const filtered = categories.filter((e: any) => {
        if (e.parentId === isOn) {
          return e;
        }
      });
      // console.log(filtered)
      setSubCategories(filtered);
    }
    // axios
    //   .get(`http://localhost:8000/categories`)
    //   .then((res) => setCategories(res.data));
  }, [isOn]);

  return (
    <>
      <div className="flex-row pt-10 gap-20 lg:flex justify-center w-full">
        {subCategories.map((category: any) => (
          <div className="m-0 p-0 cursor-pointer hover:text-gray-300 transition text-l">{category.name}</div>
        ))}
      </div>
    </>
  );
}
