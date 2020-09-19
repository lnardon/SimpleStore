import React from "react";

import "./styles.css";

function ProductCard({ product, onClick }) {
  const { title, description, price, image } = product;
  return (
    <div className="productCardContainer">
      <img src={image} alt="Product Card" className="productImage" />
      <div className="productCardInfoDiv">
        <h1 className="productCardTitle">{title}</h1>
        <h3 className="productCardDescription">{description}</h3>
        <h2 className="productCardPrice">R$ {price}</h2>
        <button className="productCardButton" onClick={() => onClick(product)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
