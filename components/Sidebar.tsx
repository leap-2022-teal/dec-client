import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PropType {
  getProduct: (e: any) => void;
}

export function SideBar({ getProduct }: PropType) {
  const [list, setList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();
  const [gender, setGender] = useState<any[]>([]);

  const genderOptions = ["Men", "Women"];
  console.log(gender);
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

  const prices = ["$0-$25", "$25-$50", "$50-$100", "Over $150"];
  useEffect(() => {
    if (filteredProducts && typeof getProduct === "function") {
      getProduct(filteredProducts);
    }
  }, [filteredProducts]);

  useEffect(() => {
    if (gender.length === 1) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/filter?gender=${gender[0]}&color=`).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setFilteredProducts(data);
          // setProducts(data);
        } else {
          alert(`Aldaa garlaa: ${status}`);
        }
      });
    } else {
      console.log("ok");
    }
  }, [gender]);
  console.log(filteredProducts);

  function handleGender(event: any) {
    if (event.target.checked) {
      setGender([...gender, event.target.name]);
    } else {
      const selectedGender = gender.filter((e: any) => e !== event.target.name);
      setGender(selectedGender);
    }
  }

  return (
    <div className="sidebar h-96 overflow-y-auto fixed">
      <div>
        {list.map((item: any): any => (
          <Link href={item.name} className="flex flex-col">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="">
        <div>
          <h2 className="mt-6 text-xl">Gender</h2>
        </div>
        <div className="mt-4">
          {genderOptions
            // .filter((category: any) => !category.parentId)
            .map((gender: string) => (
              <div onClick={handleGender}>
                <input type="checkbox" id={gender} name={gender} />
                <label htmlFor={gender}>{gender}</label>
              </div>
            ))}
        </div>
        <span></span>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Shop By Price</h2>
        </div>
        <div className="mt-4 grid-cols-1 grid gap-y-1">
          {prices.map((prices: any) => (
            <Link href={""}>
              <input type="checkbox" />
              <label htmlFor="">{prices}</label>
            </Link>
          ))}
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
              <div>{color.colorName}</div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Size</h2>
        </div>
        <div className="mt-4 grid-cols-3 grid gap-2 p-2  gap-y-2">
          {sizes.map((sizes: any) => (
            <Link href="">
              <button className=" border border-solid border-black rounded-md h-5 p-3 w-[40px] ">{sizes}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
