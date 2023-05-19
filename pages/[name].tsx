import { Banner } from "@/components/Banner";
import { BannerSlider } from "@/components/BannerSlider";
import { Feature } from "@/components/Feature";
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
            <div key={category._id}>
              <h2 className="text-left text-2xl">{name}</h2>
              <Banner position="start" categoryId={category._id} key={category._id} />
              <h2 className="text-left text-2xl mt-20">Popular Right Now</h2>
              <ProductsSlider categoryId={category._id} />
              <h2 className="text-left text-2xl mt-20">Trending</h2>
              <Feature position="feature" categoryId={category._id} name="The Latest from Nike Basketball" />
              {name === "Kids" ? (
                <div className="mt-20">
                  <h2 className="text-2xl text-left ">Best of Air Max</h2>
                  <Banner position="center" categoryId={category._id} />
                </div>
              ) : null}

              <h2 className="text-left text-2xl mt-28">Icons for Any Season</h2>
              <BannerSlider categoryId="" position="end" />
            </div>
          );
        }
      })}
    </>
  );
}
