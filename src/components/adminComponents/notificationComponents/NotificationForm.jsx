import React, { useState } from "react";

import ImagePicker  from "../AdsComponents/ImagePicker";
import ButtonGroup from "../AdsComponents/ButtonGroup";

import DatePicker from "react-datepicker";

const NotificationForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [status, setStatus] = useState("Status"); // Initial status
  const [formValues, setFormValues] = useState({
    formTitle: "",
    formDescription: "",
    fromDate: "",
    fromTime: "",
    toDate: "",
    toTime: "",
    targetArea: "upto 5 km radius",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation logic
    if (!selectedImage) {
      alert("Please select an image");
      return;
    }

    if (status === "Status") {
      alert("Please select a valid status (Active or Inactive)");
      return;
    }

    alert(
      `Form Title: ${formValues.formTitle}\n` +
        `Form Description: ${formValues.formDescription}\n` +
        `From Date: ${formValues.fromDate} From Time: ${formValues.fromTime}\n` +
        `To Date: ${formValues.toDate} To Time: ${formValues.toTime}\n` +
        `Target Area: ${formValues.targetArea}\n` +
        `Status: ${status}\n` +
        `Image: ${selectedImage}`
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md md:p-12 ml-8   lg:mr-48 md:mr-1" >
      <form
        className="w-full"
        onSubmit={handleSubmit}
      >
        {/* Image Picker */}
        <ImagePicker
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        {/* Flex layout for larger screens */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Left Column */}
          <div className="">
            <div className="mt-4">
              <input
                name="formTitle"
                placeholder="Title"
                className=" p-2 border border-light_gray rounded-lg mb-2 "
                value={formValues.formTitle}
                onChange={handleChange}
                required
              />
              <br/>


              <input
                name="formDescription"
                placeholder="Description"
                className="p-2 border border-light_gray rounded-lg mb-2"
                value={formValues.formDescription}
                onChange={handleChange}
                required
              />
            </div>

            <h2 className="font-medium my-4">Schedule</h2>

            {/* From Section */}
            <div className="mb-4">
              <label className="block mb-2 ">From</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="fromDate"
                  type="date"
                  className="w-full p-2 border rounded-lg text-light_gray"
                  value={formValues.fromDate}
                  onChange={handleChange}
                  required
                />

                <input
                  name="fromTime"
                  type="time"
                  className="w-full p-2 border rounded-lg text-light_gray"
                  value={formValues.fromTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* To Section */}
            <div className="mb-4">
              <label className="block mb-2 ">To</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="toDate"
                  type="date"
                  className="w-full p-2 border rounded-lg text-light_gray"
                  value={formValues.toDate}
                  onChange={handleChange}
                  required
                />

                <input
                  name="toTime"
                  type="time"
                  className="w-full p-2 border rounded-lg text-light_gray"
                  value={formValues.toTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="ml-10">
            {/* Target Audience Section */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Target Audience</label>
              <select
                name="targetArea"
                className="w-60 p-2 border rounded-lg"
                value={formValues.targetArea}
                onChange={handleChange}
                required
              >
                <option value="upto 5 km radius">upto 5 km radius</option>
                <option value="upto 10 km radius">upto 10 km radius</option>
                <option value="upto 20 km radius">upto 20 km radius</option>
                <option value="custom radius">custom radius</option>
              </select>
            </div>

            {/* Target Specific */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Target Specific</label>
              <div className="space-y-4 ml-3">
                {["User", "Service Provider", "Franchisee"].map((label) => (
                  <label key={label} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      className="  border border-gray-300 rounded-sm"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Send Via */}
            <div className="mb-4">
              <label className="block mb-2 ">Send Via</label>
              <div className="space-y-4 ml-3">
                {["In App", "SMS", "Email"].map((method) => (
                  <label key={method} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      onChange={handleChange}
                      className=" border border-gray-300 rounded-sm text-black"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>

              


            </div>
          </div>
        </div>

        {/* Button Group */}
        <div className="mt-5 ml-9 sm:ml-32 md:ml-24 lg:ml-96 pb-1">
          <ButtonGroup
            status={status}
            setStatus={setStatus}
            handleSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;