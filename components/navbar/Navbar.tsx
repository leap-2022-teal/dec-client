import Link from "next/link";
import NavbarItems from "./NavbarItems";

export default function NavBar() {
  return (
    <div className="fixed w-full z-40">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-400 bg-opacity-90">
        <img className="h-4 lg:h-7" src="" alt="Ecommerce pic" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItems label="Browse" />
          <NavbarItems label="News" />
          <NavbarItems label="About" />
          <NavbarItems label="Help" />
          <NavbarItems label="Sell" />
          {/* <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} /> */}
        </div>
      </div>
    </div>
  );
}


