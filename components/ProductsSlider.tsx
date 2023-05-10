import { dividerClasses } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface Stock {
  size: number;
  stock: number;
}
export interface Product {
  name: string;
  details: string;
  price: number;
  color: string;
  categoryId: string;
  subCategoryId: string;
  sizes: Stock[];
  brand: string;
  image: [
    {
      path: string;
      width: number;
      height: number;
    }
  ];
  _id: string;
  gender: string;
}
export function ProductsSlider() {
  const [products, setProducts] = useState<Product[]>([]);
  const limit: number = 9;
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=&categoryId=&limit=${limit}`).then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <div className="snap-x mx-auto snap-mandatory flex w-[100%] overflow-scroll my-20 gap-3 ">
        {products.map((products: Product) => (
          <div className="snap-start lg:w-[33.33333%] flex-shrink-0 h-[auto] items-center pb-10  justify-center w-[75%] ">
            <Link href={`products/${products._id}`} title={products.name}>
              <figure>
                <div className="aspect-[1/1] overflow-hidden products-image">
                  <img src={products.image[0].path} alt="image" />
                </div>
                <h4>{products.name}</h4>
                <h4>${products.price}</h4>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
