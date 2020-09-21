import React, { useRef } from "react";

import "./styles.css";

function CartComponent({ closeCart }) {
  const cartRef = useRef(null);

  function handleCartClose() {
    cartRef.current.classList.add("closeCart");
    setTimeout(() => {
      closeCart();
    }, 600);
  }

  return (
    <div className="cartContainer" ref={cartRef}>
      <div className="closeCartDiv">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/271/271210.svg"
          alt="Close"
          className="closeIcon"
          onClick={handleCartClose}
        />
      </div>
      <button className="finishBtn">Finalizar Compra</button>
    </div>
  );
}

export default CartComponent;
