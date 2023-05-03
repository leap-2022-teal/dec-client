import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from "axios";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { Category } from "@mui/icons-material";
import { useOnHoverOutside } from "./hook";

export default function Categories() {
        const [categories, setCategories] = useState([]);
        const dropdownRef = useRef(null); 
        const [isMenuDropDownOpen, setMenuDropDownOpen] = useState("");

        const closeHoverMenu = () => {
            setMenuDropDownOpen("");
          };

          useOnHoverOutside(dropdownRef, closeHoverMenu);

        useEffect(() => {
          axios
            .get(`http://localhost:8000/categories`)
            .then((res) => setCategories(res.data));
        }, []);

        return (
                <div className="w-full" ref={dropdownRef}>
                    <div className="flex-row ml-8 gap-7 hidden lg:flex justify-center w-full">
                        {categories.filter((category: any) => !category.parentId).map((category: any )=> (
                         <div className="inline-block text-black cursor-pointer hover:text-gray-300 transition text-l"
                         onMouseOver={() => setMenuDropDownOpen(category._id)}
                         >
                           {category.name}
                         </div> 

                    ))}
                    </div>
                        {isMenuDropDownOpen && <SubCategories isOn={isMenuDropDownOpen} categoryId={isMenuDropDownOpen} categories = {categories} />}

                  </div>
                    );

}

export function SubCategories({categories,categoryId, isOn}: any) {
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        if(isOn===categoryId){

            const filtered = categories.filter((e:any)=>{
                if(e.parentId===isOn){
                    return e
                }
            })
            // console.log(filtered)
            setSubCategories(filtered)
        }
        // axios
        //   .get(`http://localhost:8000/categories`)
        //   .then((res) => setCategories(res.data));
      }, []);

    return (
        <>
            <div className=" flex-row justify-between text-black-500">
            <div className="flex-row mt-10 ml-8 gap-20 hidden lg:flex justify-center w-full">
                        {subCategories.map((category: any )=> ( 
                         <div className="inline-block text-black cursor-pointer hover:text-gray-300 transition text-l"
                         >
                           {category.name}
                         </div> 
                  ))}
                    </div>
            </div>
        </>
    )
}