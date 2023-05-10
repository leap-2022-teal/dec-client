import { Banner } from "@/components/Banner";
import { ProductsSlider } from "@/components/ProductsSlider";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export interface Categories {
  name: string;
  _id: string;
  parentId?: string;
}
export default function Pages() {
  const router = useRouter();
  const { name } = router.query;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`).then((res) => setCategories(res.data));
  }, []);
  const filteredCategories = categories.filter((category: Categories) => {
    if (!category.parentId) {
      return category;
    }
  });
  console.log("hi", filteredCategories);
  return (
    <>
      {filteredCategories.map((category: Categories) => {
        if (category.name === name) {
          return (
            <div>
              <h2 className="text-left">{name}</h2>
              <Banner position="start" categoryId={category._id} key={category._id} />
              <ProductsSlider />
              <Banner position="center" categoryId={category._id} />
            </div>
          );
        }
      })}
    </>
  );
}
