import React, { useState } from 'react';
import InputFieldComponent from "../reUsableComponents/InputFieldComponent";
import DropDown from '../reUsableComponents/DropDown';
import InputField from "../ReUsableComponents/InputFieldComponent";
import DropDown from '../ReUsableComponents/DropDown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ImageUploader from '../reUsableComponents/ImageUploader';

const AddNewUser = () => {
  const [formData, setFormData] =useState({
     // Initial file state set to null
    fullName: '',
    address: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    houseName: '',
    landmark: '',
    pincode: '',
    district: '',
    state: '',
    file:null,
  });
  
  

  // Handle date selection and formatting
  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split('T')[0] : ''; // Convert to YYYY-MM-DD format
    setFormData({ ...formData, dob: formattedDate });
  };

  // Handle generic input change including file input
  const handleChange = (e) => {
    
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, file: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }



   

    // Check if the field is for phone numbers, allow only digits
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove any non-digit characters
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

   // Handle file selection from ImageUploader component
   const handleFileSelect = (file) => {
    console.log('Selected file:', file);  // Debug to check if the file is being passed
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,  // Set the file to formData
    }));
  };

  // Form submission
  const onFormSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      fileName: formData.file ? formData.file.name : 'No file uploaded', // Include file name or note if not uploaded
    };
    console.log(submissionData); // Log the formData with the file name
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-4xl w-full" onSubmit={onFormSubmit}>
        <h1 className="text-2xl font-bold text-center mb-8">Add New User</h1>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* File Upload */}
          <div>
          
      {/* Hide terms and conditions for this specific page */}
         <ImageUploader title="Upload Profile Picture"  showTerms={false} onFileSelect={handleFileSelect} />
  

          </div>
          
          {/* Right-side form fields */}
          <div className="space-y-4">
            {/* Add other input fields like name, address, etc. */}
            <InputFieldComponent color="bg-primary" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
            <InputFieldComponent color="bg-primary" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

            {/* Date of Birth Field */}
            <DatePicker
              selected={formData.dob ? new Date(formData.dob) : null}
              onChange={handleDateChange}
              placeholderText="Select DOB"
              className="p-4 w-full rounded-2xl pl-5"
              wrapperClassName="w-full"
              isClearable
            />

            <InputFieldComponent placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} color='bg-primary'/>

            {/* Phone Input Field */}
            <InputFieldComponent
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number with country code"
              color="bg-primary"
              name="phone"
            />

            <DropDown
              label="Gender"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              options={['Male', 'Female', 'Other']}
              onChange={handleChange}
            />
            
            <InputFieldComponent placeholder="House Name" color="bg-primary" type="text" name="houseName" value={formData.houseName} onChange={handleChange} />
            <InputFieldComponent placeholder="Landmark" color="bg-primary" type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
            <InputFieldComponent placeholder="Pincode" color="bg-primary" type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
            <InputFieldComponent placeholder="District" color="bg-primary" type="text" name="district" value={formData.district} onChange={handleChange} />
            <InputFieldComponent placeholder="State" color="bg-primary" type="text" name="state" value={formData.state} onChange={handleChange} />
          </div>
        </div>
          
 


        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;