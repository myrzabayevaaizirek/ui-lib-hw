import React from "react";
import "./Typography.css";

const Typography = ({ textSize, children, className = "" }) => {
  return <p className={`typography ${textSize} ${className}`}>{children}</p>;
};

export default Typography;
