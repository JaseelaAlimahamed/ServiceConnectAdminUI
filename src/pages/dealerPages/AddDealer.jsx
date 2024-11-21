import React, { useEffect, useState } from "react";
import InputFieldComponent from "../../components/reUsableComponents/InputFieldComponent";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createDealer } from "../../service/api/franchise/PostApi.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


function AddDealer() {

  const navigate = useNavigate();  // Correctly call useNavigate inside the component


  const [postData, setPostData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    landmark: "",
    pin_code: "",
    watsapp: "",
    country_code: 91,
    district: null,
    state: null,
    about: "",
    franchisee: null,
    status: "",
    verification_id: "",
    verificationid_number: "",
    service_providers: null,
    image: "",  // Empty image URL
    id: ""  // Empty ID
  });

  // Initialize formData state based on postData
  const [formData, setFormData] = useState({
    fullName: postData.full_name,
    address: postData.address,
    email: postData.email,
    phoneNumber: postData.phone_number,
    watsapp: postData.watsapp,
    countryCode: postData.country_code,
    landmark: postData.landmark,
    pinCode: postData.pin_code,
    district: postData.district,
    state: postData.state,
    about: postData.about,
    franchisee: postData.franchisee,
    status: postData.status || "Active",
    verificationId: postData.verification_id,
    verificationIdNumber: postData.verificationid_number,
    serviceProviders: postData.service_providers || 1,
    image: postData.image, // Include image field
    id: postData.id // Include id field
  });

  // Synchronize formData whenever postData changes
  useEffect(() => {
    setFormData({
      fullName: postData.full_name,
      address: postData.address,
      email: postData.email,
      phoneNumber: postData.phone_number,
      watsapp: postData.watsapp,
      countryCode: postData.country_code,
      landmark: postData.landmark,
      pinCode: postData.pin_code,
      district: postData.district,
      state: postData.state,
      about: postData.about,
      franchisee: postData.franchisee,
      status: postData.status || "Active",
      verificationId: postData.verification_id,
      verificationIdNumber: postData.verificationid_number,
      serviceProviders: postData.service_providers || 1,
      image: postData.image,  // Include image field
      id: postData.id // Include id field
    });
  }, [postData]); // Dependency array e

  const handleSave = async () => {
    try {
      const updatedFormData = {
        ...formData,
        district: Number(formData.district),
        franchisee: Number(formData.franchisee),
        state: Number(formData.state)
      };
      console.log(formData); // This will log the updated formData
      const response = await createDealer(updatedFormData); // Pass formData instead of postData
      if (response.status === 201) {
        console.log("Dealer created successfully:", response);
        alert("Dealer created successfully")
        setTimeout(() => {
          navigate("/Dealers");
        }, 1000);

      }
    } catch (error) {
      console.error("Error creating dealer:", error);
    }
  };
  

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file }); // Changed from profileImage to image
    }
  };

  
  
  
  
  const handleSaveDraft = () => {
    console.log("Draft saved:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screen h-full p-4">
      {/* Form Section */}
      <form className="flex-1 bg-primary rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start">
        <div className="flex flex-col items-center w-full md:w-1/3 mr-6 mb-4">
          <div className="flex justify-center items-center bg-gray w-40 h-40 rounded-lg mb-4">
            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageUpload"
              onChange={handleFileChange}
            />
            <label
              htmlFor="imageUpload"
              className="w-full h-full flex flex-col justify-center items-center border-gray-400 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-lg"
            >
              {/* Display image preview if selected */}
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-sm text-center">
                  Drag & Drop or Click to Upload
                </span>
              )}
            </label>
          </div>
        </div>

        <div className="space-y-4 w-full md:w-2/3">
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="franchisee"
            placeholder="Franchise No"
            value={formData.franchisee} // This field should be something specific like franchise name
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="about"
            placeholder="About"
            value={formData.about} // This field should be something specific like franchise name
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          <PhoneInput
            country={"in"}
            value={formData.phoneNumber}
            name="phoneNumber"
            onChange={(value) => handlePhoneChange(value, "phoneNumber")}
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#e5e7eb",
            }}
            containerStyle={{ marginBottom: "1rem" }}
          />
          <PhoneInput
            country={"in"}
            value={formData.watsapp}
            name="watsapp"
            onChange={(value) => handlePhoneChange(value, "watsapp")}
            inputStyle={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#e5e7eb",
            }}
            containerStyle={{ marginBottom: "1rem" }}
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="landmark"
            placeholder="Land Mark"
            value={formData.landmark}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />

          <InputFieldComponent
            type="dropdown"
            name="verificationId"
            placeholder="Select Verification ID"
            value={formData.verificationId}
            onChange={(selectedValue) =>
              setFormData({ ...formData, verificationId: selectedValue })
            }
            options={["Aadhar","Voter-ID", "Passport", "Pan-card", "License"]}
            color="bg-gray"
          />
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="verificationIdNumber"
            placeholder="Verification No"
            value={formData.verificationIdNumber}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            color="bg-gray"
            type="docfile"
            name="idCopy"
            placeholder="ID Copy"
            onChange={handleFileChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          <InputFieldComponent
            type="dropdown"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={(selectedValue) =>
              setFormData({ ...formData, status: selectedValue })
            }
            options={["Active", "Inactive", "Pending"]}
            color="bg-gray"
          />

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleSaveDraft}
              type="button"
              className="w-36 h-10 border bg-[#e20202] border-[#e20202] text-white rounded-full"
            >
              Delete
            </button>
            <button
              onClick={handleSaveDraft}
              type="button"
              className="w-36 h-10 border border-violet text-violet rounded-full"
            >
              Save as Draft
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="w-24 h-10 bg-violet text-white rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDealer;
