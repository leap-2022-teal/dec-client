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
  name: string;
}
export function Feature({ categoryId, position, name }: PropType) {
  const [banner, setBanner] = useState<Banner[]>([]);
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/banner`).then((res) => setBanner(res.data));
  }, []);
  return (
    <>
      <div className="grid laptop:grid-cols-2 gap-5 my-4">
        {banner.map((banner) => (
          <>
            {categoryId === banner.categoryId && position === banner.position ? (
              <div className="grid-cols-2">
                <Link href={`${banner?.link}`}>
                  <figure className="">
                    <div>
                      <img src={banner?.image.path} alt="image" className="w-[100%]" />
                    </div>
                    {banner.name === name ? (
                      <figcaption className=" mt-6 text-left  ">
                        <div>
                          <p>{banner.name}</p>
                          <h3 className="font-black my-3 text-2xl">{banner.details}</h3>
                          <div>
                            <button className="rounded-full bg-white text-black p-2 px-6"> Shop now</button>
                          </div>
                        </div>
                      </figcaption>
                    ) : (
                      <figcaption className=" mt-6 text-left ">
                        <div>
                          <p className="">{banner.details}</p>
                          <h3 className="  my-3 text-2xl">{banner.name}</h3>
                          <div>
                            <button className="rounded-full bg-white text-black p-2 px-6">Shop now</button>
                          </div>
                        </div>
                      </figcaption>
                    )}
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
