import React from "react";

import "./styles.css";

function SectionHeader({ title }) {
  return (
    <div className="sectionHeaderContainer">
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default SectionHeader;
