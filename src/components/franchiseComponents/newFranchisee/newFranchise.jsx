import React, { useState } from "react";
import ImageUploadComponent from "./imageUpload";
import FileFormComponent from "./fileComponent";

function NewFranchisee() {
  const [franchiseeTypes, setFranchiseeTypes] = useState([
    "Grama panchayat",
    "Municipality",
    "Cooperation",
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    phonenumber: "",
    phoneNumber2: "",
    password: "",
    landMark: "",
    pinCode: "",
    state: "",
    district: "",
    verificationId: "",
    verificationNumber: "",
    communityName: "",
    franchiseeType: "",
  });

  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : "";
    setFormData({ ...formData, dob: formattedDate });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phonenumber: value });
  };

  const handleDelete = () => {
    // Handle delete logic
  };

  const handleSave = () => {
    console.log("Saved:", formData);
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screen h-full p-4">
      {/* Type Section */}
      <div className="w-full md:w-1/4 h-auto bg-primary rounded-lg shadow-lg mr-0 md:mr-4 md:mb-0">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-dark_blue mt-3 ml-2">Type</h2>
        </div>
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center w-full space-y-5">
            {franchiseeTypes.map((type, index) => (
              <li
                key={index}
                className="bg-gray text-secondary text-center p-2 rounded-lg cursor-pointer hover:bg-blue_gray w-3/4 flex justify-center"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 bg-primary rounded-lg shadow-lg p-8 max-w-full h-auto mt-2 flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-full items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <ImageUploadComponent />
          </div>

          {/* Form Fields Section */}
          <div className="w-full md:w-2/3 ml-10">
            <FileFormComponent
              formData={formData}
              setFormData={setFormData}
              handleDateChange={handleDateChange}
              handlePhoneChange={handlePhoneChange}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col ml-40 mr-10 md:flex-row w-full mt-10 space-y-2 md:space-y-0 md:space-x-4 justify-center">
          <button
            onClick={handleDelete}
            className="w-full md:w-24 h-10 border bg-red text-primary px-3 py-1 rounded-full flex justify-center items-center"
          >
            Delete
          </button>
          <button
            onClick={handleSaveDraft}
            className="w-full md:w-36 h-10 border border-violet text-violet px-3 py-1 rounded-full flex justify-center items-center"
          >
            Save as Draft
          </button>
          <button
            onClick={handleSave}
            className="w-full md:w-24 h-10 bg-violet text-primary px-3 py-1 rounded-full flex justify-center items-center"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewFranchisee;
