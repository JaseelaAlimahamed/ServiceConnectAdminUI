import React from "react";

function FormInput({ label, type = "text", name, value, onChange, options, id, placeholder, color = "#6b728090" }) {
  return (
    <>
      {id === "full" ? (
        <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }} className="w-full">
          <label style={{color }} className="text-sm font-semibold mb-4">
            {label}
          </label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray pl-3"
            style={{ width: "100%" }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : type !== "select" ? (
        <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }} className="w-full md:w-[48%]">
          <label style={{ color }} className="text-sm font-semibold mb-4">
            {label}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray w-full pl-3"
          />
        </div>
      ) : (
        <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }} className="w-full md:w-[48%]">
          <label style={{ color }} className="text-sm font-semibold mb-4">
            {label}
          </label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray pl-3"
            style={{ width: "100%" }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
}

export default FormInput;
