import React from "react";
import "./Tooltip.css";

const Tooltip = ({ text, position, children }) => {
  return (
    <div className={`tooltip-container ${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
