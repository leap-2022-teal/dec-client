import Link from "next/link";

export default function NavBar({ isSideMenuActive }: any) {
  return (
    <>
      <div className={isSideMenuActive ? `bg-none` : ` bg-neutral-100 w-full`}>
        <div
          className={`${
            isSideMenuActive ? `flex-col w-full  mt-6 ` : `max-w-[1830px] flex-row justify-between items-center desktop:mx-auto  laptop:mx-6 h-10 mobile:hidden desktop:flex laptop:flex `
          }`}
        >
          <div></div>
          <div className={`${isSideMenuActive ? `flex-col my-6` : `flex-row ml-8 items-center gap-7 flex  text-sm`}`}>
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
            {/* <span className={isSideMenuActive ? `hidden` : `block`}>|</span> */}
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
