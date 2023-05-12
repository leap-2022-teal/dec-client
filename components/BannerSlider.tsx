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
export function BannerSlider({ categoryId, position }: PropType) {
  const [banner, setBanner] = useState<Banner[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`).then((res) => setBanner(res.data));
  }, []);
  console.log(banner[0]?.name, name);
  return (
    <>
      <div className="snap-x mx-auto snap-mandatory flex w-[100%] overflow-scroll mt-4 gap-3">
        {banner.map((banner) => (
          <>
            {categoryId === banner.categoryId && position === banner.position ? (
              <div className="snap-start laptop:w-[32.333%] flex-shrink-0 h-[auto] items-center pb-10  justify-center w-[75%] ">
                <Link href={`products/`} title={banner.name}>
                  <figure>
                    <div className=" overflow-hidden products-image">
                      <img src={banner.image.path} alt="image" />
                    </div>
                    <h4 className="text-black text-xl mt-4">{banner.name}</h4>
                  </figure>
                </Link>
              </div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}
