import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Payment({ createNewUsers, customer, products, totalPrice }: any) {
  const [cart, setCart] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const { query } = router;
  console.log(customer, "customer id");

  useEffect(() => {
    const orders = localStorage.getItem("orders");
    if (orders) {
    }
  }, []);

  async function handlePayment() {
    await createNewUsers();
  }
  useEffect(() => {
    if (cvv && cart && date) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [cart, cvv, date]);
  console.log(products);
  useEffect(() => {
    if (customer) {
      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, { customer, products, totalPrice }).then((res) => {




        console.log(res, "this is orders id");
        setOrderId(res.data);
        // const orderId = customer;
        console.log(orderId, "orderid");

        const orders = localStorage.getItem("orders");
        if (orders) {
          const ordersItems = JSON.parse(orders);
          ordersItems.push(orderId);
          localStorage.setItem("orders", JSON.stringify(ordersItems));
        } else {
          localStorage.setItem("orders", JSON.stringify([orderId]));
        }
        localStorage.removeItem("basket");
        router.push("/user");
      });
    }
  }, [customer]);

  return (
    <div className="">
      <div className="border border-solid border-black p-8 rounded-xl mt-4">
        <div>Add Card</div>
        <div className="md:flex gap-8 ">
          <div className="md:w-full max-w-[95%] mt-4">
            <input
              type="tel"
              placeholder="Card Number"
              value={cart}
              onChange={(e) => setCart(e.target.value)}
              className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none"
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                const input = e.currentTarget;
                input.value = input.value.replace(/\D/g, "");
                if (input.value.length > 13) {
                  input.value = input.value.slice(0, 13);
                }
              }}
            />
          </div>
          <div className="md:flex gap-8">
            <div className="md:w-full max-w-[95%] mt-4">
              <input
                type="tel"
                placeholder="MM/YY"
                className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const input = e.currentTarget;
                  input.value = input.value.replace(/\D/g, "");
                  // Truncate to 4 characters
                  if (input.value.length > 4) {
                    input.value = input.value.slice(0, 4);
                  }
                }}
              />
            </div>
            <div className="md:w-full max-w-[95%] mt-4">
              <input
                type="text"
                placeholder="CVV"
                className="w-full py-4 pl-4 border border-black rounded-xl focus:outline-none"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                  const input = e.currentTarget;
                  input.value = input.value.replace(/\D/g, "");
                  // Truncate to 4 characters
                  if (input.value.length > 4) {
                    input.value = input.value.slice(0, 4);
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div className="text-red-600 text-sm">Sanamj : Turshilt tul jinhene banknii medeelel oruulahiig horiglono</div>
        </div>
      </div>
      {show ? (
        <div className="flex justify-between">
          <div></div>
          <div>
            <button className="bg-black px-4 py-2 rounded-full text-white  text-center mt-4" onClick={handlePayment}>
              Continue To order reviev
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <div></div>
          <div>
            <button className="bg-gray-200 px-4 py-2 rounded-full  text-center mt-4">Continue To order reviev</button>
          </div>
        </div>
      )}
    </div>
  );
}
