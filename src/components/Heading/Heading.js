import React from "react";
import "./Heading.css";

const Heading = ({ level = 1, children, className = "" }) => {
  const Tag = `h${level}`;
  return <Tag className={`heading ${className}`}>{children}</Tag>;
};

export default Heading;
