"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from './relatedproduct.module.css';
import { products as allProducts } from "../../pages/data/product"
import Image from 'next/image';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const VISIBLE_COUNT = 3
const products = allProducts.slice(0, 6)

const RelatedProduct = () => {

    const total = products.length;
    const [index, setIndex] = useState(total);
    const [isAnimating, setIsAnimating] = useState(true);
    const trackRef = useRef<HTMLDivElement>(null);;

    // Build full slide list [CloneEnd , real, cloneStart]
    const slides = [...products, ...products, ...products]; // 3x

    const nextSlide = () => {
        setIndex((prev) => prev + 1);
        setIsAnimating(true);
    }

    const prevSlide = () => {
        setIndex((prev) => prev - 1);
        setIsAnimating(true);
    }

    // Auto Slide 
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [])

    //Reset Position instantly if not clones
    useEffect(() => {
        if (index === slides.length - VISIBLE_COUNT) {
            setTimeout(() => {
                setIsAnimating(false);
                setIndex(total);
            }, 500) // Will work after transition ends
        }
        if (index === 0) {
            setTimeout(() => {
                setIsAnimating(false);
                setIndex(total);
            }, 500)
        }
    }, [index, total, slides.length])


    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselHeading}>Related Products</div>
            <div className={styles.carouselWrapper}>
                <button className={styles.arrowLeft} onClick={prevSlide}>&#8249;</button>
                <div className={styles.carouselViewport}>

                    <div className={styles.carouselTrack} style={{
                        transform: `translateX(-${(100 / VISIBLE_COUNT) * index}%)`,
                        transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
                        
                    }}>
                        {slides.map((products, i) => {
                            return (
                                <div className={styles.slide} key={`${products.id} - ${i}`}>
                                    <Image src={products.image.img1 || products.image.img2 || "/fallback.jpg"}
                                        alt={products.name}
                                        className={styles.productImage}
                                    />
                                    <div className={styles.productInfo}>
                                        <p className={styles.productName}>{products.name}</p>
                                        <p className={styles.productPrice}>{products.price}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
                <button className={styles.arrowRight} onClick={nextSlide}>&#8250;</button>

            </div>

        </div>
    )
};


export default RelatedProduct;
