import NavbarItems from "./NavbarItems";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
<<<<<<< HEAD
import Categories from "../menu";

export default function NavBar() {
  return (
        <div className="px-20 md:px-16 py-2 flex flex-row justify-between items-center  bg-opacity-90">

            <div className="flex-row ml-8 gap-7 hidden lg:flex justify-center w-full">
              <Categories/>
            {/* <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} /> */}
            </div>
            <div className="flex-row ml-8 gap-4 hidden lg:flex">
              <FavoriteBorderOutlinedIcon/>
              <ShoppingCartOutlinedIcon/>
          </div>
        </div>
=======

export default function NavBar() {
  return (
    <>
      <div className="w-full z-40">
        <div className="px-20 md:px-16 py-2 flex flex-row justify-between items-center transition duration-500 bg-zinc-200 bg-opacity-90">
          <img className="h-4 lg:h-7" src="" alt="D-E-C" />
          <div className="flex-row ml-8 gap-7 hidden lg:flex">
            <NavbarItems label="Browse" />
            <NavbarItems label="Help" />
            <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} /> 
          </div>
        </div>
      </div>

      <div className="w-full z-40">
        <div className="px-20 md:px-16 py-2 flex flex-row justify-between items-center  bg-opacity-90">
          
            <div className="flex-row ml-8 gap-7 hidden lg:flex justify-center w-full">
              <NavbarItems label="Nike"/>
              <NavbarItems label="Adidas" />
              <NavbarItems label="Puma" />
            {/* <NavbarItems label={<Link href={"../auth/signin"}>Sign in</Link>} /> */}
            </div>
            <div className="flex-row ml-8 gap-4 hidden lg:flex">
              <FavoriteBorderOutlinedIcon/>
              <ShoppingCartOutlinedIcon/>
          </div>
        </div>
      </div>
    </>
>>>>>>> e7b297b (navbar)
  );
}