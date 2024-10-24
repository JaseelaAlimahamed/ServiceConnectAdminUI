import React from "react";
import { FaUser } from "react-icons/fa";

const Inputfield = ({
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
    <div className="relative flex items-center">
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

export default Inputfield;
