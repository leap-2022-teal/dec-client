import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Pages() {
  const router = useRouter();
  const { name } = router.query;
  const [categories, setCategories] = useState([]);
  console.log(name);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=`).then((res) => setCategories(res.data));
  }, []);
  console.log(categories);
  const filteredCategories = categories.filter((category: any) => {
    if (!category.parentId) {
      return category;
    }
  });
  console.log(filteredCategories);
}
