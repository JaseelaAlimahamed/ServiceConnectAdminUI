import React from "react";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
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
}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null); // State to hold image preview URL

  const handleInputChange = (e) => {
    if (type === "file") {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      onChange(selectedFile); // Pass only the file object to parent component

      // Generate image preview URL using FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Set the preview URL
      };
      if (selectedFile) {
        reader.readAsDataURL(selectedFile); // Read file to get preview URL
      } else {
        setPreview(null); // Reset the preview if no file is selected
      }
    } else {
      onChange(e); // Ensure this updates the parent state for other input types
    }
  };

  return (
    <div className="relative">
      {/* File Input */}
      {type === "file" ? (
        <>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Photo *
            </label>
            <div className="flex items-center justify-center h-32 w-full">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-full w-auto object-cover"
                />
              ) : (
                <p className="text-gray-500">
                  Drag and drop or click here to select file
                </p>
              )}
            </div>
          </div>
          <input
            type="file"
            onChange={handleInputChange}
            className={`p-4 w-full rounded-2xl ${color}`} // Dynamic color
            required
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
      ) : isPassword ? (
        <>
          <input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            name={name || ""} // Pass name prop correctly
            onChange={handleInputChange}
            className={`p-4 w-full rounded-2xl ${color}`}
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
          className={`p-4 w-full rounded-2xl ${color}`}
          required
        />
      )}
    </div>
  );
};

export default InputFieldComponent;
