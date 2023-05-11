import { SideBar } from "@/components/Sidebar";
import MainLayout from "@/layout/mainLayout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=`).then((res) => setProducts(res.data));
  }, []);
  return (
    <MainLayout>
      <div className="flex ">
        <div className="ml-15 w-80">
          <SideBar />
        </div>
        <section className="d-block mt-10 ml-20">
          <div className="text-left grid grid-cols-2 gap-4 laptop:grid-cols-3 ">
            {products.map((products: any) => {
              return (
                <>
                  <Link href={`/products/${products._id}`}>
                    <div className=" d-inline-block  ">
                      <div className="products-image">
                        <div className="aspect-[1/1] relative overflow-hidden">
                          <img src={products.image[0].path} alt="image" />
                        </div>
                        <div>
                          <h1 className="text-2xl">{products.name} </h1>
                          <h3>${products.price}</h3>
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
    </MainLayout>
  );
}
