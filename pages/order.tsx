import { ExampleContext } from "@/layout/mainLayout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Interests } from "@mui/icons-material";
import NumberSelector from "@/components/ReactSelect";

export default function Order() {
  const basket = useContext(ExampleContext);
  const [items, setItems] = useState<any[]>([]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    // basket.forEach((product: any) => {
    //   axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${product.productId}`).then((res) => {
    //     setItems((prevData): any => [...prevData, res.data]);
    //   });
    // });

    const fetchProductDetails = async () => {
      const itemDetails = await Promise.all(basket.map((product: any) => axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${product.productId}`).then((res) => res.data)));
      setItems(itemDetails);
    };

    if (basket.length > 0) {
      fetchProductDetails();
    }
  }, [basket]);

  function deleteItem(productId: any) {
    // Remove item from local storage
    // localStorage.removeItem(productId)
    const updateBasket = basket.filter((product: any) => product.productId !== productId);
    localStorage.setItem("basket", JSON.stringify(updateBasket));

    // Remove item from items state
    setItems(items.filter((product: any) => product._id !== productId));
  }

  return (
    <div className="container">
      <main className="grid grid-cols-1 laptop:grid-cols-2 gap-5 max-w-[1100px] mx-auto mt-8">
        <div>
          <h1>Bag</h1>
          <div>
            {items
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((product: any) => (
                <div key={product.id} className="flex gap-5 mt-4 justify-between">
                  <div className="flex gap-5">
                    <div>
                      <img src={product.image[0].path} alt="" width={150} />
                    </div>
                    <div>
                      <h3 className="text-sm">{product.name}</h3>
                      <NumberSelector />
                      <button onClick={() => deleteItem(product._id)}>
                        <DeleteIcon className=" text-red-600" />
                      </button>
                    </div>
                  </div>
                  <div>${product.price}</div>
                </div>
              ))}
          </div>
        </div>
        <div>checkout</div>
      </main>
    </div>
  );
}
