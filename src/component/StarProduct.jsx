import React from "react";
import '../style/StarProduct.css';

const StarProduct = ({ starProducts }) => {
  return (
    <div className="startProduct">
      <div>
        <a href={starProducts[0].url}>
          <img src={starProducts[0].image} alt="first product" />
        </a>
      </div>
      
      <div>
        <a href={starProducts[1].url}>
          <img src={starProducts[1].image} alt="second product" />
        </a>
        <a href={starProducts[2].url}>
          <img src={starProducts[2].image} alt="third product" />
        </a>
        <a href={starProducts[3].url}>
          <img src={starProducts[3].image} alt="fourth product" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
