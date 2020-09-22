import React from "react";

import "./styles.css";

function CartItemCard({ item }) {
  console.log(item);
  return (
    <div className="cartItemCardContainer">
      <img src={item.image} alt="Item" className="cartItemImage" />
      <div className="cartItemCardTextDiv">
        <h1 className="cartItemTitle">{item.title}</h1>
      </div>
    </div>
  );
}

export default CartItemCard;
