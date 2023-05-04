import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";

export default function Categories() {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <>
      <div className="ml-[62px] mobile:hidden" ref={dropdownRef}>
        <button
          className="text-dark-grey-100"
          onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
        >
          Hover Menu
        </button>

        {isMenuDropDownOpen && <SubCategories />}
      </div>
    </>
  );
}

export function SubCategories() {
  return (
    <>
      <div className="dropdown-menu">
        <a>Item 1</a>
        <a>Item 2</a>
        <a>Item 3</a>
      </div>
    </>
  );
}
