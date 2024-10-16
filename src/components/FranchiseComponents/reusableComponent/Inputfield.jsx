import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Inputfield = ({
  icon,
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
      {showIcon && (
        <span >
          <FontAwesomeIcon icon={icon} className={inputIconclass} />
        </span>
      )}
    </div>
  );
};

export default Inputfield;