"use client";
import "./styles/home.css";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import CategoryProduct from "./components/categoryProduct/CategoryProduct";
import trend1 from "./assets/images/multi1.jpg";
import trend2 from "./assets/images/trend1.png";
import trend3 from "./assets/images/trend2.png";
import arr1 from "./assets/images/arrival1.jpg";
import arr2 from "./assets/images/arrivals2.jpg";
import arr3 from "./assets/images/arrivals3.jpg";
import arr4 from "./assets/images/multi1.jpg";

import ArrivalProduct from "./components/arrivalProduct/ArrivalProduct";

export const Home = () => {
  return (
    <div>
      {/*                     carousal               */}
      <div></div>

      {/*                     category products              */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Categories</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>
      <div className="category_product_div">
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
      </div>

      {/*                     Trending               */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Trending</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>
      <div className="trending_container">
        <div className="trend_col1_div">
          <Image src={trend1} alt="" className="col1_img" />
          <Link href="/" className="col1_btn">
            View More
          </Link>
        </div>
        <div className="trend_col2_div">
          <Image src={trend2} alt="" className="col2_img" />
          <Image src={trend3} alt="" className="col2_img" />
        </div>
      </div>

      {/*                     new arrivals               */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">New Arrival</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>

      <div className="arrival_grid">
        <ArrivalProduct imageUrl={arr1} />
        <ArrivalProduct imageUrl={arr2} />
        <ArrivalProduct imageUrl={arr3} />
        <ArrivalProduct imageUrl={arr4} />
        <ArrivalProduct imageUrl={arr3} />
      </div>

      {/*                     featured               */}

      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Featured</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>

      <div className="arrival_grid">
        <ArrivalProduct imageUrl={arr1} />
        <ArrivalProduct imageUrl={arr2} />
        <ArrivalProduct imageUrl={arr3} />
        <ArrivalProduct imageUrl={arr4} />
        <ArrivalProduct imageUrl={arr3} />
      </div>


      <div className="grid_main">
        <div className="grid">
          <Image src={trend1} alt="wad" />
        </div>
        <div>
        <Image src={trend2} alt="wda" />
        <Image src={trend3} alt="wdaw" />
        </div>
      </div>
    </div>
  );
};

export default Home;
