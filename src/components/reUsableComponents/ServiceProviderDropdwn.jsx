import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";

const ServiceProviderDropdwn = ({ buttonLabel, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-full px-14 h-16 border-2 border-solid bg-violet text-primary gap-2"
      >
       
        {buttonLabel}
        <IoIosArrowDropdown/>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul className="absolute left-4 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceProviderDropdwn;
