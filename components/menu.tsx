import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useOnHoverOutside } from "./hook";
import Link from "next/link";
import SideMenu from "./sideMenu";
import NavBar from "./navbar/Navbar";
import { useDebounce } from "use-debounce";
import { useProducts } from "./useProducts";
import Highlighter from "react-highlight-words";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const [isSubMenuIsSubCategory, setIsSubMenuIsSugCategory] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 300);
  const limit = 5;
  const products: any = useProducts({ searchedQuery, limit });
  // const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/categories?q`).then((res) => setMenu(res.data));
  }, []);

  // sideMenu cancel button function

  const handleCancelSideMenu = () => {
    setIsSideMenuActive(false);
  };
  // input clear button darahad text ustgaj baigaa function
  function handleInputTextDelete() {
    setInputText("");
  }

  // input deer darahad input oorchlogdoj baigaa function
  function handleInputOnChange(event: any) {
    setInputText(event.target.value);
    setIsSearchActive(true);
  }

  // input cancel button darahad davhar input deerhi text ustgaj baigaa function
  function handleInputDeleteCancel() {
    setIsSearchActive(false);
    setInputText("");
    setQuery("");
  }

  //
  const closeHoverMenu = () => {
    setMenuDropDownOpen("");
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  // search icon darah uyd oorchlogdoj bgaa styles
  const searchInactive = " flex items-center flex-col ";
  const searchActive = "hidden ";
  const outDivInActive = " flex justify-between tablet:mx-6 laptop:mx-6 mobile:mx-6 between:mx-6  desktop:mx-auto max-w-[1830px] mx-6";
  const outDivActive = ` w-full h-[500px] bg-white fixed duration-500 top-0 -translate-y-0 laptop:h-[500px] desktop:h-[500px] tablet:h-full mobile:h-full bg-white fixed top-0 inset-x-0 flex laptop:justify-around desktop:justify-around tablet:justify-between mobile:justify-between mobile:px-6 tablet:px-6`;
  const heartIconInActive = "desktop:flex laptop:flex mobile:hidden w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const heartIconActive = "hidden";
  const bagIconInActive = "w-10 h-10 hover:bg-neutral-200 rounded-full  flex items-center justify-center ";
  const bagIconActive = "hidden";
  const searchIconInActive = `desktop:absolute laptop:absolute tablet:block mobile:block w-10  h-10 hover:bg-neutral-200 rounded-full desktop:flex desktop:items-center desktop:justify-center laptop:flex laptop:items-center laptop:justify-center`;
  const searchIconActive = "absolute w-10 mt-4  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center";
  const cancelInActive = "hidden";
  const cancelActive = "flex hover:text-neutral-500 h-16";
  const imageInActive = "w-16";
  const imageActive = "w-16 laptop:block mobile:hidden desktop:block tablet:hidden";
  const inputInActive = " hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-12 w-28  bg-neutral-100 rounded-3xl h-10";
  const inputActive = ` h-10 mt-4 pl-12 laptop:w-[650px] tablet:w-[450px] between:w-[300px]  hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 bg-neutral-100 rounded-3xl`;
  const menuIconInActive = " mobile:flex items-center desktop:hidden laptop:hidden ";
  const menuIconActive = "mobile:hidden tablet:hidden";
  const inputClearIconInActive = `${inputText ? `right-0 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center absolute` : `hidden`}`;
  const inputClearIconActive = `${!inputText ? `hidden` : `mt-4 right-0 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center absolute`}`;
  const inputOutDivInActive = "mobile:flex mobile:gap-4 flex items-center";
  const inputOutDivActive = "mobile:flex mobile:gap-4";
  const categoryInActive = " mobile:hidden tablet:hidden laptop:flex desktop:flex px-3 text-black text-base leading-10 h-14 items-center";
  const categoryActive = "relative px-3 text-black border-solid border-black border-b-2 text-base leading-10 h-14 items-center flex";

  const subCategoryInActive = "";
  const subCategoryActive = " fixed w-full h-[350px] bg-white ";

  const sideMenuOutDivInActive = "";
  const sideMenuOutDivActive = " h-full w-[300px] bg-white fixed right-0 top-0  duration-500   -translate-x-0";

  const sideMenuCategoryActive = " mobile:flex tablet:flex px-3 text-black text-2xl leading-10 ";
  return (
    <>
      {/* desktop menu  */}
      <div className={`${isMenuDropDownOpen ? subCategoryActive : subCategoryInActive} mobile:hidden between:hidden tablet:hidden laptop:block desltop:block`}>
        <div className={isSearchActive ? outDivActive : outDivInActive}>
          {/* nike logo image */}
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
          {/* && isSearchActive ? outDivActive : ` flex justify-between w-[90%]` */}
          {/* buh angilalaa orooson div */}
          <div className={`${isSearchActive ? outDivActive : ` flex justify-between w-[70%]`}`}>
            {/* <div className="flex justify-between p-3">
              <div onClick={() => setIsSubMenuIsSugCategory(false)} className={isSubMenuIsSubCategory ? `flex` : `hidden`}>
                <svg aria-hidden="true" className="pre-chevron pre-chevron-back d-sm-b mr-3" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M15.525 18.966L8.558 12l6.967-6.967"></path>
                </svg>
                All
              </div>
              <div></div>
              <button onClick={handleCancelSideMenu} className={`outline-none ${isSideMenuActive ? ` h-14 hover:bg-neutral-200 rounded-full flex items-center justify-center w-14` : `hidden`}`}>
                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                </svg>
              </button>
            </div> */}
            <div className={`${isSearchActive ? searchActive : searchInactive}`} ref={dropdownRef}>
              <div className={`${`flex-row gap-7 flex justify-center`}`}>
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
                        {/* <button className={isSideMenuActive ? `h-14 w-14 flex items-center justify-center ` : `hidden`}>
                          <svg aria-hidden="true" className="pre-chevron chev-root pre-chevron-next" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path stroke="currentColor" stroke-width="1.5" d="M8.474 18.966L15.44 12 8.474 5.033"></path>
                          </svg>
                        </button> */}
                      </div>
                    </Link>
                  ))}
              </div>
              {/* subcategories  */}
              <div>{<SubMenu isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories={menu} />}</div>
            </div>
            {/* <div className={isSideMenuActive ? `flex` : `hidden`}>
              <NavBar isSideMenuActive={isSideMenuActive} isSearchActive={isSearchActive} />
            </div> */}
            <div className={isSearchActive ? inputOutDivActive : inputOutDivInActive && isMenuDropDownOpen ? `mobile:flex mobile:gap-4 mt-4` : inputOutDivInActive}>
              <div className="flex relative">
                {/* search icon */}
                <button className={`outline-none ${isSearchActive ? searchIconActive : searchIconInActive}`} onClick={() => setIsSearchActive(true || inputText)}>
                  <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path
                      stroke="currentColor"
                      stroke-width="1.5"
                      d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
                    ></path>
                  </svg>
                </button>
                {/* search input */}
                <input
                  value={query}
                  onChange={(e: any) => {
                    setQuery(e.target.value);
                    handleInputOnChange(e);
                  }}
                  // onChange={handleInputOnChange}
                  type="text"
                  placeholder="Search"
                  className={`outline-none ${isSearchActive ? inputActive : inputInActive}`}
                />

                {/* input text clear button */}

                <button onClick={handleInputTextDelete} className={`outline-none ${isSearchActive ? inputClearIconActive : inputClearIconInActive}`}>
                  <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
                  </svg>
                </button>
              </div>

              {/* heart icon */}

              <div className={isSearchActive ? heartIconActive : heartIconInActive}>
                <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                  ></path>
                </svg>
              </div>
              {/* bag icon */}
              <div className={isSearchActive ? bagIconActive : bagIconInActive}>
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
              {/* sidemenu icon */}
              <div className={isSearchActive ? menuIconActive : menuIconInActive}>
                <button onClick={() => setIsSideMenuActive(true)} data-te-sidenav-toggle-ref data-te-target="#sidenav-7" aria-controls="#sidenav-7" aria-haspopup="true">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg aria-hidden="true" className=" pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                      <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            {/* input cancel button */}
            <div className={isSearchActive ? cancelActive : cancelInActive}>
              <button onClick={handleInputDeleteCancel}>Cancel</button>
            </div>
          </div>
        </div>

        {/* search hiij baigaa heseg */}

        <div className="absolute">
          {query ? (
            <div className="flex  ">
              <div className="w-[900px] mt-28">hi</div>
              <div className={"grid grid-cols-2 gap-5  laptop:grid-cols-5 mt-28 "}>
                {products.map((products: any) => (
                  <>
                    <Link href={`/products/${products._id}`}>
                      <div className="  ">
                        <div className="products-image">
                          <div className="aspect-[1/1]  overflow-hidden">
                            <img src={products.image[0].path} alt="image" />
                          </div>
                          <div>
                            <h1 className="text-xl">
                              {/* <Highlighter searchWords={[searchedQuery]} autoEscape={true} textToHighlight={products.name} />{" "} */}
                              {products.name}
                            </h1>
                            <h3>${products.price}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile Menu */}

      <div className="flex justify-between desktop:hidden laptop:hidden max-w-[1200px] mx-6">
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
        <div className="flex gap-4 items-center ">
          <button
            className="h-10 w-10 hover:bg-neutral-200 rounded-full flex items-center justify-center"
            // className={`outline-none ${isSearchActive ? searchIconActive : searchIconInActive && isSideMenuActive ? `hidden` : searchIconInActive}`}
            // onClick={() => setIsSearchActive(true || inputText)}
          >
            <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
              ></path>
            </svg>
          </button>
          <div className="h-10 w-10 flex justify-center items-center hover:bg-neutral-200 rounded-full ">
            {/* className={isSearchActive ? bagIconActive : bagIconInActive && isSideMenuActive ? `hidden` : bagIconInActive} */}
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
          <div className="h-10 w-10 flex items-center justify-center hover:bg-neutral-200 rounded-full">
            {/* className={isSearchActive ? menuIconActive : menuIconInActive && isSideMenuActive ? `hidden` : `tablet:block mobile:block between:block laptop:hidden desktop:hidden`} */}
            {/* onClick={() => setIsSideMenuActive(true)} */}
            <button data-te-sidenav-toggle-ref data-te-target="#sidenav-7" aria-controls="#sidenav-7" aria-haspopup="true">
              <div className="h-10 w-10 flex items-center justify-center">
                <svg aria-hidden="true" className=" pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
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
              <div className=" pt-2 mt-2 w-[300px] flex justify-center   text-neutral-600 hover:text-black">{category.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
