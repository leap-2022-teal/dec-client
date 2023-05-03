import NavbarItems from "./NavbarItems";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Categories from "../menu";

export default function NavBar() {
  return (
    <div className="px-20 md:px-16 py-2 flex flex-row justify-between items-center  bg-opacity-90">
      <div className="flex-row ml-8 gap-7 hidden lg:flex justify-center w-full">
        <Categories />
        {/* <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} /> */}
      </div>
      <div className="flex-row ml-8 gap-4 hidden lg:flex">
        <FavoriteBorderOutlinedIcon />
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
}
