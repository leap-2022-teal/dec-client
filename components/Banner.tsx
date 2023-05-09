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
  categoryId: string;
  position: string;
}
interface PropType {
  categoryId?: string | undefined;
  position: string;
}
export function Banner({ categoryId, position }: PropType) {
  const [banner, setBanner] = useState<Banner[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`).then((res) => setBanner(res.data));
  }, []);
  console.log(banner);
  return (
    <>
      {banner.map((banner) => (
        <div>
          {categoryId === banner.categoryId && position === banner.position ? (
            <div className="">
              <Link href={`${banner?.link}`}>
                <img src={banner?.image.path} alt="image" className="w-[100%]" />
              </Link>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
