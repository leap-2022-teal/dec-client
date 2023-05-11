import { Banner } from "@/components/Banner";
import { Feature } from "@/components/Feature";
import { ProductsSlider } from "@/components/ProductsSlider";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <Banner categoryId="" position="start" />
      <h2 className="text-left"> Popular Right Now</h2>
      <ProductsSlider />
      <Banner categoryId="" position="center" />
      <Feature categoryId="" position="feature" name="Nike Basketball" />
      <ProductsSlider />
    </div>
  );
}
