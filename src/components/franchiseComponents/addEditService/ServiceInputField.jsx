import React from "react";
import { FaUser } from "react-icons/fa";

const ServiceInputField = ({
  icon: IconComponent, 
  type,
  name,
  placeholder,
  value,
  onChange,
  inputclass,
  showIcon = true,
  inputIconclass
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputclass}
      />
      {showIcon && IconComponent && (
        <span>
          <IconComponent className={inputIconclass} />
        </span>
      )}
    </div>
  );
};

export default ServiceInputField;
