import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import AddButton from "./AddButton";
import DashedInputField from "./DashedInputField";

const InputField = ({
  label,
  type = "text",
  clearable = false,
  onClear,
  ...props
}) => (
  <div className="flex-1 min-w-[200px] relative">
    <label className="block text-sm font-medium text-[#666666] mb-1">
      {label}
    </label>
    <input
      type={type}
      className="p-4 w-full h-[47px] rounded-[8px] border border-solid border-[#666666] focus:outline-none focus:border-[2.4px] focus:border-[#438883]"
      {...props}
    />
    {clearable && (
      <span
        className="absolute right-3 top-1/2 bottom-1/2 transform -translate-y-1/2 text-[#438883] cursor-pointer font-medium text-sm"
        onClick={onClear}
      >
        Clear
      </span>
    )}
  </div>
);

function AddExpenseComponent() {
  const [date, setDate] = useState(null);
  const [invoiceValue, setInvoiceValue] = useState("");

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  const handleClearInvoice = () => {
    setInvoiceValue("");
  };

  return (
    <div>
      <div className="flex flex-col bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full p-4 space-y-4">
        <h2 className="text-3xl font-bold mb-4">Add Expense</h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <InputField
            label="Invoice No"
            value={invoiceValue}
            onChange={(e) => setInvoiceValue(e.target.value)}
            clearable={true}
            onClear={handleClearInvoice} // Pass clear handler
          />
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-[#666666] mb-1">
              Date
            </label>
            <div className="relative">
              <DatePicker
                selected={date}
                onChange={setDate}
                className="p-4 w-full h-[47px] rounded-[8px] border border-solid border-[#666666] focus:outline-none focus:border-[2.4px] focus:border-[#438883]"
                placeholderText="Select date"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] cursor-pointer">
                <FaCalendarAlt size={20} />
              </span>
            </div>
          </div>
          <InputField label="Description Remark" />
          <InputField label="DR" />
          <InputField label="CR" />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-end items-end">
          <DashedInputField
            label="INVOICE"
            onChange={(e) => setInvoiceValue(e.target.value)}
          />
          <AddButton onClick={handleAddClick} label="Add" className="mt-2" />
        </div>
      </div>
    </div>
  );
}

export default AddExpenseComponent;
