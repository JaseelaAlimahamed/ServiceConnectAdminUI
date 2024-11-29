import React, { useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { BsPaperclip } from "react-icons/bs"; // Import pin icon
import DatePicker from "react-datepicker";

const InputFieldComponent = ({
  type = "text",
  placeholder,
  value,
  onChange,
  isPassword,
  showPassword,
  toggleShowPassword,
  name,
  color = "bg-light_gray", // Default color
  options = [], // Added options prop for dropdown
}) => {
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    if (type === "file" || type === "docfile") {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onChange(selectedFile); // Pass only the file object to parent component
    } else {
      onChange(e); // Ensure this updates the parent state for other input types
    }
  };

  return (
    <div className="relative">
      {/* Regular File Input */}
      {type === "file" ? (
        <>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo *
            </label>
            <div className="flex items-center justify-center h-32 w-full">
              <p className="text-gray-500">
                Drag and drop or click here to select file
              </p>
            </div>
          </div>
          <input
            type="file"
            onChange={handleInputChange}
            className={`p-4 w-full rounded-2xl ${color}`} // Dynamic color
            required
          />
        </>
      ) : type === "docfile" ? (
        // Input for document file
        <>
          <input
            type="text"
            value={file ? file.name : value}
            readOnly // Make it read-only since we show file name after selection
            placeholder={placeholder}
            className={`p-4 w-full rounded-2xl ${color} pr-12 border border-gray-400`} // Right padding for the pin icon
          />
          {/* Pin icon at the end of the input */}
          <div className="absolute right-3 top-5 cursor-pointer">
            <BsPaperclip className="text-gray-500 text-lg" />
          </div>
          <input
            type="file"
            onChange={handleInputChange}
            className="absolute inset-0 opacity-0 cursor-pointer" // Make input invisible but clickable
            accept=".pdf, .docx, .txt, .png, .jpg, .jpeg" // Limit to document types
          />
        </>
      ) : type === "date" ? (
        <DatePicker
          selected={value} // Use value passed from props
          onChange={onChange} // Update parent state on date change
          placeholderText={placeholder} // Custom placeholder
          className={`p-4 w-full rounded-2xl ${color} pl-12`} // Tailwind styles
          wrapperClassName="w-full"
          isClearable // Optional: allows clearing the date input
        />
      ) : type === "dropdown" ? (
        <select
          name={name || ""}
          value={value}
          onChange={(e) => onChange(e.target.value)} // Pass selected value to parent
          className={`p-4 w-full rounded-2xl ${color}`}
          required
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : isPassword ? (
        <>
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            name={name || ""} // Pass name prop correctly
            onChange={handleInputChange}
            className={`p-4 w-full rounded-2xl ${color} border border-gray-400`}
            required
          />
          <span
            className="absolute right-3 top-5 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? <GrHide /> : <BiShow />}
          </span>
        </>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name || ""}
          onChange={handleInputChange} // Update parent with onChange
          className={`p-4 w-full rounded-2xl ${color} border border-gray-400`}
          required
        />
      )}
    </div>
  );
};

export default InputFieldComponent;
