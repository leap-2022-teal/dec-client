import axios from "axios";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
export default function User() {
  const [user, setUser] = useState<any>();
  const [orderReview, setOrderReview] = useState<any>([]);
  const router = useRouter();
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
    if (user?._id) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders?customer=${user?._id}`).then((res) => setOrderReview(res.data));
    }
  }, [user]);
  console.log(orderReview);
  function handleLogOut() {
    localStorage.removeItem("loginToken");
    router.push("/");
  }
  //   console.log(order, "order");
  return (
    <div className="">
      {user ? (
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="md:w-[100px] bg-gray-500 md:h-[100px] border rounded-full"></div>
              <div className="items-center text-3xl"> {user.name}</div>
            </div>

            <div onClick={handleLogOut}>
              <button className="border rounded-full bg-black p-2 text-white">Log out</button>
            </div>
          </div>
          <div>
            {orderReview ? (
              <div>
                {orderReview.map((orders: any) => (
                  <div key={orders._id} className="mt-8">
                    {orders.orderDate}
                    <div className="mt-4">
                      {orders.products.map((item: any) => (
                        <div key={item._id} className="flex gap-5">
                          <div className="w-[100px]">
                            <img src={item.products.image[0].path} alt="" />
                          </div>
                          <div>
                            {item.products.name}
                            <div className="flex gap-5">
                              <div>size : {item.size}</div>
                              <div>quantity : {item.quantity}</div>
                            </div>
                            <div className="mt-12">amount : {item.quantity * item.products.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
