import { SideBar } from "@/components/Sidebar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { categoryId } = router.query;
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    if (categoryId) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=${categoryId}&limit=`).then((res) => setProducts(res.data));
    } else {
      console.log("aldaa");
    }
  }, [categoryId]);
  console.log(products);
  function filterProduct(e: any) {
    console.log(e, "parent");
    setProducts(e);
  }
  return (
    <div className="flex ">
      <div className="ml-15 w-80">
        <SideBar
          getProduct={function (e: any): void {
            // throw new Error("Function not implemented.");
          }}
        />
      </div>
      <section className="d-block mt-10 ml-20">
        <div className="text-left grid grid-cols-2 gap-4 laptop:grid-cols-3 ">
          {products.map((products: any) => (
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
          ))}
        </div>
      </section>
    </div>
  );
}
