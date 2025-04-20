'use client'
import './review.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

const Review = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (index: number) => {
    setRating(index)
  }

  return (
    <div className="review_container">
      <div className='cus_name_div'>
        <span className='cus_name'>Customer Name: </span>
        <span className='cus_name'>Ali</span>
      </div>

      <div className="star_rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={star <= (hover || rating) ? solidStar : regularStar}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="star_icon"
          />
        ))}
      </div>

      <div className='review_text_div'>
        the product is very good and I am happy with the product.
      </div>
    </div>
  )
}

export default Review
