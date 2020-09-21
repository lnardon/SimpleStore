import React from "react";

import "./styles.css";

function CartIndicator() {
  return (
    <div className="cartIndicatorContainer">
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
