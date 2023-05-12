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
        <div className="mt-4 grid-cols-1 grid gap-2 p-2 h-9 ">
          <div className="">
            <button className="border-2 rounded-md w-10">6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className="">
            <button>10</button>
            <button>29</button>
            <button>30</button>
            <button>31</button>
          </div>
          <div className="">
            <button>32</button>
            <button>33</button>
            <button>34</button>
            <button>35</button>
          </div>
          <div className="">
            <button>36</button>
            <button>37</button>
            <button>38</button>
            <button>39</button>
          </div>
          <div className="">
            <button>40</button>
            <button>41</button>
            <button>42</button>
            <button>43</button>
          </div>
          <div className="">
            <button>44</button>
            <button>45</button>
            <button>46</button>
            <button>47</button>
          </div>
        </div>
      </div>
    </div>
  );
}
