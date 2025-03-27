"use client";

import "./arrival.css";
import Image from "next/image";

const ArrivalProduct = ({ imageUrl }) => {
  return (
    <div className="arrival_product_container">
      <div className="arrival_img_div">
        <Image 
          src={imageUrl} 
          alt="arrivals" 
          width={300} 
          height={300} 
          className="arrival_product_img"
        />
      </div>
      <div className="arrival_product_info">
        <p className="item_heading">Light Brown Shameez Shalwar</p>
        <p className="item_price_heading">
          Price: <span className="item_price">5000/- PKR</span>
        </p>
      </div>
    </div>
  );
};

export default ArrivalProduct;