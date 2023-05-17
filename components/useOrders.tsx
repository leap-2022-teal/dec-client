import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export function useOrders() {
  const [bag, setBag] = useState([]);

  function createNewProduct(products: any) {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        products,
      })
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          console.log(res, "jj");
        }
      });
  }
  //   console.log(bag, "hi");

  return { bag, createNewProduct };
}
