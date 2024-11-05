// FileFormComponent.jsx
import React, { useState } from "react";
import InputFieldComponent from "../../reUsableComponents/InputFieldComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function FileFormComponent({ formData, setFormData, handleDateChange, handlePhoneChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-4 w-[80%] md:w-2/3">
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <div className="relative">
        <InputFieldComponent
          color="bg-gray"
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={(e) => handleDateChange(e.target.value)}
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
        value={formData.email}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <PhoneInput
        country={"us"}
        value={formData.phonenumber}
        name="phonenumber"
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
      />
      <PhoneInput
        country={"us"}
        value={formData.phoneNumber2}
        name="phoneNumber2"
        onChange={(value) => setFormData({ ...formData, phoneNumber2: value })}
        inputStyle={{
          width: "100%",
          height: "50px",
          padding: "10px",
          paddingLeft: "50px",
          borderRadius: "8px",
          backgroundColor: "#e5e7eb",
        }}
        containerStyle={{ width: "100%", marginBottom: "1rem" }}
      />
      <InputFieldComponent
        color="bg-gray"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="landMark"
        placeholder="Land Mark"
        value={formData.landMark}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="pinCode"
        placeholder="Pin Code"
        value={formData.pinCode}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="district"
        placeholder="District"
        value={formData.district}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="verificationId"
        placeholder="Verification ID"
        value={formData.verificationId}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="number"
        name="verificationNumber"
        placeholder="Verification Number"
        value={formData.verificationNumber}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="communityName"
        placeholder="Community Name"
        value={formData.communityName}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
      <InputFieldComponent
        color="bg-gray"
        type="text"
        name="franchiseeType"
        placeholder="Franchisee Type"
        value={formData.franchiseeType}
        onChange={handleChange}
        className="w-[80%] h-9 text-center placeholder-secondary"
      />
        {/* From Date and Time Fields */}
        <div className="flex flex-row space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-500 mb-1">
            From Date
          </label>
          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={(e) => handleDateTimeChange("fromDate", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray text-gray-500"
          />
        </div>
        <div className="w-1/2 mt-6">
          <input
            type="time"
            name="fromTime"
            value={formData.fromTime}
            onChange={(e) => handleDateTimeChange("fromTime", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray text-gray-500"
          />
        </div>
      </div>

      {/* To Date and Time Fields */}
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To 
          </label>
          <input
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={(e) => handleDateTimeChange("toDate", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray text-gray-700"
          />
        </div>
        <div className="w-1/2 mt-6">
          <input
            type="time"
            name="toTime"
            value={formData.toTime}
            onChange={(e) => handleDateTimeChange("toTime", e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-lg bg-gray text-gray-500"
          />
        </div>
      </div>
    </div>
    
  );
}

export default FileFormComponent;
