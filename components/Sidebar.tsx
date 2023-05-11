import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SideBar({ name }: any) {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?q=$parentId=${name}`).then((res) => setList(res.data));
  }, [name]);

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
        <div className="mt-4">
          <div className="flex gap-3">
            <div>
              <div className="w-7 h-7 bg-purple-500 rounded-full"></div>
              <a href="">Purple</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-slate-950 rounded-full "></div>
              <a href="">Black</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-red-500 rounded-full"></div>
              <a href="">Red</a>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="w-7 h-7 bg-orange-500 rounded-full"></div>
              <a href="">Orange</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-blue-500 rounded-full"></div>
              <a href="">Blue</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-white-500 rounded-full box-border"></div>
              <a href="">White</a>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="w-7 h-7 bg-yellow-950 rounded-full"></div>
              <a href="">Brown</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-green-500 rounded-full"></div>
              <a href="">Green</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-yellow-500 rounded-full"></div>
              <a href="">Yellow</a>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="w-7 h-7 bg-red-500 rounded-full"></div>
              <a href="">Multi-color</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-gray-500 rounded-full"></div>
              <a href="">Grey</a>
            </div>
            <div>
              <div className="w-7 h-7 bg-pink-500 rounded-full"></div>
              <a href="">Pink</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 className="mt-6 text-xl">Size</h2>
        </div>
        <div className="mt-4">
          <div className="flex gap-3">
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div className="flex gap-3">
            <div>10</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>
          <div className="flex gap-3">
            <div>32</div>
            <div>33</div>
            <div>34</div>
            <div>35</div>
          </div>
          <div className="flex gap-3">
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
          </div>
          <div className="flex gap-3">
            <div>40</div>
            <div>41</div>
            <div>42</div>
            <div>43</div>
          </div>
          <div className="flex gap-3">
            <div>44</div>
            <div>45</div>
            <div>46</div>
            <div>47</div>
          </div>
        </div>
      </div>
    </div>
  );
}
