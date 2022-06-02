import React from 'react';
import '../style/HotItemCard.css';

const HotItemCard = ({name,image,index,price,}) => {
  return (
    <div className='HotItemCard'>
          <img src={image} alt={index}/>
          <p>{name}</p>
          <span>{price}</span>
    </div>
  )
}

export default HotItemCard