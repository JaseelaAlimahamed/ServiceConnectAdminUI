import React from 'react';
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const InputFieldComponent = ({ type, placeholder, value, onChange, isPassword, showPassword, toggleShowPassword }) => {
  return (
    <div className="relative">
      <input
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='p-4 w-full rounded-2xl bg-gray-500'
        required
      />
      {isPassword && (
        <span className="absolute right-3 top-5 cursor-pointer"
          onClick={toggleShowPassword}>
          {showPassword ? <GrHide /> : <BiShow />}
        </span>
      )}
    </div>
  );
};

export default InputFieldComponent;