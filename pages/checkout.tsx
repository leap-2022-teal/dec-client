import { AddressSelector } from "@/components/AddressSelector";
import { Payment } from "@/components/Payment";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
}
interface PropType {
  products: Product;
  id: string;
  quantity: number;
  size: number;
}
export default function Checkout() {
  const [basket, setBasket] = useState<PropType[]>([]);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const [save, setSave] = useState(false);
  const [customer, setCustomer] = useState("");
  const [totalPrice, setTotalPrice] = useState<number>();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, { headers: { Authorization: token ? `Bearer ${token}` : "" } })
        .then((res: any) => {
          setUser(res.data);
          setEmail(res.data.email);
          setName(res.data.name);
          setPhoneNumber(res.data.phoneNumber);
          setLocation(res.data.location);
          // setCustomer(res.data._id);
        })
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

  useEffect(() => {
    if (name && email && phoneNumber && state && location) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [name, email, phoneNumber, state, location]);

  function createNewUsers() {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { name, email, phoneNumber, state, location }).then((res) => {
      const { status } = res;
      if (status === 200) {
        setCustomer(res.data);
      }
    });
  }
  function updatedUser() {
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, { name, email, phoneNumber, state, location }).then((res) => setCustomer(res.data));
  }

  function handleSave() {
    setSave(true);
  }

  function edit() {
    setSave(false);
  }

  function totalAmount() {
    let totalAmount = 0;

    basket.forEach((product: any) => {
      const productAmount = product.products.price * product.quantity;
      totalAmount += productAmount;
    });
    // setTotalPrice(totalAmount);
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
          {basket ? (
            basket.map((product) => (
              <div className=" laptop:w-[300px] mt-4" key={product.id}>
                <div className="flex gap-5">
                  <div className="">
                    <img src={product.products.image[0].path} alt="" width={100} />
                  </div>
                  <div>
                    <div>
                      {" "}
                      <h2 className="text-lg">{product.products.name}</h2>
                    </div>
                    <div>
                      <div>{basket.map((basketItems: any) => (product.id === basketItems.id ? <div key={product.id}>size : {basketItems.size}</div> : ""))}</div>
                      <div>
                        quantity : {product.quantity} @ ${product.products.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
          {basket.length == 0 ? (
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
            <div className="flex justify-between border-solid border-2  border-black mt-4 rounded-xl p-2">
              <div>
                <div>name : {name}</div>
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
                {user ? (
                  <div className="md:w-full w-[95%] mt-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none "
                    />
                  </div>
                ) : (
                  <div className="md:w-full w-[95%] mt-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none "
                    />
                  </div>
                )}
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
                      onInput={(e: React.FormEvent<HTMLInputElement>) => {
                        const input = e.currentTarget;
                        input.value = input.value.replace(/\D/g, "");
                        if (input.value.length > 8) {
                          input.value = input.value.slice(0, 8);
                        }
                      }}
                      value={phoneNumber}
                      className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none "
                    />
                  </div>
                  {user ? (
                    <div className="md:w-full max-w-[95%] mt-4">
                      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
                    </div>
                  ) : (
                    <div className="md:w-full max-w-[95%] mt-4">
                      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none" />
                    </div>
                  )}
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
                    user ? (
                      <button className="bg-black px-4 py-2 rounded-full text-white  text-center mt-4" onClick={handleSave}>
                        Save & Continue
                      </button>
                    ) : (
                      <button className="bg-black px-4 py-2 rounded-full text-white  text-center mt-4" onClick={handleSave}>
                        Save & Continue
                      </button>
                    )
                  ) : (
                    <button className="bg-gray-200 px-4 py-2 rounded-full  text-center mt-4"> Continue</button>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="mt-2">
            <div className="text-3xl ">Payment</div>
          </div>
          {save ? (
            user ? (
              <Payment createNewUsers={updatedUser} customer={customer} products={basket} totalPrice={totalPrice} />
            ) : (
              <Payment createNewUsers={createNewUsers} customer={customer} products={basket} totalPrice={totalPrice} />
            )
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </div>
  );
}
