import MyModal from "@/components/Dialog";
import { SideBar } from "@/components/Sidebar";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    console.log(e, "parent");
    setProducts(e);
  }

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=`).then((res) => setProducts(res.data));
  }, []);
  console.log(bottomSideBar, showSidebar);
  return (
    <div className="">
      <div
        className="text-end"
        onClick={() => {
          setShowSidebar(!showSidebar);
          localStorage.setItem("sidebarFilter", (!showSidebar).toString());
        }}
      >
        Filter
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => {
            setBottomSideBar(!bottomSideBar);
          }}
          className={`absolute desktop:hidden laptop:hidden tablet:block between:block z-50 ${bottomSideBar ? "hidden top-5 " : ""}`}
        >
          {bottomSideBar ? "X" : "Filter"}
        </button>
      </div>

      <div>
        <div
          className={`hidden md:block ${
            bottomSideBar
              ? ` tablet:block between:block mobile:block transition-all duration-700 ease-in-out sidebar overflow-y-auto absolute  bg-white  top-0 w-full h-full `
              : " transition-all duration-700 ease-in-out absolute invisible mt-[1000px]"
          }`}
        >
          {bottomSideBar ? (
            <div className="mt-10 mr-10">
              <SideBar getProduct={filterProduct} categoryId={""} />
            </div>
          ) : (
            <div
              className={
                showSidebar
                  ? `transition-all duration-500 ease-in-out sidebar h-[1000px] overflow-y-auto w-[260px]  absolute `
                  : ` transition-all duration-700 ease-in-out ml-[-500px] absolute invisible `
              }
            >
              <SideBar getProduct={filterProduct} categoryId={""} />
            </div>
          )}
        </div>
      </div>

      <section
        className={
          showSidebar
            ? `laptop:ml-[300px] desktop:ml-[300px] mt-10 transition-all duration-500 ease-in-out`
            : `mt-10 transition-all duration-500 ease-in-out` && bottomSideBar
            ? `hidden`
            : `mt-10 transition-all duration-500 ease-in-out`
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
                        <img src={products.image[0].path} alt="image" />
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
