import axios from "axios";
import { useEffect, useState } from "react";

export function useOrders() {
  const [bag, setBag] = useState([]);

  function createNewProduct(products: any) {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      products,
    });
  }

  return { bag, createNewProduct };
}
