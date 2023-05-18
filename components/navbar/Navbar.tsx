import { ExampleContext } from "@/layout/mainLayout";
import Link from "next/link";
import { useContext } from "react";

export default function NavBar({ isSideMenuActive, SubCategoryActive }: any) {
  return (
    <>
      <div className={isSideMenuActive ? `bg-none` : " bg-neutral-100 w-full"}>
        <div
          className={`${
            isSideMenuActive ? `flex-col w-full  mt-6 ` : `max-w-[1830px] flex-row justify-between items-center desktop:mx-auto  laptop:mx-6 h-10 mobile:hidden desktop:flex laptop:flex `
          }`}
        >
          <Link href={"/"}>
            <img className={`${isSideMenuActive ? `w-12 ` : `w-6`}`} src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg" alt="D-E-C" />
          </Link>
          <div className={`${isSideMenuActive ? `flex-col my-6` : `flex-row ml-8 items-center gap-7 flex  text-sm`}`}>
            <div className={`${isSideMenuActive ? `flex mb-3` : ``}`}>
              <svg aria-hidden="true" className={`${isSideMenuActive ? `pre-nav-design-icon mr-4` : `hidden`}`} focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M20.25 5.25V16.5c0 1.24-1.01 2.25-2.25 2.25H6c-1.24 0-2.25-1.01-2.25-2.25V5.25"></path>
                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M8.25 18.5v-7.25h7.5v7.25M12 11.25v7.25M1.5 5.25h21"></path>
              </svg>
              <p className="cursor-pointer hover:text-neutral-500">Find a Store</p>
            </div>

            <div className={`${isSideMenuActive ? `flex mb-3` : `hidden`}`}>
              <svg aria-hidden="true" className="pre-nav-design-icon mr-4" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM11.99 18v-1.5"
                ></path>
                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M9 9.75a3 3 0 114.29 2.71c-.78.37-1.29 1.16-1.29 2.03V15"></path>
              </svg>
              <p className="cursor-pointer hover:text-neutral-500">Help</p>
            </div>
            <div className={`${isSideMenuActive ? `flex mb-3` : `hidden`}`}>
              <svg aria-hidden="true" className="pre-nav-design-icon mr-4" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75C13.01 3.75 12 4.76 12 6.5v7m8.25-3.75H3.75"></path>
                <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M14.25 3.75h4.39l1.61 6v10.5H3.75V9.75l1.61-6h5.14"></path>
              </svg>
              <p className="">Orders</p>
            </div>
            <div className={`${isSideMenuActive ? `flex` : `hidden`}`}>
              <svg aria-hidden="true" className="pre-nav-design-icon mr-4" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
              <div className={isSideMenuActive ? `block` : `hidden`}>Bag</div>
            </div>
            <span className={isSideMenuActive ? `hidden` : `block`}>|</span>
            <div className={`${isSideMenuActive ? ` flex mt-8` : ` flex `}`}>
              <button className={isSideMenuActive ? `mr-2 text-sm bg-black text-white hover:bg-neutral-700 border-2 rounded-full p-2 border-black hover:border-neutral-700 w-20` : `hidden`}>
                Join Us
              </button>
              <p className={`${isSideMenuActive ? `hidden` : `cursor-pointer hover:text-neutral-500`}`}>Join Us</p>
              <span className={isSideMenuActive ? `hidden` : `block mx-6 `}>|</span>
              <div>
                <Link href={"../auth/signin"}>
                  <button className={isSideMenuActive ? ` text-sm border-2 rounded-full border-neutral-300 hover:border-black w-20 p-2` : `hidden`}>Sign In</button>
                </Link>
              </div>
              <Link href={"../auth/signin"}>
                <p className={`${isSideMenuActive ? `hidden` : `cursor-pointer hover:text-neutral-500`}`}>Sign In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
