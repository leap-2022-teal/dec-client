import { AddressSelector } from "@/components/AddressSelector";
import { Payment } from "@/components/Payment";
import { dividerClasses } from "@mui/material";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const [save, setSave] = useState(false);
  console.log(show, "show");
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

  // function createUsers() {
  useEffect(() => {
    if (firstName && lastName && email && phoneNumber && state && location) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [firstName, lastName, email, phoneNumber, state, location]);
  function createUsers() {
    setSave(true);
    // axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { firstName, lastName, email, phoneNumber, state, location }).then((res) => {
    //   const { status } = res;
    //   if (status === 200) {
    //   }
    // });
  }
  console.log(state);
  function edit() {
    setSave(false);
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
    <div className="max-w-[1000px] mx-auto">
      <div className="text-center text-3xl text-black">Checkout</div>
      <main className="laptop:flex laptop:flex-row-reverse mt-8 gap-16">
        <aside className="laptop:max-w-[500px]">
          <div className="flex justify-between">
            <div className="text-3xl">In Your Bag</div>
            <div className="text-lg text-black underline underline-offset-1 ">
              <Link href={"/order"}>Edit</Link>
            </div>
          </div>

          {items ? (
            items.map((product) => (
              <div className=" laptop:w-[300px] mt-4" key={product._id}>
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
                      <div>
                        {basket.map((basketItems: any) => (product._id === basketItems.productId ? <div key={product._id}>size : {basketItems.size}</div> : <div key={product._id}>size : empty</div>))}
                      </div>
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
        </aside>
        <div className="laptop:w-[700px] mt-8 laptop:mt-0">
          <div className="text-left text-3xl">Shipping</div>
          {save ? (
            <div className="flex justify-between border border-solid border-2  border-black mt-4 rounded-xl p-2">
              <div>
                <div>
                  name : {firstName} {lastName}
                </div>
                <div>state : {state}</div>
                <div>address : {location}</div>
                <div>email : {email}</div>
                <div>phone number : {phoneNumber}</div>
              </div>
              <div>
                {" "}
                <button className="text-lg text-black underline underline-offset-1 " onClick={edit}>
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                {" "}
                <div className="md:flex gap-8 ">
                  <div className="md:w-full max-w-[95%] mt-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none "
                    />
                  </div>
                  <div className="md:w-full max-w-[95%] mt-4">
                    <input
                      type="text"
                      placeholder="Last Names"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none"
                    />
                  </div>
                </div>
                <AddressSelector onChange={setState} value={state} />
                <div className="mt-4 md:w-full w-[95%]">
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none"
                  />
                </div>
                <div className="md:flex gap-8 ">
                  <div className="md:w-full max-w-[95%] mt-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      pattern="[0-9]{8}"
                      required
                      value={phoneNumber}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none "
                    />
                  </div>
                  <div className="md:w-full max-w-[95%] mt-4">
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div></div>
                <div className="text-red-600 text-sm">Sanamj : Turshilt tul jinhene medeelel oruulahiig horiglono</div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div>
                  {show ? (
                    <button className="bg-black px-4 py-2 rounded-full text-white  text-center mt-4" onClick={createUsers}>
                      Save & Continue
                    </button>
                  ) : (
                    <button className="bg-gray-200 px-4 py-2 rounded-full  text-center mt-4">Save & Continue</button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-2">
            <div className="text-3xl ">Payment</div>
          </div>
          {save ? <Payment /> : <div></div>}
        </div>
      </main>
    </div>
  );
}
