import React from "react";

function ServiceTypeButton({ variant, children, width, ...rest }) {
  const bgColor =
    variant === "primary"
      ? "bg-violet hover:bg-violet-dark"
      : variant === "secondary"
      ? "bg-primary hover:bg-primary-dark"
      : variant === "delete"
      ? "bg-red hover:bg-red-dark"
      : variant === "add"
      ? "bg-blue_bg hover:bg-blue_bg-dark"
      : variant === "add2"
      ? "bg-blue-50 hover:bg-blue-100"
      : "";

  const textColor =
    variant === "secondary"
      ? "text-violet hover:text-violet-dark"
      : variant === "add"
      ? "text-black hover:text-gray-800"
      : variant === "add2"
      ? "text-black hover:text-gray-800"
      : "text-primary hover:text-primary-dark";

  const buttonWidth = width ? width : variant === "add" ? "w-full" : variant === "add2" ? "w-full" : "";

  return (
    <button
      className={`rounded-[2.5rem] font-normal px-10 py-2 ${buttonWidth} ${bgColor} ${textColor} ${
        variant === "secondary" ? "border-2 border-violet hover:border-violet-dark" : ""
      } text-lg p-2`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ServiceTypeButton;
