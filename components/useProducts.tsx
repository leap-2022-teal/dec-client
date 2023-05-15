import axios from "axios";
import { useEffect, useState } from "react";
interface PropType {
  searchedQuery: any;
  categoryId: string;
}

export function useProducts({ searchedQuery, categoryId }: PropType) {
  const [list, setList] = useState([]);

  function loadProducts(searchedQuery = "", categoryId = "") {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=${searchedQuery}&categoryId=${categoryId}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts(searchedQuery, categoryId);
  }, [searchedQuery, categoryId]);

  return list;
}
