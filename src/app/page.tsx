"use client";
import "./styles/home.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "./styles/carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faCar,
  faShoppingCart,
  faPhone,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import CategoryProduct from "../components/categoryProduct/CategoryProduct";
import trend1 from "../assets/images/multi1.jpg";
import trend2 from "../assets/images/trend1.png";
import trend3 from "../assets/images/trend2.png";
import arr1 from "../assets/images/arrival1.jpg";
import arr2 from "../assets/images/arrivals2.jpg";
import arr3 from "../assets/images/arrivals3.jpg";
import arr4 from "../assets/images/multi1.jpg";

import ArrivalProduct from "../components/arrivalProduct/ArrivalProduct";
import Review from "../components/review/Review";



export default function Home() {
  const initialImages = [
    "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? initialImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = useCallback((): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === initialImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [initialImages.length]);

  useEffect(() => {
    if (initialImages.length > 1) {
      const timer = setTimeout(goToNext, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, initialImages.length, goToNext]);

  return (
    <div>
      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <button
            className={`${styles.navButton} ${styles.leftButton}`}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            &lt;
          </button>

          <div className={styles.slidesContainer}>
            {initialImages.map((image, index) => (
              <div
                key={index}
                className={styles.slide}
                style={{
                  opacity: index === currentIndex ? 1 : 0,
                  transform: "none",
                  transition: "opacity 0.8s ease-in-out",
                  backgroundImage: `url(${image})`,
                }}
                aria-hidden={index !== currentIndex}
                role="group"
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className={`${styles.navButton} ${styles.rightButton}`}
            onClick={goToNext}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Category Products */}
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
        <CategoryProduct />
        <CategoryProduct />
      </div>

      {/* Trending */}
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

      {/* New Arrivals */}
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

      {/* Featured */}
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

      {/* Services */}
      <div className="full_width_div">
        <div className="div_container">
          <div className="fspw_div">
            <FontAwesomeIcon icon={faCar} className="fspw_icon_size" />
            <p className="fspw_heading">Free Delivery</p>
            <p className="fspw_center_text">Free delivery all across karachi</p>
          </div>
          <div className="fspw_div">
            <FontAwesomeIcon icon={faShoppingCart} className="fspw_icon_size" />
            <p className="fspw_heading">Optimized Cart</p>
            <p className="fspw_center_text">
              Select your order in optimized cart
            </p>
          </div>
          <div className="fspw_div">
            <FontAwesomeIcon icon={faPhone} className="fspw_icon_size" />
            <p className="fspw_heading">Customer Service</p>
            <p className="fspw_center_text">
              Call for any Inquiry or to confirm order
            </p>
          </div>
          <div className="fspw_div">
            <FontAwesomeIcon icon={faWallet} className="fspw_icon_size" />
            <p className="fspw_heading">Payment methods</p>
            <p className="fspw_center_text">
              Various payment methods are available
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="section_heading_div">
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
        <p className="section_text">Reviews</p>
        <FontAwesomeIcon icon={faMinus} className="hr_line" />
      </div>
      <div className="review_fwidth_div">
        <Review />
      </div>
    </div>
  );
};
