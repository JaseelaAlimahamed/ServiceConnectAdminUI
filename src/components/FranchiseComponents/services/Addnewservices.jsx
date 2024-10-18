import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaCaretDown, FaPaperclip } from "react-icons/fa"; // Import the icons from react-icons
import Formreuse from "./reusableComponent/Formreuse";
import Imageupload from "./reusableComponent/Imageupload";
import { LuImage } from "react-icons/lu";
import Buttonreuse from "./reusableComponent/Buttonreuse";

// Define the initial values for the form
const initialValues = {
  servicetitle: "",
  description: "",
  gstcode: "",
  servicecategory: "",
  servicesubcatagory: "",
  certificate: "",
  filename: "",
};

// Define the fields for the form
const fields = [
  {
    name: "description",
    type: "text",
    icon: FaUser, // Use react-icons component
    showIcon: false,
    inputIconclass: "absolute inset-y-0 right-5 flex items-center text-white",
    placeholder: "Description",
    inputclass:
      "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
  {
    name: "gstcode",
    type: "text",
    icon: FaCalendarAlt, // Use react-icons component
    showIcon: false,
    inputIconclass: "absolute inset-y-0 left-3 top-6 flex items-center text-white",
    placeholder: "GST Code",
    inputclass:
      "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
  {
    name: "servicecategory",
    type: "select",
    icon: FaCaretDown, // Use react-icons component
    showIcon: true,
    inputIconclass:
      "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
    options: [
      { value: "", label: "Select Service Category" },
      { value: "cat1", label: "Cat-1" },
      { value: "cat2", label: "Cat-2" },
      { value: "cat3", label: "Cat-3" },
    ],
  },
  {
    name: "servicesubcategory",
    type: "select",
    icon: FaCaretDown, // Use react-icons component
    showIcon: true,
    inputIconclass:
      "bg-black border-2 shadow-xl font-bold border-black text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
    options: [
      { value: "", label: "Select Service Sub-Category" },
      { value: "cat1", label: "Cat-1" },
      { value: "cat2", label: "Cat-2" },
      { value: "cat3", label: "Cat-3" },
    ],
  },
  {
    name: "certificate",
    type: "file",
    icon: FaPaperclip, // Use react-icons component
    showIcon: true,
    inputIconclass: "absolute inset-y-0 right-2 flex items-center text-black",
    placeholder: "Certificate / License",
    inputclass:
      "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
  {
    name: "filename",
    type: "file",
    icon: FaPaperclip, // Use react-icons component
    showIcon: true,
    inputIconclass: "absolute inset-y-0 right-2 flex items-center text-black",
    placeholder: "Filename (Certificate / License)",
    inputclass:
      "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-[350px] h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
];

// Main component to render the RegistrationForm
const Addnewservices = ({ label, placeholder }) => {
  // Handle form submission
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form Data", values);
  };

  return (
    <div className="App">
      <div className="container max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] mx-auto h-auto mt-10 rounded-2xl bg-[#C4C4C41F]">
        <div className="rounded-t-xl h-[60px] w-full bg-[#4D44B5]">
          <p className="text-white text-2xl pl-5 pt-3 font-bold" style={{ fontFamily: "Poppins" }}>
            Service Details
          </p>
        </div>

        <h2 className="mt-10 ml-5 text-xl font-semibold text-[#202244]">Register your services</h2>

        <div className="ml-5">
          <div className="flex">
            <div className="w-full">
              <Formreuse initialValues={initialValues} onSubmit={handleSubmit} fields={fields} />
            </div>
          </div>

          <div className="mt-2">
            <Imageupload title="Add image and video" IconComponent={LuImage} showTerms={false} />
          </div>

          <div className="mt-5 flex ml-[50px] sm:ml-[100px] md:ml-[150px] lg:ml-[200px] xl:ml-[280px]">
            <input type="checkbox" className="form-checkbox w-6 h-6 bg-black text-black" />
            <span className="ml-2 font-bold text-black">Accept</span>
          </div>
        </div>
      </div>

      <div className="flex mt-10 ml-auto text-sm space-x-5 lg:ml-[1000px] xl:ml-[1200px] 2xl:ml-[1250px]">
        <Buttonreuse bgColor="bg-[#E20000]" width="w-[158px]" height="h-[60px]" borderRadius="rounded-full" type="submit">
          Delete
        </Buttonreuse>
        <Buttonreuse
          bgColor="bg-transparent"
          width="w-[158px]"
          height="h-[60px]"
          borderRadius="rounded-full"
          type="submit"
          textColor="white"
          className="border-2 border-[#4D44B5] text-base"
        >
          Save as Draft
        </Buttonreuse>
        <Buttonreuse bgColor="bg-[#4D44B5]" width="w-[100px]" height="h-[60px]" borderRadius="rounded-full" type="submit" className="p-4">
          Submit
        </Buttonreuse>
      </div>
    </div>
  );
};

export default Addnewservices;
