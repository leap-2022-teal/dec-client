import Link from "next/link";

export default function MenuMobile() {
  return (
    <div className="flex justify-between desktop:hidden laptop:hidden max-w-[1200px] mx-6">
      <Link href={"/"}>
        <div className="w-16">
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
        {/* <div className={isSideMenuActive ? `flex` : `hidden`}>
              <NavBar isSideMenuActive={isSideMenuActive} isSearchActive={isSearchActive} />
            </div> */}
      </div>
    </div>
  );
}
