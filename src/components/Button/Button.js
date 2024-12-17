import React from "react";
import "./Button.css"; // Убедитесь, что путь правильный

const Button = ({ type = "button", onClick, disabled, size, variant, children }) => {
  const classNames = `btn ${size} ${variant} ${disabled ? "disabled" : ""}`;
  return (
    <button type={type} onClick={onClick} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
