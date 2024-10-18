import React from 'react';

const SelectField = ({ label, options }) => {
  return (
    <div className="flex-1 mb-5">
      <label className="block  mb-2">{label}</label>
      <select className="w-full p-2 border-0 border-b border-[#f1f3f7] rounded-t bg-[#f4f7fa] mt-1">
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
