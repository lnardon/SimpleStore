import React from "react";

import "./styles.css";

function InputField({ type, placeholder, getValue, label }) {
  return (
    <div className="inputfieldContainer">
      <label htmlFor="inputComp">{label}:</label>
      <input
        type={type}
        placeholder={placeholder}
        id="inputComp"
        maxLength="255"
      />
    </div>
  );
}

export default InputField;
