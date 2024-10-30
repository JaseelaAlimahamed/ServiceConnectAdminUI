import React, { useState } from "react";

const EditProfile = ({ user, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    password: "",
    nationality: user.country,
    designation: user.designation,
    countryCode: "+91",
    address : user.address
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.countryCode + formData.phone,
      nationality: formData.nationality,
      designation: formData.designation,
      address:formData.address,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-full mx-auto">
      <h1 className="font-nunito text-2xl sm:text-3xl leading-8 text-left">Edit Profile</h1>
      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
        {/* First Name */}
        <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        {/* Last Name */}
        <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        {/* Email */}
        <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} type="email" />
        <InputField label="address" name="address" value={formData.address} onChange={handleInputChange} type="address" />
        {/* Phone Number */}
        <div className="relative flex">
          <select name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="w-20 border">
            <option value="+91">+91</option>
            <option value="+1">+1</option>
          </select>
          <InputField label="Phone Number" name="phone" value={formData.phone} onChange={handleInputChange} />
        </div>
        {/* Nationality */}
        <SelectField label="Nationality" name="nationality" value={formData.nationality} options={["India", "USA"]} onChange={handleInputChange} />
        {/* Designation */}
        <SelectField label="Designation" name="designation" value={formData.designation} options={["Frontend Developer", "Backend Developer"]} onChange={handleInputChange} />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white mt-4 py-2 rounded-lg">Save</button>
    </form>
  );
};

const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="relative">
    <label className="absolute left-4 top-2 text-gray-500">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="w-full h-14 p-4 rounded-lg border focus:border-blue-500" />
  </div>
);

const SelectField = ({ label, name, value, options, onChange }) => (
  <div className="relative">
    <label className="absolute left-4 top-2 text-gray-500">{label}</label>
    <select name={name} value={value} onChange={onChange} className="w-full h-14 p-4 rounded-lg border focus:border-blue-500">
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default EditProfile;
