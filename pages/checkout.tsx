import { Payment } from "@/components/Payment";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
export default function Checkout() {
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
      <div className="text-center text-3xl text-black">Checkout</div>

      <main className="laptop:flex gap-20 max-w-[800px]  mx-auto mt-8">
        <div>
          <form>
            <div>
              {" "}
              <div className="text-left text-3xl">Shipping</div>
              <div className="flex gap-8 mt-6">
                <div className="">
                  <input type="text" placeholder="First Name" className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none " />
                </div>
                <div>
                  <input type="text" placeholder="Last Names" className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
                </div>
              </div>
              <div></div>
              <div className="mt-4 ">
                <input type="text" placeholder="Address" className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
              </div>
              <div className="flex gap-8 mt-4">
                <div className="">
                  <input type="text" placeholder="Phone Number" className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none " />
                </div>
                <div>
                  <input type="text" placeholder="Email" className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
                </div>
              </div>
            </div>
          </form>

          <button className="bg-gray-200 px-4 py-2 rounded-full  text-center mt-4">Save & Continue</button>
          <div className="mt-8">
            <div className="text-3xl ">Payment</div>
          </div>
          <Payment />
        </div>

        <aside>
          <div className="flex justify-between">
            <div className="text-3xl">In Your Bag</div>
            <div className="text-lg text-black underline underline-offset-1 ">
              <Link href={"/order"}>Edit</Link>
            </div>
          </div>
          {items.length == 0 ? (
            <div className="laptop:w-[300px]">
              <div className="flex justify-between ">
                <div>Total Shoes:</div>
                <div> 0</div>
              </div>
              <div className="flex justify-between ">
                <div>Total Amount:</div>
                <div> $0</div>
              </div>
            </div>
          ) : (
            <div className=" text-lg">
              <div className="flex justify-between mt-2">
                <div>Total Shoes:</div>
                <div> {totalQuantity()}</div>
              </div>
              <div className="flex justify-between mt-2">
                <div>Total Amount:</div>
                <div> ${totalAmount()}</div>
              </div>
            </div>
          )}

          {items ? (
            items.map((product) => (
              <div className=" laptop:max-w-[300px] mt-4" key={product._id}>
                <div className="flex gap-5">
                  <div className="">
                    <img src={product.image[0].path} alt="" width={100} />
                  </div>
                  <div>
                    <div>
                      {" "}
                      <h2 className="text-lg">{product.name}</h2>
                    </div>
                    <div>
                      <div>{basket.map((basketItems: any) => (product._id === basketItems.productId ? <div>size : {basketItems.size}</div> : <div>size : empty</div>))}</div>
                      <div>
                        quantity : {product.quantity} @ ${product.price}
                      </div>
                      <div>${product.quantity * product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </aside>
      </main>
    </div>
  );
}
