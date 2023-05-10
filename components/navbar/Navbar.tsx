import NavbarItems from "./NavbarItems";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Categories from "../menu";
import Link from "next/link";
import Menu from "../menu";

export default function NavBar() {
  return (
    <>
      <div className=" max-w-[1600px] w-[100%] z-40 bg-neutral-100 h-10">
        <div className="px-20 md:px-16 py-2 flex flex-row justify-between items-center transition duration-50  bg-opacity-90">
          <Link href={"/jordan"}>
            <img className="h-4 lg:h-7" src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg" alt="D-E-C" />
          </Link>
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItems label="Browse" />
            <NavbarItems label="Help" />
            <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} />
          </div>
        </div>
      </div>

      {/* <div className="w-full z-40"> */}
      {/* <div className="px-20 md:px-16 py-2 flex justify-between bg-opacity-90">
          <div className="flex-row ml-8 gap-7 hidden lg:flex justify-center w-full ">
            <NavbarItems label="Nike" />
            <NavbarItems label="Adidas" />
            <NavbarItems label="Puma" />
          </div>
          <div className="m-0 gap-4 flex">
            <FavoriteBorderOutlinedIcon className="m-0" />
            <ShoppingCartOutlinedIcon className="m-0" />
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
