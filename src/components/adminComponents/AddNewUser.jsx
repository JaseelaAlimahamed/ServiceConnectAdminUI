import React, { useState } from 'react';
//import InputField from "../ReUsableComponents/InputField";
import DropDown from '../ReUsableComponents/DropDown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ImageUploader from '../ReUsableComponents/ImageUploader';

const AddNewUser = () => {
  const [formData, setFormData] = useState({
    file: null,  // Initial file state set to null
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
    state: ''
  });
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); // Get the selected files
    setSelectedImages((prevImages) => [...prevImages, ...files]); // Update the state with new files

    // Log the names of the selected files in the console
    files.forEach((file) => {
        console.log('Selected file name:', file.name); // Log file name
    });
};


  // Handle phone number update
  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

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
  };

  // Handle file directly from InputField for file upload
  const handleFileChange = (file) => {
    setFormData({ ...formData, file });
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
         <ImageUploader title="Upload Profile Picture"  showTerms={false} />
  

          </div>
          
          {/* Right-side form fields */}
          <div className="space-y-4">
            {/* Add other input fields like name, address, etc. */}
            <InputField color="bg-primary" type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
            <InputField color="bg-primary" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

            {/* Date of Birth Field */}
            <DatePicker
              selected={formData.dob ? new Date(formData.dob) : null}
              onChange={handleDateChange}
              placeholderText="Select DOB"
              className="p-4 w-full rounded-2xl pl-5"
              wrapperClassName="w-full"
              isClearable
            />

            <InputField placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} color='bg-primary'/>

            {/* Phone Input Field */}
            <InputField
              type="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              color="bg-primary"
            />

            <DropDown
              label="Gender"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              options={['Male', 'Female', 'Other']}
              onChange={handleChange}
            />
            
            <InputField placeholder="House Name" color="bg-primary" type="text" name="houseName" value={formData.houseName} onChange={handleChange} />
            <InputField placeholder="Landmark" color="bg-primary" type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
            <InputField placeholder="Pincode" color="bg-primary" type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
            <InputField placeholder="District" color="bg-primary" type="text" name="district" value={formData.district} onChange={handleChange} />
            <InputField placeholder="State" color="bg-primary" type="text" name="state" value={formData.state} onChange={handleChange} />
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