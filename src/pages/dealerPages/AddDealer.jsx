import React, { useRef, useState } from "react";
import ButtonComponent from "../../components/franchiseComponents/addServiceProvider/ButtonComponent";
import AddDealerForm from "../../components/franchiseComponents/dealers/AddDealerForm";

function AddDealer() {
  const fieldConfig = [
    {
      name: "fullname",
      placeholder: "Full Name",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050] ",
    },
    {
      name: "address",
      placeholder: "Address",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl flex placeholder:text-[#505050]",
    },
    {
      name: "Franchisee Name",
      placeholder: "Franchisee Name",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl flex placeholder:text-[#505050]",
    },

    {
      name: "email",
      placeholder: "Email",
      type: "email",
      required: true,
      className:
        "my-3 p-2 h-10 w-full block bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "mobile",
      type: "tel",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "mobile",

      type: "tel",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "landmark",
      placeholder: "Landmark",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050] ",
    },

    {
      name: "Pin Code",
      placeholder: "Pin Code",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "district",
      placeholder: "District",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050] ",
    },
    {
      name: "state",
      placeholder: "State",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "verificationId",
      placeholder: "Verification ID",
      type: "dropdown",
      option: ["Voter-ID", "Passport", "Pan-card", "License"],
      required: true,
      className:
        "my-3 p-2 h-10 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex text-[#505050]",
    },
    {
      name: "verificationNo",
      placeholder: "Verification no",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "Id Copy",
      type: "file",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex placeholder:text-[#505050] ",
    },
    {
      name: "Status",
      placeholder: "Type",
      type: "dropdown",
      option: ["Cleaning", "Repairing", "Electrical", "Masonry"],
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-[#F3F4FF] border-none rounded-xl text-justify flex text-[#505050]",
    },
  ];

  const buttonConfig = [
    {
      type: "button",
      children: "Delete",
      className:
        "my-5 md:h-10 h-16 px-8 py-4 md:py-1 flex bg-[#E20000] border- text-white text-md rounded-3xl lg:w-18 hover:bg-white hover:text-[#E20000]",
    },
    {
      type: "submit",
      children: "Save as Draft",
      className:
        "my-5 md:h-10 h-16 px-4 py-2 flex bg-white border-2 text-[#4D44B5] rounded-3xl text-sm sm:text-md hover:bg-[#4D44B5] hover:text-white",
    },
    {
      type: "submit",
      children: "Submit & Pay",
      className:
        "my-5 md:h-10 h-16 px-4 py-1 flex bg-[#4D44B5] border text-white text-md rounded-3xl hover:bg-white hover:text-[#4D44B5]",
    },
  ];

  const [formData, setFormData] = useState({
    photo: "",
    fullname: "",
    address: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    housename: "",
    landmark: "",
    pincode: "",
    district: "",
    state: "",
  });

  const inputRef = useRef(null);
  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen p-6">
      <form
        onSubmit={HandleSubmit}
        className="max-w-2xl mx-auto bg-[#FFFFFF] rounded-b-md shadow-md"
      >
        {/* Form Header */}
        <div className="bg-[#4D44B5] rounded-t-md">
          <h1 className="text-primary text-2xl py-2 px-3 text-justify m-auto">
            Enter Dealer Details
          </h1>
        </div>

        {/* Image Upload Section */}
        <div className="justify-center sm:justify-normal sm:flex grid">
          <div
            className="w-fit h-52 mx-auto mt-8 grid sm:mx-8 cursor-pointer"
            onClick={handleImageClick}
          >
            <h1 className="text-dark_blue text-lg font-semibold">Photo *</h1>
            <div className="bg-primary w-40 h-40 p-2 flex justify-center items-center rounded-md border-2 border-[#C1BBEB] border-dashed">
              <p className="text-center text-[#A098AE] text-sm">
                Drag and drop or click here to select file
              </p>
            </div>
            <input type="file" ref={inputRef} className="hidden" />
          </div>

          {/* Form Fields */}
          <div className="mx-auto w-72 sm:mx-4 mt-8 sm:w-96 sm:px-auto md:px-auto">
            <AddDealerForm
              fieldConfig={fieldConfig}
              onSubmit={HandleSubmit}
              handlerChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons Section Inside Form */}
        <div className="flex gap-2 justify-center sm:justify-end mx-auto sm:gap-8 my-6  px-5">
          {buttonConfig.map((btn, index) => (
            <ButtonComponent
              key={index}
              type={btn.type}
              children={btn.children}
              className={btn.className}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default AddDealer;
