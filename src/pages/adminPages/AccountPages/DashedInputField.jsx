import React from "react";
import InvoiceIcon from "./../../../../public/plus-circle.svg"; // Adjust the path as needed

function DashedInputField({ label }) {
  return (
    <div className="w-half">
      <label className="block text-sm font-medium text-[#666666] mb-1">
        {label}
      </label>
      <div className="relative">
        {/* Change input to div for non-editable field */}
        <div className="flex items-center p-4 pl-10 pr-[10px] w-[266px] h-[47px] rounded-[8px] border border-dashed border-[#666666] bg-white justify-center">
          <img src={InvoiceIcon} alt="Invoice Icon" className="w-5 h-5" />
          <span className="ml-2 text-[#666666]">Add Invoice</span>
        </div>
      </div>
    </div>
  );
}

export default DashedInputField;
