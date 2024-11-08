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
  <div className="flex-1 min-w-[160px] relative">
    <label className="block text-sm font-medium text-[#666666] mb-1">
      {label}
    </label>
    <input
      type={type}
      className="p-2.5 w-full h-[40px] rounded-[6px] border border-solid border-[#666666] focus:outline-none focus:border-[2px] focus:border-[#438883]"
      {...props}
    />
    {clearable && (
      <span
        className="absolute right-3 top-2/3 transform -translate-y-1/2 text-[#438883] cursor-pointer font-medium text-sm"
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
    <div className="bg-primary mt-4 rounded-xl p-5 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Add Expense</h2>

      <div className="flex flex-wrap gap-4">
        <InputField
          label="Invoice No"
          value={invoiceValue}
          onChange={(e) => setInvoiceValue(e.target.value)}
          clearable={true}
          onClear={handleClearInvoice}
        />

        <div className="flex-1 min-w-[160px]">
          <label className="block text-sm font-medium text-[#666666] mb-1">
            Date
          </label>
          <div className="relative">
            <DatePicker
              selected={date}
              onChange={setDate}
              className="p-2.5 w-full h-[40px] rounded-[6px] border border-solid border-[#666666] focus:outline-none focus:border-[2px] focus:border-[#438883]"
              placeholderText="Select date"
              portalId="root-portal"
              withPortal
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] cursor-pointer">
              <FaCalendarAlt size={18} />
            </span>
          </div>
        </div>

        <InputField label="Description Remark" />
        <InputField label="DR" />
        <InputField label="CR" />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4 justify-end mt-4">
        <div className="w-full  md:min-w-[160px]">
          <DashedInputField
            label="INVOICE"
            onChange={(e) => setInvoiceValue(e.target.value)}
          />
        </div>
        <AddButton
          onClick={handleAddClick}
          label="Add"
          className="w-full md:w-auto mt-2 md:mt-0 text-center"
        />
      </div>
    </div>
  );
}

export default AddExpenseComponent;
