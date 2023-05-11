import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-10 relative h-10 hover:bg-neutral-200 rounded-full desktop:flex justify-center items-center laptop:flex mobile:flex ">
        <button className="" onClick={toggleMenu}>
          <SearchIcon />
        </button>
      </div>
      {isOpen && (
        <div className="pt-4 flex justify-around absolute inset-x-0 top-0 w-[100%] h-[300px] bg-white transition-all transition duration-150 eade-linear delay-100">
          <div className="w-16 object-cover ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/010/994/232/original/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg"
              alt=""
            />
          </div>
          <div className="w-[50%] flex">
            <div className="w-10  h-10 hover:bg-neutral-200 rounded-full ">
              <SearchIcon />
            </div>
            <input
              // onClick={expandInput}
              // style={{ width: inputWidth, transition: "width 0.5s" }}
              type="text"
              placeholder="search"
              className=" w-[100%] hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-6 bg-neutral-100 rounded-3xl h-10"
            />
          </div>
          <div>
            <button onClick={toggleMenu} className=" text-black">
              cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
