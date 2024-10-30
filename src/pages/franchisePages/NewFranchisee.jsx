import React, { useState } from "react";
import InputFieldComponent from "../../components/reUsableComponents/InputFieldComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"; 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 

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
  const [isFocused, setIsFocused] = useState(false);
  const handleDelete = (type) => {
    setFranchiseeTypes(franchiseeTypes.filter((t) => t !== type));
  };

  const handleSave = () => {
    console.log("Saved:", formData);
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", formData);
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : ""; 
    setFormData({ ...formData, dob: formattedDate });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phonenumber: value });
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screnn h-full  p-4 ">
      {/* Type Section */}
      <div className="w-full md:w-1/4 h-auto bg-primary rounded-lg shadow-lg  mr-0 md:mr-4  md:mb-0">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold   text-dark_blue mt-3 ml-2">
            Type
          </h2>
        </div>
        {/* type */}
        <div className="flex flex-col items-center">
          <ul className="flex flex-col items-center w-full  space-y-5">
            {franchiseeTypes.map((type, index) => (
              <li
                key={index}
                className="bg-gray text-secondary text-center p-2  mb- rounded-lg cursor-pointer hover:bg-blue_gray w-3/4  flex justify-center "
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <form className="flex-1 bg-primary rounded-lg shadow-lg p-8 relative max-w-full  h-auto overflow-auto mt-2 flex flex-col md:flex-row items-start">
        <div className="flex flex-col items-center w-full md:w-1/3 mr-6 mb-4">
          <div className="flex justify-center items-center bg-gray w-40 h-40 rounded-lg mb-4">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageUpload"
            />
            <label
              htmlFor="imageUpload"
              className="w-full h-full flex flex-col justify-center items-center  border-gray-400 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-lg"
            >
              <span className="text-sm text-center">
                Drag & Drop or Click to Upload
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-4 w-[80%] md:w-2/3">
          {" "}
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="address"
            placeholder="Address"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <div className="relative">
            <InputFieldComponent
              color="bg-gray"
              type="date"
              name="dob"
              placeholder="Date of Birth"
              onChange={handleDateChange}
              className="w-[80%] h-9 text-center placeholder-secondary"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-500" />
            </span>
          </div>
          <InputFieldComponent
            color="bg-gray"
            type="email"
            name="email"
            placeholder="Email"
            className="w-[80%] h-9 text-center placeholder-secondary"
            inputStyle={{
              width: "80%",
            }}
          />
          <PhoneInput
            country={"us"}
            value={formData.phonenumber}
            name="phoneNo"
            onChange={handlePhoneChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            inputStyle={{
              width: "100%",
              height: "50px",
              padding: "10px",
              paddingLeft: "50px",
              borderRadius: "8px",
              backgroundColor: "#e5e7eb",
              border: isFocused ? "2px solid black" : "none",
            }}
            containerStyle={{ width: "100%", marginBottom: "1rem" }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
          />
          <PhoneInput
            country={"us"}
            value={formData.phoneNumber2}
            name="phoneNo2"
            onChange={handlePhoneChange}
            inputStyle={{
              width: "100%",
              height: "50px",
              padding: "10px",
              paddingLeft: "50px",
              borderRadius: "8px",
              backgroundColor: "#e5e7eb",
              border: "none",
            }}
            containerStyle={{ width: "100%", marginBottom: "1rem" }}
            buttonStyle={{
              border: "none",
              background: "transparent",
            }}
          />
          <InputFieldComponent
            color="bg-gray"
            type="password"
            name="password"
            placeholder="Password"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="landMark"
            placeholder="Land Mark"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="state"
            placeholder="State"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="district"
            placeholder="District"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="verificationId"
            placeholder="Verification ID"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="number"
            name="verificationNumber"
            placeholder="Verification no"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="communityName"
            placeholder="Community Name"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="franchiseeType"
            placeholder="Franchisee Type"
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <div className="flex flex-col md:flex-row justify-end bottom-0 right-0 mr-2 p-4 space-y-2 md:space-y-0 md:space-x-4">
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
      </form>
    </div>
  );
}

export default NewFranchisee;
