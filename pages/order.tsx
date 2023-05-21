import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { NumberSelector } from "@/components/ReactSelect";
import { SizeSelector } from "@/components/SizeSelector";
import Link from "next/link";
// import { createContext } from "vm";
export interface Stock {
  size: number;
  stock: number;
}
export interface Product {
  name: string;
  details: string;
  price: number;
  color: string;
  categoryId: string;
  subCategoryId: string;
  sizes: Stock[];
  brand: string;
  image: [
    {
      path: string;
      width: number;
      height: number;
    }
  ];
  _id: string;
  quantity: number;
}
export default function Order() {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(JSON.parse(basketItems));
    }
  }, []);
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const itemDetails = await Promise.all(
        basket.map((product: any) =>
          axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${product.productId}`).then((res) => {
            const singleItem = res.data;
            singleItem.quantity = product.quantity;
            return singleItem;
          })
        )
      );
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
    setBasket(updateBasket);
    localStorage.setItem("basket", JSON.stringify(updateBasket));

    // Remove item from items state
    setItems(items.filter((product: any) => product._id !== productId));
  }
  function changeSize(e: any) {
    const updatedBasket = basket.map((bag: any) => {
      if (bag.productId === e.productId) {
        bag.size = e.size;
      }
      return bag;
    });
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  }
  console.log(items, "hi");
  function changeQuantity(e: any) {
    const updatedBasket: any = basket.map((bag: any) => {
      if (bag.productId === e.productId) {
        bag.quantity = e.quantity;
      }
      return bag;
    });
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    const updatedItems = items.map((product: any) => {
      if (product._id === e.productId) {
        product.quantity = e.quantity;
      }
      return product;
    });
    setItems(updatedItems);
  }

  function totalAmount() {
    let totalAmount = 0;

    items.forEach((product) => {
      const productAmount = product.price * product.quantity;
      totalAmount += productAmount;
    });

    return totalAmount;
  }
  function totalQuantity() {
    let totalQuantity = 0;

    items.forEach((product) => {
      totalQuantity += product.quantity;
    });

    return totalQuantity;
  }

  return (
    <div className="">
      <main className=" laptop:flex gap-10 max-w-[1300px] mx-auto mt-8">
        <div className="laptop:w-[600px]">
          <div className="laptop:text-left text-center text-xl ">Bag</div>
          <div>
            {items.length == 0 ? (
              <div className="text-base ">There are no items in your bag.</div>
            ) : (
              items
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((product: Product) => (
                  <div key={product._id} className="flex gap-5 mt-4 justify-between">
                    <div className="flex gap-5 ">
                      <div className="aspect-[1/1] ">
                        <img src={product.image[0].path} alt="hi" width={150} height={150} />
                      </div>
                      <div>
                        <h3 className="text-base ">{product.name}</h3>
                        <div
                          className="flex gap-5 mot-italic font-sans"
                          style={{
                            color: "rgb(117, 117, 117)",
                          }}
                        >
                          <div className="flex sm:mt-4 mt-2 ">
                            <label htmlFor="Quantity">Quantity</label>

                            {product.quantity ? <NumberSelector defaultValue={product.quantity} onChange={changeQuantity} id={product._id} /> : ""}
                          </div>
                          <div className="flex sm:mt-4 mt-2">
                            <label htmlFor="Size">Size</label>
                            {basket.map((item: any) =>
                              product._id === item.productId ? (
                                <SizeSelector key={item.productId} onChange={changeSize} id={item.productId} quantity={item.quantity} defaultValue={item.size} sizes={product.sizes} />
                              ) : (
                                ""
                              )
                            )}
                          </div>
                        </div>

                        <button onClick={() => deleteItem(product._id)} className="mt-2">
                          {/* <DeleteIcon className="mt-2" /> */}
                          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                            <path
                              stroke="currentColor"
                              stroke-miterlimit="10"
                              stroke-width="1.5"
                              d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>${product.price * product.quantity}</div>
                  </div>
                ))
            )}
          </div>
        </div>
        {items.length == 0 ? (
          <div className="laptop:w-[300px]">
            <div className="text-xl">Summary</div>

            <div className="flex justify-between mt-4">
              <div>Total Shoes:</div>
              <div> 0</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Total Amount:</div>
              <div> $0</div>
            </div>
            <button className="bg-zinc-100 text-zinc-300 rounded-full p-4 w-full mt-8"> Checkout</button>
          </div>
        ) : (
          <div className="laptop:w-[300px]">
            <div className="text-xl">Summary</div>
            <div className="flex justify-between mt-4">
              <div>Total Shoes:</div>
              <div> {totalQuantity()}</div>
            </div>
            <div className="flex justify-between mt-4">
              <div>Total Amount:</div>
              <div> ${totalAmount()}</div>
            </div>
            <Link href={"/checkout"}>
              <button className="bg-black text-white rounded-full p-4 w-full mt-8">Checkout</button>
            </Link>{" "}
          </div>
        )}
      </main>
    </div>
  );
}
