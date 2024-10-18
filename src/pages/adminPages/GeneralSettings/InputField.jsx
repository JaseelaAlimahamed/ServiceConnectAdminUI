import React from 'react';

const InputField = ({ label, type = 'text', placeholder }) => {
  return (
    <div className="flex-1 mb-5">
      <label className="block  mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
         className="w-full p-2 border-0 border-b border-[#f1f3f7] rounded-t bg-[#f4f7fa] mt-1"
      />
    </div>
  );
};

export default InputField;
