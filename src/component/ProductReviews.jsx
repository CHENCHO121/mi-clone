import React from "react";
import "../style/ProductReviews.css";
import ProductReviewsCard from "./ProductReviewsCard";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="ProductReviews">
      {productReviews.map((item, index) => (
        <ProductReviewsCard
          key={item.image}
          review={item.review}
          price={item.price}
          name={item.name}
          image={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
