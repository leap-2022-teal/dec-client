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
    setQuery("");
  }

  function handleInputDeleteCancel() {
    setIsSearchActive(false);
    setQuery("");
  }

  const searchIconInActive = `desktop:absolute laptop:absolute mobile:absolute  w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center`;
  const searchIconActive = "absolute w-10 mt-4  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center";
  const inputInActive = " hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 mobile:hidden laptop:block desktop:block pl-12  bg-neutral-100 rounded-3xl h-10";
  const inputActive = ` w-full overflow-visible transition duration-700 ease-in-linear h-10 mt-4 pl-12  h-10 mt-4 pl-12 hover:placeholder:text-neutral-500 placeholder:text-neutral-300 hover:bg-neutral-200 bg-neutral-100 rounded-3xl`;
  const inputClearIconInActive = `${query ? `right-0 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center absolute` : `hidden`}`;
  const inputClearIconActive = `${!query ? `hidden` : ` mt-4 w-10  h-10 hover:bg-neutral-200 rounded-full flex items-center justify-center top-0 right-0 absolute`}`;
  const cancelInActive = "hidden";
  const cancelActive = "flex hover:text-neutral-500 h-16";

  return (
    <>
      <div
        className={
          isSearchActive
            ? `overflow-visible flex-col fixed w-full  transition-all duration-500 ease-in-out bg-white right-0 mobile:h-full tablet:h-full d top-0 laptop:h-[500px] desktop:h-[500px] pb-12`
            : ` h-10 mobile:w-10 desktop:w-auto laptop:w-auto`
        }
      >
        <div className={isSearchActive ? "flex justify-between max-w-[1830px] desktop:mx-auto mx-6" : ""}>
          {/* nike logo image */}
          <div className={isSearchActive ? `laptop:w-24 laptop:h-16 mobile:hidden laptop:block` : `hidden`}>
            <Link href={"/"}>
              <svg aria-hidden="true" className="pre-logo-svg w-[100%] h-[100%]" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className={isSearchActive ? "relative desktop:w-[40%] laptop:w-[45%] tablet:w-[80%] between:w-[70%] mobile:w-[65%] pr-12" : "w-28"}>
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
            ></input>

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
        </div>

        <div className="mx-6 px-28">
          {query ? (
            <div className="flex-col  ">
              <div className="w-[900px] mt-10">hi</div>
              <div className={"grid grid-cols-2 gap-5  laptop:grid-cols-5 mt-10 "}>
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
      </div>
    </>
  );
}
