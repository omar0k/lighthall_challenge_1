import { useState } from "react";
import "./Button.css";
const Button = ({ onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      Click Me!
    </button>
  );
};
export default Button;
