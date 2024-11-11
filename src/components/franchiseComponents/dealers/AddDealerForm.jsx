import React, { useState, useEffect } from "react";
import AddDealerInput from "./AddDealerInput";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AddDealerForm = ({ fieldConfig, handleSubmit, handleChange }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const initialFormData = fieldConfig.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setFormData(initialFormData);
  }, [fieldConfig]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        [e.target.name]: file,
      });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      mobile: value, // Set mobile number with country code
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fieldConfig.map((field) => {
          if (field.type === "dropdown") {
            return (
              <select
                key={field.name}
                className={field.className}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
              >
                <option selected disabled>
                  {field.placeholder}
                </option>
                {field.option.map((option, index) => (
                  <option key={index} className={field.className}>
                    {option}
                  </option>
                ))}
              </select>
            );
          } else if (field.type === "file") {
            return (
              <div key={field.name} className="my-3">
                <label className="block text-sm text-[#505050]">
                  {field.placeholder}
                </label>
                <div className="flex items-center justify-between bg-[#F3F4FF] p-2 rounded-xl">
                  <input
                    type="file"
                    name={field.name}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() =>
                      document
                        .querySelector(`input[name="${field.name}"]`)
                        .click()
                    }
                  >
                    <span className="text-[#505050]">ID Copy</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="md:ml-72 sm:ml-[20px] ml-52"
                    >
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          } else if (field.name === "mobile") {
            // Country code dropdown with flag
            return (
              <div key={field.name} className="my-3">
                <ReactPhoneInput
                  country={"us"} // default country
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  inputClass={field.className}
                  buttonClass="country-code-button"
                  dropdownClass="country-code-dropdown"
                  preferredCountries={["us", "in", "gb"]} // add preferred countries
                  inputStyle={{
                    width: "100%",

                    backgroundColor: "#F3F4FF",
                    borderRadius: "10px",
                    fontSize: "16px", 
                  }}
                />
              </div>
            );
          } else {
            return (
              <AddDealerInput
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className={field.className}
              />
            );
          }
        })}
      </form>
    </div>
  );
};

export default AddDealerForm;
