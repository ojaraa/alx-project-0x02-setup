import React from "react";
import { type ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white font-semibold hover:bg-green-700 transition ${sizeClass} ${shapeClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
