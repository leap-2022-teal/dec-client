import { Banner } from "@/components/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`).then((res) => setCategories(res.data));
  }, []);
  return (
    <div>
      <Banner categoryId={""} />
    </div>
  );
}
