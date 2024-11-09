import React from "react";

function FormInput({ label, type = "text", name, value, onChange, options,id }) {
  return (
    <>
      {id === "full" ? (
        <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }} className="w-full">
          <label style={{ marginBottom: "5px", color: "#6b728090" }} className="text-sm font-semibold">
            {label}
          </label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray"
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
          <label style={{ marginBottom: "5px", color: "#6b728090" }} className="text-sm font-semibold">
            {label}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray w-full"
          />
        </div>
      ) : (
        <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }} className="w-full md:w-[48%]">
          <label style={{ marginBottom: "5px", color: "#6b728090" }} className="text-sm font-semibold">
            {label}
          </label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="text-sm p-2 border-b bg-blue_bg border-b-gray"
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

