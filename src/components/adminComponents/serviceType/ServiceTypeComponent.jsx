import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function ServiceTypeComponent({ service }) {
  const [formData, setFormData] = useState({
    name: service.Name,
    details: service.Details,
    currency: service.Currency,
  });

  const [rows, setRows] = useState([]);
  const [rowNum, setRowNum] = useState(1);

  // Use useEffect to update the form data and rows whenever the service prop changes
  useEffect(() => {
    setFormData({
      name: service.Name,
      details: service.Details,
      currency: service.Currency,
    });
    setRows(
      service.services.map((service, index) => ({
        row: index + 1, // unique row number
        collar: service.collar,
        leadQuantity: service.leadQuantity || "",
        rate: service.rate,
        // Default lead quantity
      }))
    );
    setRowNum(service.services.length + 1); // Update rowNum based on existing services
  }, [service]);

  function handleAddRow() {
    setRows((rows) => [
      ...rows,
      { row: rowNum, collar: "", leadQuantity: "", rate: "" },
    ]);
    setRowNum(rowNum + 1);
  }

  function handleDelete(rowNum) {
    setRows(rows.filter((row) => row.row !== rowNum));
  }

  function handleInputChange(e, rowNum, field) {
    setRows(
      rows.map((row) =>
        row.row === rowNum ? { ...row, [field]: e.target.value } : row
      )
    );
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit() {
    console.log("Form Data:", formData);
    console.log("Services:", rows);
  }

  return (
    <div className="bg-white w-[70%] min-h-[58rem] rounded-[1.25rem] p-8 h-fit relative pb-20 max-sm:w-full">
      <h1 className="p-4 font-poppins text-2xl font-bold">{formData.name}</h1>
      <div className="p-2 flex flex-col gap-8">
        <div className="flex flex-col gap-3 w-[25.625rem] max-sm:w-full">
          <Input
            placeholder={formData.name}
            value={formData.name}
            onChange={handleFormChange}
            name="name"
          />
          <Input
            placeholder="Details"
            value={formData.details}
            onChange={handleFormChange}
            name="details"
          />
          <Select
            options={[
              { value: "inr", text: "INR" },
              { value: "usd", text: "USD" },
            ]}
            placeholder="Currency"
            value={formData.currency}
            onChange={handleFormChange}
            name="currency"
          />
        </div>

        <div className="flex font-input gap-[16rem]">
          <h1 className="text-sm font-bold">Collar</h1>
          <button
            className="text-sm font-bold"
            onClick={(e) => {
              handleAddRow();
              e.stopPropagation();
            }}
          >
            Add new +
          </button>
        </div>

        {rows.length > 0 && (
          <div className="flex flex-col gap-2">
            {rows.map((row) => (
              <div key={row.row} className="flex gap-2 items-center">
                <Input
                  placeholder="Collar"
                  value={row.collar}
                  onChange={(e) => handleInputChange(e, row.row, "collar")}
                />
                {formData.name === "One Time Lead" && (
                  <Input
                    placeholder="Lead Quantity"
                    value={row.leadQuantity}
                    onChange={(e) =>
                      handleInputChange(e, row.row, "leadQuantity")
                    }
                  />
                )}
                <Input
                  placeholder="Rate"
                  value={row.rate}
                  onChange={(e) => handleInputChange(e, row.row, "rate")}
                />
                <span
                  className="w-[1.5rem] aspect-square cursor-pointer"
                  onClick={(e) => {
                    handleDelete(row.row);
                    e.stopPropagation();
                  }}
                >
                  <FaRegTrashAlt color="black" size={"1.5rem"} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-4 justify-end absolute bottom-5 right-5 max-sm:flex-col w-[90%]">
        <Button variant="delete">Delete</Button>
        <Button variant="secondary">Save As Draft</Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </div>
  );
}

function Input({ placeholder, value, onChange, name }) {
  return (
    <input
      type="text"
      className="bg-blue_bg w-full h-[3.75rem] placeholder-secondary px-4 font-input text-sm"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

function Select({ options, placeholder, value, onChange, name }) {
  return (
    <select
      className="bg-blue_bg w-full h-[3.75rem] px-4 font-input text-sm"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

function Button({ variant, children, width, ...rest }) {
  const bgColor =
    variant === "primary"
      ? "bg-violet"
      : variant === "secondary"
      ? "bg-primary"
      : variant === "delete"
      ? "bg-red"
      : variant === "add"
      ? "bg-blue_bg"
      : "";
  const textColor =
    variant === "secondary"
      ? "text-violet"
      : variant === "add"
      ? "text-black"
      : "text-primary";
  const buttonWidth = width ? width : variant === "add" ? "w-full" : "";
  return (
    <button
      className={`rounded-[2.5rem] font-normal px-10 py-2 ${buttonWidth} ${bgColor} ${textColor} ${
        variant === "secondary" ? "border-2 border-violet" : ""
      } text-lg p-2`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ServiceTypeComponent;
