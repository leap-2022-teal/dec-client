import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Archivo_Black } from "@next/font/google";
import clsx from "clsx";

export const title = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <div className="mt-5">
          {categoryId === banner.categoryId && position === banner.position ? (
            <div className="">
              <Link href={`${banner?.link}`}>
                <div>
                  <img src={banner?.image.path} alt="image" className="w-[100%]" />
                </div>
                <figcaption className="lg:text-center items-center mt-6 text-left">
                  <div>
                    <h3 className={clsx("font-black lg:text-5xl text-3xl font-serif leading-10 banner-title", title.className)}>{banner.name}</h3>
                    <p className="my-8">{banner.details}</p>
                    <div>
                      <button className="rounded-full bg-black text-white p-2 px-6"> Shop</button>
                    </div>
                  </div>
                </figcaption>
              </Link>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
