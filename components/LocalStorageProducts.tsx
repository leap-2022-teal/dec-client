import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  quantity: number;
  productId: string;
  size: number;
}

export function useLocalStorage() {
  const [bag, setBag] = useState<Product[]>([]);

  function createNewProduct(product: Product) {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
      product,
    });
  }

  return { bag, createNewProduct };
}
