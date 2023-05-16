import Link from "next/link";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { useProducts } from "./useProducts";

export default function MenuSearch() {
  const [inputText, setInputText] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [query, setQuery] = useState("");
  const [searchedQuery] = useDebounce(query, 300);
  const limit = 5;
  const products: any = useProducts({ searchedQuery, limit });

  function handleInputOnChange(event: any) {
    setInputText(event.target.value);
    setIsSearchActive(true);
  }

  // input clear button darahad text ustgaj baigaa function
  function handleInputTextDelete() {
    setInputText("");
  }

  function handleInputDeleteCancel() {
    setIsSearchActive(false);
    setInputText("");
    setQuery("");
  }

  const searchIconInActive = `desktop:absolute laptop:absolute tablet:block mobile:block w-10  h-10 hover:bg-neutral-200 rounded-full desktop:flex desktop:items-center desktop:justify-center laptop:flex laptop:items-center laptop:justify-center`;
  const searchIconActive = "absolute w-10 mt-4  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center";
  const inputInActive = " hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-12 w-28  bg-neutral-100 rounded-3xl h-10";
  const inputActive = ` h-10 mt-4 pl-12 laptop:w-[650px] tablet:w-[450px] between:w-[300px]  hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 bg-neutral-100 rounded-3xl`;
  const inputClearIconInActive = `${inputText ? `right-0 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center absolute` : `hidden`}`;
  const inputClearIconActive = `${!inputText ? `hidden` : `mt-4 right-0 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center absolute`}`;
  const cancelInActive = "hidden";
  const cancelActive = "flex hover:text-neutral-500 h-16";

  return (
    <>
      <div className="flex relative">
        {/* search icon */}
        <button className={`outline-none ${isSearchActive ? searchIconActive : searchIconInActive}`} onClick={() => setIsSearchActive(true || inputText)}>
          <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
            ></path>
          </svg>
        </button>

        {/* search input */}
        <input
          value={query}
          onChange={(e: any) => {
            setQuery(e.target.value);
            handleInputOnChange(e);
          }}
          // onChange={handleInputOnChange}
          type="text"
          placeholder="Search"
          className={`outline-none ${isSearchActive ? inputActive : inputInActive}`}
        />

        {/* input text clear button */}

        <button onClick={handleInputTextDelete} className={`outline-none ${isSearchActive ? inputClearIconActive : inputClearIconInActive}`}>
          <svg aria-hidden="true" className="pre-nav-design-icon" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
            <path stroke="currentColor" stroke-width="1.5" d="M18.973 5.027L5.028 18.972M5.027 5.027l13.945 13.945"></path>
          </svg>
        </button>
      </div>
      {/* input cancel button */}
      <div className={isSearchActive ? cancelActive : cancelInActive}>
        <button onClick={handleInputDeleteCancel}>Cancel</button>
      </div>
      <div className="absolute">
        {query ? (
          <div className="flex  ">
            <div className="w-[900px] mt-28">hi</div>
            <div className={"grid grid-cols-2 gap-5  laptop:grid-cols-5 mt-28 "}>
              {products.map((products: any) => (
                <>
                  <Link href={`/products/${products._id}`}>
                    <div className="  ">
                      <div className="products-image">
                        <div className="aspect-[1/1]  overflow-hidden">
                          <img src={products.image[0].path} alt="image" />
                        </div>
                        <div>
                          <h1 className="text-xl">
                            {/* <Highlighter searchWords={[searchedQuery]} autoEscape={true} textToHighlight={products.name} />{" "} */}
                            {products.name}
                          </h1>
                          <h3>${products.price}</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
