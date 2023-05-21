import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PropType {
  getProduct: (e: any) => void;
}

export function SideBar({ getProduct }: PropType) {
  const [list, setList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [gender, setGender] = useState<any[]>([]);
  const [color, setColor] = useState<any[]>([]);
  const [size, setSizes] = useState<any[]>([]);
  const [price, setPrices] = useState<any[]>([]);

  const genderOptions = ["Men", "Women"];
  const colors = [
    { colorClass: "bg-purple-500", colorName: "Purple" },
    { colorClass: "bg-slate-950 ", colorName: "Black" },
    { colorClass: " bg-red-500 ", colorName: "Red" },
    { colorClass: " bg-orange-500", colorName: "Orange" },
    { colorClass: " bg-blue-500 ", colorName: "Blue" },
    { colorClass: " bg-yellow-800", colorName: "Brown" },
    { colorClass: "bg-yellow-300 ", colorName: "Yellow" },
    { colorClass: "bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-40% to-emerald-500 to-30%   ", colorName: "Multi-Color" },
    { colorClass: " border-solid border  border-gray-200 bg-white-500  ", colorName: "White" },
    { colorClass: " bg-gray-500 ", colorName: "Grey" },
    { colorClass: " bg-pink-500  ", colorName: "Pink" },
    { colorClass: " bg-green-600  ", colorName: "Green" },
  ];

  const sizes = [6, 7, 8, 9, 10, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  const prices = ["$0 - $25", "$25 - $50", "$50 - $100", "Over $150"];

  useEffect(() => {
    if (filteredProducts && typeof getProduct === "function") {
      getProduct(filteredProducts);
    }
  }, [filteredProducts]);

  useEffect(() => {
    // const queryString = "color=" + color.join("&color=") + "&size=" + size.join("&size=") + "&price=" + price.join("&price=");
    const queryString = `color=${color.join("&color=")}&size=${size.join("&size=")}&price=${price.join("&price=")}`;
    console.log(queryString);
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryString}`).then((res) => {
      const { data, status } = res;
      if (status === 200) {
        setFilteredProducts(data);
      } else {
        alert(`Aldaa garlaa: ${status}`);
      }
    });
  }, [gender, color, size, price]);

  function handleGender(event: any) {
    const selectedGender = event.target.name;
    if (event.target.checked) {
      setGender([...gender, selectedGender]);
    } else {
      const updatedGender = gender.filter((e) => e !== selectedGender);
      setGender(updatedGender);
    }
  }

  function handlePrice(event: any) {
    const selectedPrice = event.target.name;
    if (event.target.checked) {
      setPrices([...price, selectedPrice]);
    } else {
      const updatedPrice = price.filter((e: any) => e !== selectedPrice);
      setPrices(updatedPrice);
    }
  }

  function handleColor(event: any) {
    if (!color.includes(event.colorName.toLowerCase())) {
      setColor([...color, event.colorName.toLowerCase()]);
    } else {
      const selectedColor = color.filter((e: any) => e !== event.colorName.toLowerCase());
      setColor(selectedColor);
    }
  }

  function handleSize(event: any) {
    if (!size.includes(event)) {
      setSizes([...size, event]);
    } else {
      const selectedSize = size.filter((e: any) => e !== event);
      setSizes(selectedSize);
    }
  }

  return (
    <div className="w-[230px] mx-[20px]">
      <div>
        {list.map((item: any): any => (
          <Link href={item.name} key={item.name} className="flex flex-col">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="">
        <div>
          <h2 className="mt-6 text-xl text-[16px] ">Gender</h2>
        </div>

        <div className="mt-4">
          {genderOptions.map((selectedGender) => (
            <div onClick={handleGender} className="flex cursor-pointer" key={selectedGender}>
              <input type="checkbox" className="cursor-pointer accent-black h-5 w-5" id={selectedGender} name={selectedGender} checked={gender.includes(selectedGender)} />
              <label className={gender.includes(selectedGender) ? "ml-2 cursor-pointer text-[16px]" : "ml-2 cursor-pointer text-[16px] hover:opacity-50"} htmlFor={selectedGender}>
                {selectedGender}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl text-[16px] bold">Shop By Price</h2>
        </div>
        <div className="mt-4 grid-cols-1 grid gap-y-1 ">
          {prices.map((selectedPrice: any) => (
            <div onClick={handlePrice} className="flex cursor-pointer" key={selectedPrice}>
              <input type="checkbox" className="h-5 w-5 accent-black cursor-pointer" id={selectedPrice} name={selectedPrice} checked={price.includes(selectedPrice)} />
              <label className={price.includes(selectedPrice) ? `ml-2 cursor-pointer` : `ml-2 cursor-pointer hover:opacity-50`} htmlFor={selectedPrice}>
                {selectedPrice}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl text-[16px]">Color</h2>
        </div>
        <div className="mt-4 w-[200px] grid-cols-3 grid gap-0 p-2 text-xs pl-0">
          {colors.map((color: any) => (
            <div className="justify-around mb-6 cursor-pointer " onClick={() => handleColor(color)} key={color}>
              <div className={`w-7 h-7 mx-auto hover:opacity-100 ${color.colorClass} rounded-full`}></div>
              <div className="text-center text-[12px] hover:opacity-50   ">{color.colorName}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Size</h2>
        </div>
        <div className="mt-4 grid-cols-3 grid gap-2 p-2  gap-y-2">
          {sizes.map((e: number) => (
            <div key={e}>
              <button
                onClick={() => handleSize(e)}
                className={
                  size.includes(e)
                    ? ` border border-solid    border-black  active:border-black  rounded-md h-5 p-3 w-[40px] `
                    : ` border border-solid  border-#e5e5e5  hover:border-black active:border-black rounded-md h-5 p-3 w-[40px] `
                }
              >
                {e}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
