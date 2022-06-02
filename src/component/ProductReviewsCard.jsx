import React from 'react';
import '../style/ProductReviewsCard.css';

const ProductReviewsCard = ({name,review,index,image,price}) => {
  return (
    <div className='ProductReviewsCard'>
        
        <img src={image} alt={`${index} Reviews`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard