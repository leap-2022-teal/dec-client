import axios from "axios";
import { useEffect, useState } from "react";
interface PropType {
  searchedQuery: any;
  limit: number;
}

export function useProducts({ searchedQuery, limit }: PropType) {
  const [list, setList] = useState([]);

  function loadProducts(searchedQuery = "") {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?searchQuery=${searchedQuery}&categoryId=&limit=${limit}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setList(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    loadProducts(searchedQuery);
  }, [searchedQuery]);

  return list;
}
