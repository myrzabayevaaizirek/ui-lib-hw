import React from "react";
import "./Input.css";

const Input = ({ type = "text", placeholder, value, onChange, disabled, label, danger }) => {
  return (
    <div className="input-wrapper">
      {label && <label className={`label ${danger ? "danger" : ""}`}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input ${danger ? "danger" : ""}`}
      />
    </div>
  );
};

export default Input;
