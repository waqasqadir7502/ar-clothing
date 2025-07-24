"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: {
    img1: StaticImageData;
  };
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product_container">
      <div className="product_img_div">
        <Image src={product.image.img1} alt={product.name} width={500} height={500} className="pro_img"/>
      </div>
      <div className="product_name_div">
        {product.name}
      </div>
    </div>
  );
}
