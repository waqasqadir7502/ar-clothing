"use client";
import React from "react";  // import React to use React.use()
import { products } from "../../data/product";
import "../category.css";
// import ProductCard from "../../../components/productfilter/product";
import Image from "next/image";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;  
}) {
  const unwrappedParams = React.use(params);  
  const { category } = unwrappedParams;

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category_filter_container">
      {filteredProducts.map((product) => (
        <div key={product.id} className="catergory_product_card">
          <div className="card_img_div">
            <Image
              src={product.image.img1 || product.image.img2 || "/placeholder.png"}
              alt={product.name}
              width={300}
              height={300}
              className="card_img"
            />
          </div>
          <div className="card_detail_div">
            <p className="card_heading">{product.name}</p>
            <p className="card_price_heading">
              Price: <span className="card_price">{product.price}/- PKR</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
