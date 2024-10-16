import React, { useState } from "react"; // Import useState
import { useFormik } from "formik";
import Inputfield from "./Inputfield";
import { IoIosAttach } from "react-icons/io";
import { TiDocumentAdd } from "react-icons/ti";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";


const Formreuse = ({
  initialValues,
  onSubmit,
  fields,
}) => {
  const [val, setVal] = useState([]); // Initialize state for files

  // Formik hook
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
  });



  console.log(val, "Selected Files");

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col mt-7 space-y-4"
    >
      {/* Map through the fields array and render inputs dynamically */}
      {fields.map((field) => {

if (field.type === "select") {
  return (
    <div key={field.name} className="flex items-center mt-2 w-full lg:w-1/2">
      <div className="relative w-[350px]">
        <select
          name={field.name}
          value={formik.values[field.name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="appearance-none bg-white border-2 font-bold shadow-xl border-black text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-10 py-2 focus:outline-none"
        >
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* IoMdArrowDropdown icon inside the field */}
        <IoMdArrowDropdown className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
      {formik.touched[field.name] && formik.errors[field.name] ? (
        <div className="text-red-500 text-sm mt-1">
          {formik.errors[field.name]}
        </div>
      ) : null}
    </div>
  );
}
        
        
        else if (field.type === "date") {
          return (
            <div key={field.name} className="w-full lg:w-1/2">
              <Inputfield
                icon={field.icon}
                showIcon={field.showIcon}
                inputIconclass={field.inputIconclass}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inputclass={field.inputclass}
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </div>
              ) : null}
            </div>
          );
        } 

        else if (field.type === "file") {
          return (
            <div key={field.name} className="flex items-center mt-2 w-full lg:w-1/2">
              <div className="relative w-[350px]">
                {/* File input */}
                <div className={`appearance-none bg-white text-[15px] border-2 font-bold shadow-xl border-black text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-10 py-2 focus:outline-none`}>
                  <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
                  <input
                    className="hidden"
                    id={field.name}
                    type="file"
                    onChange={(e) => {
                      formik.setFieldValue(field.name, e.target.files[0]);
                    }}
                  />
                  <div className="flex justify-between w-full">
                    <span className="mr-8 text-gray-700">
                      {formik.values[field.name]?.name || field.placeholder || "File Name (Certificate/License)"}
                    </span>
                    <button type="button" onClick={() => document.getElementById(field.name).click()}>
                      <IoIosAttach className="text-lg " />
                    </button>
                  </div>
                </div>
              </div>

              {/* TiDocumentAdd icon and file input positioned separately */}
              {field.placeholder === "Certificate / License" && (
                <div className="items-center">
                  <TiDocumentAdd
                    style={{ cursor: "pointer", fontSize: "40px" }}
                    className="text-3xl"
                    onClick={() => document.getElementById(`separate-file-input-${field.name}`).click()} // Trigger separate file input
                  />
                  {/* Hidden file input that is triggered by the TiDocumentAdd icon */}
                  <input
                    type="file"
                    id={`separate-file-input-${field.name}`}
                    className="hidden"
                    onChange={(e) => {
                      formik.setFieldValue(`${field.name}-file`, e.target.files[0]); // Update Formik state with selected file for the separate file field
                    }}
                  />
                  {/* Display the selected file name next to the icon */}
                  {formik.values[`${field.name}-file`] && (
                    <span className="ml-4 text-gray-700 text-sm">
                      {formik.values[`${field.name}-file`]?.name}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        }
        

         else {
          return (
            <div key={field.name} className="w-full lg:w-1/2">
              <Inputfield
                icon={field.icon}
                showIcon={field.showIcon}
                inputIconclass={field.inputIconclass}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                inputclass={field.inputclass}
              />
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors[field.name]}
                </div>
              ) : null}
            </div>
          );
        }
      })}

      {/* File input area for dynamically added inputs */}
      <div className="flex flex-col ml-[350px]">
        {val.map((data, i) => (
          <div key={`file-input-${i}`} className="w-full">
            <input
              type="file"
              onChange={(e) => handleChange(e, i)} // Handle file input change
              className="w-full"
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default Formreuse;
