import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import a specific icon (you can customize this)

const Buttonreuse = ({
  children,         
  bgColor = 'bg-blue-500',  
  width = 'w-auto',         
  height = 'h-auto',        
  borderRadius = 'rounded', 
  textColor = 'text-white', 
  onClick,                  
  className = '',  
  type,         
  showArrow = false,  
  icon = <FaArrowRight/>,  // Default icon
  ...props
}) => {
  return (
    <button
      className={`${bgColor} ${width} ${height} ${borderRadius} ${textColor} text-xl font-semibold focus:outline-none focus:ring relative flex items-center justify-center space-x-2 ${className}`}
      onClick={onClick} type={type}
      {...props}
    >
      {/* Main Button Content */}
      <span>{children}</span>

      {/* Conditionally render the small rounded button with right arrow icon */}
      {showArrow && (
        <span className="ml-2 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center absolute right-2">
          {icon} {/* Using react-icon */}
        </span>
      )}
    </button>
  );
};

export default Buttonreuse;
