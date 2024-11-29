import React, { useEffect, useState } from "react";
import InputFieldComponent from "../../components/reUsableComponents/InputFieldComponent.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createDealer } from "../../service/api/franchise/PostApi.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import {
  getStates,
  getDistrictsByState,
} from "../../service/api/franchise/GetApi.js";
import { BsPaperclip } from "react-icons/bs";
import DeleteModal from "../../components/adminComponents/CategorySubCategory/CategoryComponents/DeleteModal.jsx";
import ReUsableModal from "../../components/reUsableComponents/ReusableModal.jsx";

function AddDealer() {
  const navigate = useNavigate(); // Correctly call useNavigate inside the component
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch states when the component loads
    const fetchStates = async () => {
      try {
        const statesData = await getStates();
        setStates(statesData);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);
  const handleStateChange = async (selectedStateName) => {
    // Find selected state object based on name
    const selectedState = states.find(
      (state) => state.name === selectedStateName
    );

    if (!selectedState) {
      console.error("State not found:", selectedStateName);
      return;
    }

    // Set selected state ID in postData and reset district
    setFormData((prev) => ({
      ...prev,
      state: selectedState.id,
      district: "", // Reset district when state changes
    }));

    // Fetch districts based on the selected state ID
    const filteredDistricts = await getDistrictsByState(selectedState.id); // Function to fetch districts by state
    setDistricts(filteredDistricts);
  };
  const handleDistrictChange = (selectedDistrictName) => {
    const selectedDistrict = districts.find(
      (district) => district.name === selectedDistrictName
    );

    if (!selectedDistrict) {
      console.error("District not found:", selectedDistrictName);
      return;
    }

    // Set selected district ID in postData
    setFormData((prev) => ({
      ...prev,
      district: selectedDistrict.id,
    }));
  };

  const [postData, setPostData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    landmark: "",
    pin_code: "",
    watsapp: "",
    country_code: 91,
    state: "",
    district: "",
    about: "",
    franchisee: null,
    status: "",
    verification_id: "",
    verificationid_number: "",
    service_providers: null,
    image: "",
    idCopy: "",
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
    state: postData.state,
    district: postData.district,
    about: postData.about,
    franchisee: postData.franchisee,
    status: postData.status || "Active",
    verificationId: postData.verification_id,
    verificationIdNumber: postData.verificationid_number,
    serviceProviders: postData.service_providers || 1,
    image: postData.image, // Include image field
    idCopy: postData.idCopy, // Include id field
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
      state: postData.state,
      district: postData.district,
      about: postData.about,
      franchisee: postData.franchisee || 2,
      status: postData.status || "Active",
      verificationId: postData.verification_id,
      verificationIdNumber: postData.verificationid_number,
      serviceProviders: postData.service_providers || 1,
      image: postData.image, // Include image field
      idCopy: postData.idCopy, // Include id field
    });
  }, [postData]); // Dependency array e

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      if (!validate()) {
        // Exit if validation fails
        return;
      }

      // Prepare the form data for submission
      const updatedFormData = {
        ...formData,
        image: formData.image || null, // Ensure proper handling of optional fields
        idCopy: formData.idCopy || null,
      };

      // Uncomment and use your API call
      const response = await createDealer(updatedFormData);
      // console.log(formData.idCopy)
      // console.log(formData.image)
      // console.log(updatedFormData)

      if (response && response.status === 201) {
        // Handle successful response
        // alert("Dealer created successfully");
        setIsModalOpen(true);
        // Optionally reset errors
        setErrors({
          phoneNumber: false,
          watsapp: false,
        });
      }
    } catch (error) {
      console.error("Error creating dealer:", error);
      // Handle errors appropriately
      alert("An error occurred while creating the dealer. Please try again.");
    }
  };

  const handleCloseConModal = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      setFormData({
        fullName: "",
        address: "",
        email: "",
        phoneNumber: "",
        watsapp: "",
        countryCode: "",
        landmark: "",
        pinCode: "",
        state: "",
        district: "",
        about: "",
        franchisee: "",
        status: "",
        verificationId: "",
        verificationIdNumber: "",
        serviceProviders: "",
        image: null,
        idCopy: null,
      });

      setErrors({});
    }, 1000);

    setTimeout(() => {
      navigate("/Dealers");
    }, 500); // Navigate after clearing fields
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePhoneChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false }); // Reset error for this field
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.idCopy) newErrors.idCopy = "ID Copy is required";
    if (!formData.image) newErrors.image = "Image is required";
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.about) newErrors.about = "About is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.watsapp) newErrors.watsapp = "Phone Number is required";
    if (!formData.landmark) newErrors.landmark = "LandMark Code is required";
    if (!formData.pinCode) newErrors.pinCode = "Pin Code is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.verificationId)
      newErrors.verificationId = "Select a Verification ID";
    if (!formData.verificationIdNumber)
      newErrors.verificationIdNumber = "Verification Number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleFileChange = (event, field) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // console.log(`Selected file for ${field}:`, file);
      setFormData((prevState) => ({
        ...prevState,
        [field]: file, // Dynamically update the correct field using the `field` parameter
      }));
    }
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", formData);
  };
  const handleClear = () => {
    setFormData({
      fullName: "",
      address: "",
      email: "",
      phoneNumber: "",
      watsapp: "",
      countryCode: "",
      landmark: "",
      pinCode: "",
      state: "",
      district: "",
      about: "",
      franchisee: "",
      status: "",
      verificationId: "",
      verificationIdNumber: "",
      serviceProviders: "",
      image: "", // Include image field
      idCopy: "", // Include id field
    });
    setDeleteModalOpen(false);
  };
  const handleOpenModal = () => {
    setDeleteModalOpen(true); // Open the modal
  };
  const handleCloseModal = () => {
    setDeleteModalOpen(false); // Close the modal without clearing
  };

  const [errors, setErrors] = useState({});

  return (
    <div className="flex flex-col md:flex-row bg-gray min-h-screen h-full p-4">
      {/* Form Section */}
      <form
        className="flex-1 bg-primary rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start"
        onSubmit={handleSave}
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center w-full md:w-1/3 mr-6 mb-4">
          <div className="flex justify-center items-center bg-gray w-40 h-40 rounded-lg mb-4">
            {/* Image Upload */}
            <input
              type="file"
              accept=".pdf, .docx, .txt, .png, .jpg, .jpeg" // Limit to document types
              className="hidden"
              id="imageUpload"
              onChange={(e) => handleFileChange(e, "image")}
              name="image"
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
          {errors.image && <p className="text-red text-sm">{errors.image}</p>}
        </div>

        <div className="space-y-4 w-full md:w-2/3">
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary "
          />
          {errors.fullName && (
            <p className="text-red text-sm">{errors.fullName}</p>
          )}
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          {errors.address && (
            <p className="text-red text-sm ">{errors.address}</p>
          )}
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
          {errors.about && <p className="text-red text-sm">{errors.about}</p>}
          <InputFieldComponent
            color="bg-gray"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-10 text-center placeholder-secondary"
          />
          {errors.email && <p className="text-red text-sm">{errors.email}</p>}
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
              border: errors.phoneNumber ? "1px solid red" : "1px solid #ccc", // Red border if invalid
            }}
            containerStyle={{ marginBottom: "1rem" }}
          />
          {errors.phoneNumber && (
            <p style={{ color: "red", fontSize: "12px" }}>
              Please enter a valid phone number.
            </p>
          )}

          {/* WhatsApp Number Input */}
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
              border: errors.watsapp ? "1px solid red" : "1px solid #ccc", // Red border if invalid
            }}
            containerStyle={{ marginBottom: "1rem" }}
          />
          {errors.watsapp && (
            <p style={{ color: "red", fontSize: "12px" }}>
              Please enter a valid WhatsApp number.
            </p>
          )}
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="landmark"
            placeholder="Land Mark"
            value={formData.landmark}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          {errors.landmark && (
            <p className="text-red text-sm">{errors.landmark}</p>
          )}
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          {errors.pinCode && (
            <p className="text-red text-sm">{errors.pinCode}</p>
          )}
          <InputFieldComponent
            color="bg-gray"
            type="dropdown"
            name="state"
            placeholder="Select State"
            value={
              states.find((state) => state.id === formData.state)?.name || "" // Find the matching state's name
            }
            onChange={(selectedStateName) => {
              handleStateChange(selectedStateName); // Pass the state name
            }}
            options={states.map((state) => state.name)} // Transform `states` into an array of names
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          {errors.state && <p className="text-red text-sm">{errors.state}</p>}
          <InputFieldComponent
            color="bg-gray"
            type="dropdown"
            name="district"
            placeholder="Select District"
            value={
              districts.find((district) => district.id === formData.district)
                ?.name || "" // Find the matching district's name
            }
            onChange={(selectedDistrictName) => {
              handleDistrictChange(selectedDistrictName); // Pass the district name to handleDistrictChange
            }}
            options={districts.map((district) => district.name)} // Use only the name as the option
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          {errors.district && (
            <p className="text-red text-sm">{errors.district}</p>
          )}
          <InputFieldComponent
            type="dropdown"
            name="verificationId"
            placeholder="Select Verification ID"
            value={formData.verificationId}
            onChange={(selectedValue) =>
              setFormData({ ...formData, verificationId: selectedValue })
            }
            options={["Aadhar", "Voter-ID", "Passport", "Pan-card", "License"]}
            color="bg-gray"
          />
          {errors.verificationId && (
            <p className="text-red text-sm">{errors.verificationId}</p>
          )}
          <InputFieldComponent
            color="bg-gray"
            type="text"
            name="verificationIdNumber"
            placeholder="Verification No"
            value={formData.verificationIdNumber}
            onChange={handleInputChange}
            className="w-[80%] h-9 text-center placeholder-secondary"
          />
          {errors.verificationIdNumber && (
            <p className="text-red text-sm">{errors.verificationIdNumber}</p>
          )}
          <div className="flex flex-col items-center w-full">
            <div className="flex justify-center items-center bg-gray w-full h-14 rounded-xl">
              {/* File Upload */}
              <input
                type="file"
                accept=".pdf, .docx, .txt, .png, .jpg, .jpeg" // Limit to document types
                className="hidden"
                id="fileUpload"
                onChange={(e) => handleFileChange(e, "idCopy")}
                name="idCopy"
              />
              <label
                htmlFor="fileUpload"
                className="w-full h-full flex flex-col justify-center items-start ml-5 font-medium border-gray-400 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-lg"
              >
                {formData.idCopy ? (
                  <p className="mt-2 text-sm text-gray-500">
                    {formData.idCopy.name}
                  </p>
                ) : (
                  "ID Copy"
                )}
              </label>
              <div className="mr-3">
                <BsPaperclip className="text-gray-500 text-lg" />
              </div>
            </div>
          </div>
          {errors.idCopy && <p className="text-red text-sm">{errors.idCopy}</p>}

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
              onClick={handleOpenModal}
              type="button"
              className="w-36 h-10 border bg-[#e20202] border-[#e20202] text-white rounded-full"
            >
              Delete
            </button>

            <DeleteModal
              isOpen={deleteModalOpen}
              onClose={handleCloseModal}
              onConfirm={handleClear}
            />
            <button
              onClick={handleSaveDraft}
              type="button"
              className="w-36 h-10 border border-violet text-violet rounded-full"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="w-24 h-10 bg-violet text-white rounded-full"
              onClick={handleSave}
            >
              Save
            </button>
            <ReUsableModal
              isOpen={isModalOpen}
              onConfirm={handleCloseConModal}
              heading="Success!"
              message="Dealer details have been successfully saved."
              confirm={true}
              confirm_label="OK"
            ></ReUsableModal>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDealer;
