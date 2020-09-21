import React, { useState } from "react";

import "./styles.css";

function Modal({ item, setIsOpen, addItem }) {
  const [amount, setAmount] = useState(1);

  return (
    <div className="modalContainer">
      <div className="contentContainer">
        <div className="closeBtn">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg"
            alt="Close"
            className="closeBtnIcon"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <img src={item.image} alt="Product" className="modalProductImage" />
        <h1 className="modalTitle">{item.title}</h1>
        <h2 className="modalDescription">{item.description}</h2>
        <input
          type="text"
          className="modalInput"
          placeholder="Digite aqui sua solicitação"
        />
        <div className="modalControls">
          <div alt="add" className="modalControlsBtn">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/59/59220.svg"
              alt="Minus "
            />
          </div>
          <h3 className="modalItemAmount">{amount}</h3>
          <div
            alt="remove"
            className="modalControlsBtn"
            onClick={() => setAmount(amount + 1)}
          >
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/860/860785.svg"
              alt="Plus"
            />
          </div>
        </div>
        <button className="modalAddBtn" onClick={() => addItem(item, amount)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Modal;
