"use client"
import { products as allProducts} from "../data/product";
import { useState } from "react";
import RelatedProduct from "../../../components/relatedProduct/RelatedProduct";
import styles from "./productdetails.module.css"


const product = { // Dummy data
  name: 'Classic Leather Sneakers',
  description: 'Premium quality leather sneakers, perfect for casual wear.',
  images: [
    '/assets/arrival1.jpg',
    '/assets/arrivals2.jpg',
    '/assets/arrival1.jpg',
    '/assets/arrivals2.jpg',

  ],
  colors: ['#000000', '#ffffff', '#ff0000', '#0000ff'],
  sizes: ["S","M","L","XL"]
};

const prod = allProducts
console.log(prod)

const tabs = ["Description","Reviews","Comments"]// For Switchable tabs

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]); //for additional images
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // for colors selection
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]); // For Size Selection
  const [quantity, setQuantity] = useState(1); // for product quantity
  const [activeTab, setActiveTab] = useState("Description"); //By Default active tab


  // for product quantity
  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  // Switchable Tabs
  const renderContent = () =>{
    switch(activeTab){
      case 'Description' :
        return <p>This is Product Description Section</p>;
      case 'Reviews' :
        return <p>This is Product Reviews Section</p>;
      case 'Comments' :
        return <p>This is Product Comment Section</p>;
      default: 
        return null;
    }
  }


  return (
    <div className={styles.container}>
      {/* Product Display */}
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
            <div className={styles.quantityButtons}>
            <button onClick={decreaseQty} className={styles.qtyButton}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button onClick={increaseQty} className={styles.qtyButton}>+</button>
            </div>
          </div>

          {/* Size Selector buttons */}
          <div className={styles.sizesContainer}>
            <h3>Select Your Size:</h3>
            <div className={styles.sizeOptions}>
              {product.sizes.map((size, idx)=>{
                return(     
                  <button  key={idx}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.activeSize : ''}`}
                  onClick={() => setSelectedSize(size)}>          
                  {size}   
                  </button>
                )
              })}
            </div>
            
          </div>

          {/* Action Buttons */}
          <div className={styles.buttonRow}>
            <button className={styles.cartButton}>Add to Cart</button>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>

      {/* Switchable Tabs Products description, Comments and reviews */}
      <div className={styles.tabContainer}>
            <div className={styles.tabsHeader}>
              {tabs.map((tab)=>(
                <button 
                key={tab}
                className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}}`}
                onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>
              {renderContent()}
            </div>
      </div>

      <RelatedProduct />

    </div>
  )
}

export default ProductDetail