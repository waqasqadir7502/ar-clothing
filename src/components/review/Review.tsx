'use client'
import './review.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const reviews = [
  {
    name: "Ali",
    rating: 5,
    text: "The product is very good and I am happy with the product."
  },
  {
    name: "Sarah",
    rating: 4,
    text: "Great quality but shipping took longer than expected."
  },
  {
    name: "John",
    rating: 5,
    text: "Absolutely love it! Would definitely buy again."
  },
  {
    name: "Emma",
    rating: 3,
    text: "Good product but the color was slightly different than shown."
  },
  {
    name: "Mike",
    rating: 5,
    text: "Perfect fit and excellent customer service."
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card
  
  const nextReview = () => {
    setCurrentIndex(prev => (prev === reviews.length - 1 ? 0 : prev + 1));
  };
  
  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="review-carousel-container">
      <button className="nav-arrow left-arrow" onClick={prevReview}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      
      <div className="reviews-wrapper">
        {reviews.map((review, index) => {
          // Calculate position class
          let positionClass = '';
          const diff = index - currentIndex;
          
          if (diff === 0) {
            positionClass = 'center';
          } else if (diff === -1 || (currentIndex === 0 && index === reviews.length - 1)) {
            positionClass = 'left';
          } else if (diff === 1 || (currentIndex === reviews.length - 1 && index === 0)) {
            positionClass = 'right';
          } else {
            positionClass = 'hidden';
          }

          return (
            <div 
              key={index}
              className={`review-card ${positionClass}`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className='cus_name_div'>
                <span className='cus_name'>Customer Name: </span>
                <span className='cus_name'>{review.name}</span>
              </div>

              <div className="star_rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={star <= review.rating ? solidStar : regularStar}
                    className="star_icon"
                  />
                ))}
              </div>

              <div className='review_text_div'>
                {review.text}
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="nav-arrow right-arrow" onClick={nextReview}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default ReviewCarousel;