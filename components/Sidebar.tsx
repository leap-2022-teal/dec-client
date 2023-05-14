import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SideBar({ name }: any) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=$parentId=${name}`).then((res) => setList(res.data));
  }, [name]);

  const colors = [
    { colorClass: "bg-purple-500", colorName: "Purple" },
    { colorClass: "bg-slate-950 ", colorName: "Black" },
    { colorClass: " bg-red-500 ", colorName: "Red" },
    { colorClass: " bg-orange-500", colorName: "Orange" },
    { colorClass: " bg-blue-500 ", colorName: "Blue" },
    { colorClass: " bg-yellow-800", colorName: "Brown" },
    { colorClass: "bg-yellow-300 ", colorName: "Yellow" },
    { colorClass: "bg-gradient-to-r from-indigo-500 from-30% via-sky-500 via-40% to-emerald-500 to-30%   ", colorName: "Multi-Color" },
    { colorClass: "border-solid border border-grey h-7 bg-white-500  ", colorName: "White" },
    { colorClass: " bg-gray-500 ", colorName: "Grey" },
    { colorClass: " bg-pink-500  ", colorName: "Pink" },
    { colorClass: " bg-green-600  ", colorName: "Green" },
  ];

  const sizes = [6, 7, 8, 9, 10, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  function productWomen() {}
  console.log(list);
  return (
    <div className="h-[200px] top-[200px] left-2 fixed">
      {/* hello, {name} */}
      {list.map((item: any): any => (
        <Link href={item.name} className="flex flex-col">
          {item.name}
        </Link>
      ))}
      <div className="">
        <div>
          <h2 className="mt-6 text-xl">Gender</h2>
        </div>
        <div className="mt-4">
          <div>
            <input type="checkbox" id="Men" name="Men" checked />
            <label htmlFor="Men">Men</label>
          </div>
          <div>
            <input type="checkbox" id="Women" name="Women" />
            <label htmlFor="Women" onClick={productWomen}>
              Women
            </label>
          </div>
          <div>
            <input type="checkbox" id="Unisex" name="Unisex" />
            <label htmlFor="Unisex">Unisex</label>
          </div>
        </div>
        <span></span>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Shop By Price</h2>
        </div>
        <div className="mt-4">
          <div>
            <input type="checkbox" id="0-$25" name="0-$25" />
            <label htmlFor="0-$25">$0-$25</label>
          </div>
          <div>
            <input type="checkbox" id="25-$50" name="25-$50" />
            <label htmlFor="25-$50">$25-$50</label>
          </div>
          <div>
            <input type="checkbox" id="50-$100" name="50-$100" />
            <label htmlFor="50-$100">$50-$100</label>
          </div>
          <div>
            <input type="checkbox" id="100-$150" name="100-$150" />
            <label htmlFor="100-$150">$100-$150</label>
          </div>
          <div>
            <input type="checkbox" id="Over $150" name="Over $150" />
            <label htmlFor="Over $150">Over $150</label>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Color</h2>
        </div>
        <div className="mt-4 grid-cols-3 grid gap-3 p-2 text-xs">
          {colors.map((color: any) => (
            <Link href="">
              <div className={`w-7 h-7 ${color.colorClass} rounded-full`}></div>
              <a href="">{color.colorName}</a>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Size</h2>
        </div>
        <div className="mt-4 grid-cols-1 grid gap-2 p-2 h-9 "></div>
        {sizes.map((sizes: any) => (
          <Link href="">
            <button>{sizes}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
