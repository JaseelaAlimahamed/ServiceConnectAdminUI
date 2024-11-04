import React from "react";

function AddButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="p-4 pl-2 w-[272px] h-[47px] rounded-[30px] bg-[#65558F] text-white font-medium flex items-center justify-center"
    >
      {label}
    </button>
  );
}

export default AddButton;
