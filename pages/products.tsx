import axios from "axios";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=`).then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <div className="flex gap-10">
        {products.map((products: any) => {
          return (
            <>
              <div className="">
                <div className="w-[33.33333333333%%]">
                  <img src={products.image.path} alt="image" />
                  <div>{products.name}</div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
