"use client"

import "./arrival.css"
import Image from "next/image"
import pic from "../../assets/images/arrivals2.jpg"
import pic2 from "../../assets/images/arrival1.jpg"
const ArrivalProduct = ({ imageUrl }) => {
  return (
    <div className="arrival_product_container">
        <div className="arrival_img_div"><Image src={imageUrl} alt="arrivals" className="arrival_product_img"/></div>
        <div className="arrival_product_info">
            <p className="item_heading">light brown shameez shalwar </p>
            <p className="item_price_heading">price : <span className="item_price">5000/- PKR</span></p>
        </div>
    </div>
  )
}

export default ArrivalProduct