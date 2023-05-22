import { SideBar } from "@/components/Sidebar";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState<any>([]);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const filter = localStorage.getItem("filter");
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
  return (
    <div className="relative">
      <div
        className="text-end"
        onClick={() => {
          setShowSidebar(!showSidebar);
          localStorage.setItem("sidebarFilter", (!showSidebar).toString());
        }}
      >
        Filter
      </div>
      <div
        className={
          showSidebar ? `transition-all duration-500 ease-in-out sidebar h-[1000px] overflow-y-auto w-[260px]  absolute ` : ` transition-all duration-700 ease-in-out ml-[-500px] absolute invisible`
        }
      >
        <SideBar getProduct={filterProduct} categoryId={""} />
      </div>
      <section className={showSidebar ? `ml-[300px] mt-10 transition-all duration-500 ease-in-out` : `mt-10 transition-all duration-500 ease-in-out`}>
        <div className="text-left grid grid-cols-2 gap-4 laptop:grid-cols-3 ">
          {products.map((products: any) => {
            return (
              <>
                <Link href={`/products/${products._id}`} key={products}>
                  <div className=" d-inline-block  ">
                    <div className="products-image">
                      <div className="aspect-[1/1] relative overflow-hidden">
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
