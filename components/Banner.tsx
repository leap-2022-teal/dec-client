import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
interface Banner {
  name: string;
  details: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
  link: string;
}
export function Banner() {
  const [banner, setBanner] = useState<Banner[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`).then((res) => setBanner(res.data));
  }, []);
  return (
    <>
      <div className="">
        <Link href={`${banner[0]?.link}`}>
          <img src={banner[0]?.image.path} alt="image" className="w-[100%]" />
        </Link>
      </div>
    </>
  );
}
