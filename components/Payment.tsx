import { useEffect, useState } from "react";

export function Payment() {
  const [payment, setPayment] = useState("");
  console.log(payment, "payment");
  // useEffect(() => {
  //   if (payment === "q-pay") {
  //     QPay();
  //   } else if (payment === "cart") {
  //     Cart();
  //   }
  // }, [payment]);

  return (
    <div className="">
      <form className="mt-4" name="payment">
        <div>
          <input type="radio" name="payment" value="q-pay" className="bg-black" onChange={(e) => setPayment(e.target.value)} />
          <label htmlFor="q-pay" className="ml-2">
            Q-Pay
          </label>
        </div>
        <div>
          <input type="radio" name="payment" value="cart" onChange={(e) => setPayment(e.target.value)} />
          <label htmlFor="dansaar" className="ml-2">
            Cart
          </label>
        </div>
      </form>
      {payment === "q-pay" && (
        <div className="border border-solid border-black p-8 rounded-xl mt-4">
          <div className="text-lg">Q-Pay</div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      )}
      {payment === "cart" && (
        <div className="border border-solid border-black p-8 rounded-xl mt-4">
          <div>Add Card</div>
          <div className="md:flex gap-8 ">
            <div className="md:w-full max-w-[95%] mt-4">
              <input
                type="tel"
                placeholder="Card Number"
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
      )}
      <div className="flex justify-between">
        <div></div>
        <div>
          <button className="bg-black px-4 py-2 rounded-full text-white  text-center mt-4">Continue To order reviev</button>
        </div>
      </div>
    </div>
  );
}
