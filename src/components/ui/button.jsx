import React from "react";

export function Button({ children, className, variant = "default", ...props }) {
  const baseStyle = "inline-flex items-center px-4 py-2 rounded-md font-semibold text-sm transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-800 hover:bg-gray-200"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
