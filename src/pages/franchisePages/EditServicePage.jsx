import React from "react";
import { FaUser, FaCalendarDay, FaCaretDown, FaPaperclip } from "react-icons/fa";
import ServiceForm from "../../components/franchiseComponents/addEditService/ServiceForm";
import ServiceImageUpload from "../../components/franchiseComponents/addEditService/ServiceImageUpload";
import { LuImage } from "react-icons/lu";
import ServiceButton from "../../components/franchiseComponents/addEditService/ServiceButton";

const initialValues = {
  servicetitle: "",
  description: "",
  gstcode: "",
  servicecategory: "",
  servicesubcatagory: "",
  certificate: "",
  filename: "",
};
const fields = [
  {
    name: "description",
    type: "text",
    icon: FaUser,
    showIcon: false,
    inputIconclass: " flex items-center text-white",
    placeholder: "Description",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight focus:outline-none",
  },
  {
    name: "servicetitle",
    type: "text",
    icon: FaUser,
    showIcon: false,
    placeholder: "Service Title",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight focus:outline-none",
  },
  {
    name: "gstcode",
    type: "text",
    icon: FaUser,
    showIcon: false,
    placeholder: "GST Code",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
  {
    name: "servicecategory",
    type: "select",
    icon: FaCaretDown,
    showIcon: true,
    placeholder: "Service Category",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
    options: [
      { label: "Category 1", value: "category1" },
      { label: "Category 2", value: "category2" },
      { label: "Category 3", value: "category3" },
    ],
  },
  {
    name: "servicesubcategory",
    type: "select",
    icon: FaCaretDown,
    showIcon: true,
    placeholder: "Service Subcategory",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
    options: [
      { label: "Subcategory 1", value: "subcategory1" },
      { label: "Subcategory 2", value: "subcategory2" },
      { label: "Subcategory 3", value: "subcategory3" },
    ],
  },
  {
    name: "certificate",
    type: "file",
    icon: FaPaperclip,
    showIcon: true,
    placeholder: "Certificate / License",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
  {
    name: "filename",
    type: "file",
    icon: FaPaperclip,
    showIcon: true,
    placeholder: "File Name",
    inputclass: "bg-white border-2 shadow-xl border-black font-bold text-black placeholder:text-black w-full h-[50px] rounded-lg px-2 leading-tight pl-2 pr-4 py-2 focus:outline-none",
  },
];


const EditServicePage = () => {
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form Data", values);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] xl:max-w-[60%] mx-auto h-auto mt-10 rounded-2xl  px-6 py-6">
        <ServiceForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          fields={fields}
        />

        <div className="mt-4 flex items-center justify-center">
          <ServiceImageUpload
            title="Add image and video"
            IconComponent={LuImage}
            showTerms={false}
          />
        </div>

        <div className="mt-5 flex items-center justify-center">
          <input type="checkbox" className="form-checkbox w-6 h-6 bg-black text-black" />
          <span className="ml-2 font-bold text-black">Accept</span>
        </div>
      </div>

      <div className="flex mt-10 justify-center w-full">
        <ServiceButton
          bgColor="bg-[#E20000]"
          width="w-full sm:w-[400px] lg:w-[400px]"
          height="h-[60px] md:h-[50px] lg:h-[60px]"
          borderRadius="rounded-full"
          type="submit"
        >
          Update
        </ServiceButton>
      </div>
    </div>
  );
};

export default EditServicePage;
