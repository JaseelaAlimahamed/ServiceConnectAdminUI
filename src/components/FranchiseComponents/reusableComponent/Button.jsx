import React from "react";

const Button = ({
  children,
  bgColor,
  width,
  height,
  borderRadius,
  textColor,
  onClick,
  className,
  type,
  showIcon = true,
  icon,
  iconClass,
  ...props
}) => {
  return (
    <button
      className={`${bgColor} ${width} ${height} ${borderRadius} ${textColor} ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {/* Conditionally render the small rounded button with right arrow icon */}
      {/* {showIcon && (
        <span className={`${iconClass}`}>
          <FontAwesomeIcon icon={icon} />
        </span>
      )} */}
    </button>
  );
};
export default Button;
