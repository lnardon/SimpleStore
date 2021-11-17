import React, { useRef } from "react";

import "./styles.css";
import close from "../../assets/icons/close.png";
import CartItemCard from "../CartItemCard";
import InputField from "../InputField";
import PaymentComponent from "../PaymentComponent";

function CartComponent({ closeCart, cartItems }) {
  const cartRef = useRef(null);

  function handleCartClose({ cartItems }) {
    cartRef.current.classList.add("closeCart");
    setTimeout(() => {
      closeCart();
    }, 600);
  }

  return (
    <div className="cartContainer" ref={cartRef}>
      <div className="closeCartDiv">
        <img
          src={close}
          alt="Close"
          className="closeIcon"
          onClick={handleCartClose}
        />
      </div>
      <div className="cartHeader">
        <img
          src="https://personalwebsite-5d16b.web.app/images/nrdLogo.png"
          alt="Company Logo"
          className="cartHeaderLogo"
        />
        <div className="cartHeaderText">
          <h2 className="cartHeaderTitle">Cosa Nostra Cucina</h2>
        </div>
      </div>
      <div className="cartItemsContainer">
        {cartItems.map((item) => {
          return <CartItemCard item={item.item} />;
        })}
      </div>
      <div className="addressContainer">
        <h2 className="cartSectionHeader">Local de entrega:</h2>
        <InputField
          placeholder="Rua B, Quadra 7"
          type="text"
          label="Endereço"
        />
        <InputField placeholder="Jardim Belo" type="text" label="Bairro" />
        <InputField placeholder="Apto 17" type="text" label="Complemento" />
        <InputField placeholder="(00) 00000-0000" type="text" label="Contato" />
      </div>
      <div className="paymentContainer">
        <PaymentComponent />
      </div>
      <button className="finishBtn">Finalizar Compra</button>
    </div>
  );
}

export default CartComponent;
