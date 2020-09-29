import React from "react";

import "./styles.css";

function PaymentComponent() {
  return (
    <div className="container">
      <h1 className="sectionTitle">Metodo de pagamento:</h1>
      <div className="methodSelectionContainer">
        <input type="radio" name="method" id="cardMachine" />
        <label htmlFor="cardMachine">Cartao na entrega</label>
      </div>
      <div className="methodSelectionContainer">
        <input type="radio" name="method" id="cardWebsite" />
        <label htmlFor="cardWebsite">Cartao pelo site</label>
      </div>
    </div>
  );
}

export default PaymentComponent;
