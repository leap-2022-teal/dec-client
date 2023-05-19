import { Banner } from "@/components/Banner";
import { Feature } from "@/components/Feature";
import Menu from "@/components/menu";
import NavBar from "@/components/navbar/Navbar";
import { ProductsSlider } from "@/components/ProductsSlider";
import SubBanner from "@/components/subBanner";
export default function Home() {
  return (
    <div>
      <Banner categoryId="" position="start" />
      <h2 className="text-left text-2xl mt-20"> Popular Right Now</h2>
      <ProductsSlider categoryId="" />
      <h2 className="text-left text-2xl mt-20">Trending</h2>
      <Feature categoryId="" position="feature" name="Nike Basketball" />
      <h2 className="text-left text-2xl mt-20">Air Force</h2>
      <Banner categoryId="" position="center" />
      <h2 className="text-left text-2xl mt-20">Sport Essentials</h2>
      <Feature categoryId="" position="feature1" name="Nike Basketball" />
    </div>
  );
}
