"use client"
import React, { useEffect, useState } from 'react';
import styles from './relatedproduct.module.css';
import { products as allProducts } from "../../pages/data/product"
import Image from 'next/image';

const VISIBLE_COUNT = 3
const RelatedProduct = () => {
    const products = allProducts
    const [index, setIndex] = useState(0)

    // Sliding Func
    const prevSlide = () => {
        setIndex((prev) => prev === 0 ? products.length - 1 : prev - 1)
    }
    const nextSlide = () => {
        setIndex((prev) => (prev - 1) % products.length)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval)
    }, [products.length])

    // Product visibility 
    const getVisibleProducts = () => {
        const result = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            result.push(products[(index + i) % products.length]);
        }
        return result;
    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.heading}>Related Products</h2>
            <div className={styles.carouselWrapper}>
                <button className={styles.arrowLeft} onClick={prevSlide}>
                    &#8249;
                </button>
                <div className={styles.carouselViewport}>
                    <div
                        className={styles.carouselTrack}
                        style={{
                            transform: `translateX(${index * (100 / VISIBLE_COUNT)}%)`,
                        }}
                    >
                        {products.concat(products).map((product, idx) => (
                            <div key={`${product.id}-${idx}`} className={styles.slide}>
                                <Image
                                    src={
                                        product.image.img1 ||
                                        product.image.img2 ||
                                        '/fallback.jpg'
                                    }
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                                <div className={styles.productInfo}>
                                    <p className={styles.productName}>{product.name}</p>
                                    <p className={styles.productPrice}>Rs. {product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={styles.arrowRight} onClick={nextSlide}>
                    &#8250;
                </button>
            </div>
        </div>
    )
};


export default RelatedProduct;
