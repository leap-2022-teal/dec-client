import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { NumberSelector } from "@/components/ReactSelect";
import { SizeSelector } from "@/components/SizeSelector";
import Link from "next/link";
// import { createContext } from "vm";
export interface Stock {
  size: number;
  stock: number;
}
export interface Product {
  id: string;
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
interface PropType {
  products: Product;
  id: string;
  quantity: number;
  size: number;
}
export default function Order() {
  const [basket, setBasket] = useState<PropType[]>([]);
  // const [items, setItems] = useState<Product[]>([]);
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, { headers: { Authorization: token ? `Bearer ${token}` : "" } })
        .then((res: any) => setUser(res.data))
        .catch((res) => {
          const { status } = res;
          if (status === 403) {
            setUser(null);
          }
        });
    }
  }, []);
  useEffect(() => {
    const basketItems = localStorage.getItem("basket");
    if (basketItems) {
      setBasket(JSON.parse(basketItems));
    }
  }, []);
  // console.log(basket, "basket");

  function deleteItem(productId: any) {
    const updateBasket = basket.filter((product: any) => product.id !== productId);
    setBasket(updateBasket);
    localStorage.setItem("basket", JSON.stringify(updateBasket));
    setBasket(basket.filter((product: any) => product._id !== productId));
  }
  function changeSize(e: any) {
    const updatedBasket = basket.map((bag: any) => {
      if (bag.id === e.id) {
        bag.size = e.size;
      }
      return bag;
    });
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  }
  function changeQuantity(e: any) {
    console.log(e, "its e");
    const updatedBasket: any = basket.map((bag: any) => {
      if (bag.id === e.id) {
        bag.quantity = e.quantity;
      }
      return bag;
    });
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    const updatedItems: any = basket.map((product: any) => {
      if (product._id === e.productId) {
        product.quantity = e.quantity;
      }
      return product;
    });
    setBasket(updatedItems);
  }

  function totalAmount() {
    let totalAmount = 0;

    basket.forEach((product: any) => {
      const productAmount = product.products.price * product.quantity;
      totalAmount += productAmount;
    });

    return totalAmount;
  }
  function totalQuantity() {
    let totalQuantity = 0;

    basket.forEach((product: any) => {
      totalQuantity += product.quantity;
    });

    return totalQuantity;
  }

  return (
    <div className="">
      <main className=" laptop:flex gap-10 max-w-[1000px] mx-auto mt-8">
        <div className="laptop:w-[600px] mt-4">
          <div className="laptop:text-left text-center text-xl ">Bag</div>
          <div>
            {basket.length == 0 ? (
              <div className="text-base ">There are no items in your bag.</div>
            ) : (
              basket.map((product: PropType) => (
                <div key={product.id} className="flex gap-5 mt-4 justify-between">
                  <div className="flex gap-5 ">
                    <div className="aspect-[1/1] ">
                      <img src={product.products.image[0].path} alt="hi" width={150} height={150} />
                    </div>
                    <div>
                      <h3 className="text-base ">{product.products.name}</h3>
                      <div
                        className="flex gap-5 mot-italic font-sans"
                        style={{
                          color: "rgb(117, 117, 117)",
                        }}
                      >
                        <div className="flex sm:mt-4 mt-2 ">
                          <label htmlFor="Quantity">Quantity</label>

                          {product.quantity ? <NumberSelector defaultValue={product.quantity} onChange={changeQuantity} id={product.id} /> : ""}
                        </div>
                        <div className="flex sm:mt-4 mt-2">
                          <label htmlFor="Size">Size</label>
                          {basket.map((item: any) =>
                            product.id === item.id ? (
                              <div key={item.id}>
                                <SizeSelector key={item.productId} onChange={changeSize} id={item.id} quantity={item.quantity} defaultValue={item.size} sizes={product.products.sizes} />
                              </div>
                            ) : (
                              ""
                            )
                          )}
                        </div>
                      </div>

                      <button onClick={() => deleteItem(product.id)} className="mt-2">
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
                  <div>${product.products.price}</div>
                </div>
              ))
            )}
          </div>
        </div>
        {basket.length == 0 ? (
          <div className="laptop:w-[300px] mt-">
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
          <div className="laptop:w-[300px] mt-4">
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
              <button className="bg-black text-white rounded-full py-4 w-full mt-8">Checkout</button>
            </Link>{" "}
          </div>
        )}
      </main>
    </div>
  );
}
