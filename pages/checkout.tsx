import { ExampleContext } from "@/layout/mainLayout";
import { useContext } from "react";

export default function Checkout() {
  const basket = useContext(ExampleContext);
  return (
    <div className="max-w-[1000px] mx-auto ">
      <div className="text-center text-xl">Checkout</div>

      <div className="flex">
        <div>
          <div className="text-left text-xl3">Shipping</div>
          <div className="flex">
            <div>
              <input type="text" placeholder="First Name" className="w-full" />
            </div>
            <div>
              <input type="text" placeholder="Last Names" />
            </div>
          </div>
          <div className="mt-4">
            <input type="text" placeholder="address" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
