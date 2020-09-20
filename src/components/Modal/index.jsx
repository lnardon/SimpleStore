import React from "react";

import "./styles.css";

function Modal({ setIsOpen }) {
  return (
    <div className="modalContainer" onClick={() => setIsOpen(false)}>
      <div className="contentContainer">
        <div className="closeBtn">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg"
            alt="Close"
            className="closeBtnIcon"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
