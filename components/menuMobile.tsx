import Link from "next/link";
import MenuSearch from "./menuSearch";

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
        <MenuSearch />
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
