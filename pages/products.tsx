import { SideBar } from "@/components/Sidebar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface PropType {
  categoryId?: string | undefined;
}

export default function AllProducts({ categoryId }: PropType) {
  const [products, setProducts] = useState<any>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [bottomSideBar, setBottomSideBar] = useState(false);

  useEffect(() => {
    const filter = localStorage.getItem("sidebarFilter");
    var isTrueSet = filter === "true";
    setShowSidebar(isTrueSet);
  }, [showSidebar]);

  function filterProduct(e: any) {
    setProducts(e);
  }
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <div className="">
      <div className="flex justify-end mt-5">
        <button
          onClick={() => {
            setShowSidebar(!showSidebar);
            localStorage.setItem("sidebarFilter", (!showSidebar).toString());
          }}
          className="absolute hidden desktop:block laptop:block"
        >
          {showSidebar ? "Hide filter" : "Show filter"}
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => {
            setBottomSideBar(!bottomSideBar);
          }}
          className={`absolute desktop:hidden laptop:hidden tablet:block mobile:block  between:block z-50 border border-solid border-gray-300   ${
            bottomSideBar ? "rounded-full hidden top-5 bg-black text-white h-[40px] w-[40px] " : "px-8 rounded-xl hover:border-black "
          }`}
        >
          {bottomSideBar ? "X" : "Filter"}
        </button>
      </div>

      <div>
        <div
          className={`mobile:hidden desktop:block laptop:block ${
            showSidebar ? `transition-all duration-500 ease-in-out sidebar h-[1000px] overflow-y-auto w-[260px]  absolute` : `transition-all duration-700 ease-in-out ml-[-500px] absolute invisible`
          }`}
        >
          <SideBar getProduct={filterProduct} />
        </div>

        <div
          className={`desktop:hidden laptop:hidden ${
            bottomSideBar
              ? `tablet:block between:block mobile:block transition-all duration-00 ease-in-out sidebar overflow-y-auto absolute bg-white top-0 w-full h-full`
              : "transition-all duration-700 ease-in-out absolute invisible mt-[1000px]"
          }`}
        >
          <SideBar getProduct={filterProduct} />
        </div>
      </div>

      <section
        className={
          showSidebar
            ? `laptop:ml-[300px] desktop:ml-[300px] mt-10 transition-all duration-500 ease-in-out`
            : `mt-10 transition-all duration-500 ease-in-out` && bottomSideBar
            ? `hidden `
            : `mt-10 transition-all duration-500 ease-in-out `
        }
      >
        <div className="text-left grid grid-cols-2 gap-4 laptop:grid-cols-3 mobile:grid-cols-2 ">
          {products.map((products: any) => {
            return (
              <>
                <Link href={`/products/${products._id}`} key={products}>
                  <div className=" d-inline-block  ">
                    <div className="products-image">
                      <div className="aspect-[1/1] overflow-hidden">
                        <img src={products.image[0]?.path} alt="image" />
                      </div>
                      <div>
                        <h1 className="text-2xl mt-2">{products.name} </h1>
                        <h3 className="mt-1">${products.price}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
