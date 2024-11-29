import React from 'react';

const DropDown = ({ label, name, value, placeholder, options, onChange }) => {
  return (
    <div className="mb-4">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label> */}
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 p-4  rounded-2xl  shadow leading-tight focus:outline-none focus:shadow-outline"
        name={name}
       
        value={value}
        onChange={onChange}
      >
         {/* Placeholder option */}
         <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {/* Render options */}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
