import React from "react";
import InvoiceIcon from "../../../assets/AdminAssets/plus-circle.svg";
import { IoAddCircle } from "react-icons/io5";

function DashedInputField({ label }) {
  return (
    <div className="w-half">
      <label className="block text-sm font-medium text-[#666666] mb-1">
        {label}
      </label>
      <div className="relative">
        {/* Change input to div for non-editable field */}
        <div className="flex items-center p-4 pl-10 pr-[10px] w-[266px] h-[47px] rounded-[8px] border border-dashed border-[#666666] bg-white justify-center">
          <IoAddCircle />
          <span className="ml-2 text-[#666666]">Add Invoice</span>
        </div>
      </div>
    </div>
  );
}

export default DashedInputField;
