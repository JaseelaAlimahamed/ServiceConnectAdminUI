import React from "react";

function ServiceTypeButton({ variant, children, width, ...rest }) {
  const bgColor =
    variant === "primary"
      ? "bg-violet"
      : variant === "secondary"
      ? "bg-primary"
      : variant === "delete"
      ? "bg-red"
      : variant === "add"
      ? "bg-blue_bg"
      : "";
  const textColor =
    variant === "secondary"
      ? "text-violet"
      : variant === "add"
      ? "text-black"
      : "text-primary";
  const buttonWidth = width ? width : variant === "add" ? "w-full" : "";
  return (
    <>
      <button
        className={`rounded-[2.5rem] font-normal px-10 py-2 ${buttonWidth} ${bgColor} ${textColor} ${
          variant === "secondary" ? "border-2 border-violet" : ""
        } text-lg p-2`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

export default ServiceTypeButton;
