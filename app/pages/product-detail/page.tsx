"use client"

import { useState } from "react";
import RelatedProduct from "../../components/relatedProduct/RelatedProduct";
import styles from "./productdetails.module.css"

const product = {
  name: 'Classic Leather Sneakers',
  description: 'Premium quality leather sneakers, perfect for casual wear.',
  images: [
    '/assets/arrival1.jpg',
    '/assets/arrivals2.jpg',
    '/assets/arrival1.jpg',
    '/assets/arrivals2.jpg',

  ],
  colors: ['#000000', '#ffffff', '#ff0000', '#0000ff'],
};

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {/* Left: Image Gallery */}
        <div className={styles.gallery}>
          <img src={selectedImage} alt="Product" className={styles.mainImage} />
          <div className={styles.thumbnailRow}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={
                  selectedImage === img
                    ? `${styles.thumbnail} ${styles.activeThumbnail}`
                    : styles.thumbnail
                }
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className={styles.details}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>

          {/* Color Buttons */}
          <div className={styles.colorSection}>
            <h3>Select your option:</h3>
            <div className={styles.colorOptions}>
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={
                    selectedColor === color
                      ? `${styles.colorButton} ${styles.selectedColor}`
                      : styles.colorButton
                  }
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={styles.quantityRow}>
            <span>Quantity:</span>
            <button onClick={decreaseQty} className={styles.qtyButton}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button onClick={increaseQty} className={styles.qtyButton}>+</button>
          </div>

          {/* Action Buttons */}
          <div className={styles.buttonRow}>
            <button className={styles.cartButton}>Add to Cart</button>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
      <RelatedProduct />

    </div>
  )
}

export default ProductDetail