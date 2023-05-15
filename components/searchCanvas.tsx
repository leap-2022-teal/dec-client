import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "use-debounce";
import { useProducts } from "./useProducts";
import Link from "next/link";
import Highlighter from "react-highlight-words";

export default function SearchCanvas() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 300);
  const limit = 5;
  const products = useProducts({ searchedQuery, limit });
  console.log(products, "hi");
  console.log(query);

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
        <div className="pt-4 flex justify-around absolute inset-x-0 top-0 w-[100%] h-[300px] bg-white transition-all   duration-150 eade-linear delay-100">
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
              value={query}
              onChange={(e: any) => setQuery(e.target.value)}
              type="text"
              placeholder="search"
              className=" w-[100%] hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-6 bg-neutral-100 rounded-3xl h-10"
            />
          </div>
          <div className="grid grid-cols-5">
            {products.map((products: any) => (
              <>
                <Link href={`/products/${products._id}`}>
                  <div className=" d-inline-block  ">
                    <div className="products-image">
                      <div className="aspect-[1/1] relative overflow-hidden">
                        <img src={products.image[0].path} alt="image" />
                      </div>
                      <div>
                        <h1 className="text-xl">
                          <Highlighter highlightClassName="p-0 bg-red" searchWords={[searchedQuery]} autoEscape={true} textToHighlight={products.name} />{" "}
                        </h1>
                        <h3>${products.price}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))}
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
