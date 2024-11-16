import React from "react";

const DealerEditButton = ({
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
     
    </button>
  );
};
export default DealerEditButton;
