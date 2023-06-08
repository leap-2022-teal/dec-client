import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import MenuMobile from "./menuMobile";
import MenuSearch from "./menuSearch";

export default function Menu({ toggleSearch, handleMenuDropDown, handleSideMenuOpen }: any) {
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(JSON.parse(basketItems));
    }
  }, [basket]);
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

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q`).then((res) => setMenu(res.data));
  }, []);

  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
    handleMenuDropDown(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  // search icon darah uyd oorchlogdoj bgaa styles

  const categoryInActive = "h-14 mobile:hidden tablet:hidden laptop:flex desktop:flex px-3 text-black text-base leading-10  items-center";
  const categoryActive = "h-14 relative px-3 text-black border-solid border-black border-b-2 text-base leading-10  items-center flex";
  // console.log(menu);
  return (
    <>
      {/* desktop menu  */}
      <div className={` ${visible ? `bg-white w-full top-0 sticky` : ``}`}>
        <div className={` h-16 justify-between items-center max-w-[1830px] desktop:mx-auto laptop:mx-6 mobile:hidden between:hidden tablet:hidden laptop:flex desltop:flex`}>
          {/* nike logo image */}
          <div className="w-28 h-18">
            <Link href={"/"}>
              {/* <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-[100%]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
              <img src="Screenshot.png" alt="sneaker" />
            </Link>
          </div>

          <div className={`w-full`} ref={dropdownRef}>
            <div className={`${`flex-row gap-7 flex justify-center items-center h-16`}`}>
              <Link href={`/products`}>
                {/* menu  deerhi angilaluud */}
                <div className="flex items-center justify-between">
                  <div className={`hover:border-solid border-black border-b-2 h-14 px-3 text-black items-center flex`}>All Shoes</div>
                </div>
              </Link>
              {menu
                .filter((category: any) => !category.parentId)
                .map((category: any) => (
                  <Link href={`/${category.name}`} key={category._id}>
                    {/* menu  deerhi angilaluud */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`${category._id === isMenuDropDownOpen ? categoryActive : categoryInActive || !category._id ? categoryInActive : ``}`}
                        onMouseOver={() => {
                          setMenuDropDownOpen(category._id);
                          handleMenuDropDown(true);
                        }}
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

          <MenuSearch toggleSearch={toggleSearch} />
          <div className="flex ">
            {/* heart icon */}
            <div className={`w-10 h-10 hover:bg-neutral-200 rounded-full relative  flex items-center justify-center `}>
              <Link href={"/order"}>
                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                  ></path>
                </svg>
                {basket ? <div className="absolute bg-amber-300 rounded-full px-[6px] bottom-4 left-6 text-[14px]">{basket.length}</div> : <div></div>}
                {/* <div className="relative left-2 bottom-5">{basket?.length}</div> */}
              </Link>
            </div>
            <div className="desktop:flex laptop:flex mobile:hidden w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center">
              <Link href={"/user"}>
                <PersonIcon />
              </Link>
            </div>
            {/* bag icon */}
          </div>
        </div>
      </div>
      <MenuMobile toggleSearch={toggleSearch} categories={menu} handleSideMenuOpen={handleSideMenuOpen} />
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
            <Link href={`/category/${category._id}`} key={category._id}>
              <div className=" pt-4 w-[300px] flex justify-start  text-neutral-600 hover:text-black">{category.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
