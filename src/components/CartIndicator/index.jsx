import React from "react";

import "./styles.css";

function CartIndicator({ openCart }) {
  return (
    <div className="cartIndicatorContainer" onClick={openCart}>
      <div className="cartIndicatorContent">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/833/833314.svg"
          alt="Cart"
          className="cartIcon"
        />
        <h1 className="cartIndicatorTitle">Ver carrinho</h1>
      </div>
    </div>
  );
}

export default CartIndicator;
