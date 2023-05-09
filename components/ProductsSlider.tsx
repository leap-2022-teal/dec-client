import { useEffect, useRef, useState } from "react";

export interface Stock {
  size: number;
  stock: number;
}
export interface Product {
  name: string;
  details: string;
  price: number;
  color: string;
  categoryId: string;
  subCategoryId: string;
  sizes: Stock[];
  brand: string;
  image: [
    {
      path: string;
      width: number;
      height: number;
    }
  ];
  _id: string;
}

interface Props {
  products: Product[];
}

const NikeSlider = ({ products }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 33.33}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="slider-wrapper">
      <ul className="slider-container">
        {products.map((product) => (
          <li className="product" key={product._id}>
            <img src={product.image[0].path} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
        Prev
      </button>
      <button className="next" onClick={handleNext} disabled={currentIndex === products.length - 3}>
        Next
      </button>
    </div>
  );
};

export default NikeSlider;
