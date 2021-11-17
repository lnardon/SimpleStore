import React from "react";

import "./styles.css";
import bagIcon from "../../assets/icons/bag.png";

function CartIndicator({ openCart }) {
  return (
    <div className="cartIndicatorContainer" onClick={openCart}>
      <div className="cartIndicatorContent">
        <img src={bagIcon} alt="Cart" className="cartIcon" />
        <h1 className="cartIndicatorTitle">Ver carrinho</h1>
      </div>
    </div>
  );
}

export default CartIndicator;
