import React, { useEffect, useRef, useState } from "react";
import ButtonComponent from "../../components/franchiseComponents/addServiceProvider/ButtonComponent";
import FormComponent from "../../components/franchiseComponents/addServiceProvider/FormComponent";
import {
  getDistrictList,
  getFranchiseDealerList,
  getFranchiseeCategory,
  getStateslist,
} from "../../service/api/franchise/GetApi";
import { createServiceProviders } from "../../service/api/franchise/PostApi";
import ReUsableModal from "../../components/reUsableComponents/ReusableModal";

function AddServiceProvider() {
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [categories, setCatgories] = useState([]);
  const [dealerList, setDealerList] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await getStateslist();
        const response2 = await getDistrictList();
        const response3 = await getFranchiseeCategory();
        const response4 = await getFranchiseDealerList();
        setStateList(response.data);
        setDistrictList(response2.data);
        setCatgories(response3.data);
        setDealerList(response4.data.results);
      } catch (error) {}
    };
    getdata();
  }, []);
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const create = async () => {
      const response = await createServiceProviders(formData);
      console.log(response);
      if (response.status == 201) {
        setModelOpen(true);
      }
    };
    create();
  };
  const handleStateChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    const stateId = e.target.value;
    const district = districtList.filter((each) => each.state.id == stateId);
    setSelectedDistrict(district);
  };

  const getFranchisee = (e) => {
    const dealerId = e.target.value;

    // Find the dealer by ID
    const franchisee = dealerList.find((each) => each.id == dealerId);

    // Safely update formData
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      franchisee: franchisee ? franchisee.franchisee : null, // Default to null if no match is found
    });
  };

  const [formData, setFormData] = useState({
    photo: "",
    fullname: "",
    franchisee: "",
    country_code: "+91",
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
    about: "",
    payout_required: "",
    dealer: "",
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

  const fieldConfig = [
    {
      name: "fullname",
      placeholder: "Full Name",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "address",
      placeholder: "Address",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl flex placeholder:text-[#505050]",
    },
    {
      name: "dob",
      type: "date",
      placeholder: "Date of Birth",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl flex text-[#505050] focus:placeholder",
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      required: true,
      className:
        "my-3 p-2 h-10 w-full block bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "mobile",
      placeholder: "Mobile number",
      type: "tel",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "password",
      placeholder: "Password",
      type: "password",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "housename",
      placeholder: "House name",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },
    {
      name: "landmark",
      placeholder: "Landmark",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050] ",
    },
    {
      name: "pincode",
      placeholder: "Pincode",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "verificationId",
      placeholder: "Verification ID",
      type: "dropdown",
      option: ["Voter-ID", "Passport", "Pan-card", "License"],
      required: true,
      className:
        "my-3 p-2 h-10 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]",
    },
    {
      name: "verificationNo",
      placeholder: "Verification Number",
      type: "text",
      required: true,
      className:
        "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex placeholder:text-[#505050]",
    },

    {
      name: "about",
      placeholder: "about",
      type: "textarea",
      required: true,
      className:
        "my-3 p-2 h-20 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]",
    },
  ];

  const buttonConfig = [
    {
      type: "button",
      children: "Delete",
      className:
        "my-6  h-12 px-8 py-2 flex bg-[#E20000] border-2 text-white text-md rounded-3xl lg:w-18 hover:bg-white hover:text-[#E20000]",
    },
    {
      type: "submit",

      children: "Save as Draft",
      className:
        "my-4  h-12 px-4 py-2 flex bg-white border-2 text-[#4D44B5] rounded-3xl text-sm sm:text-md hover:bg-[#4D44B5] hover:text-white",
    },
    {
      type: "submit",
      onClick: HandleSubmit,
      children: "Submit",
      className:
        "my-4  h-12 px-4 py-2 flex bg-[#4D44B5] border-2 text-white text-md rounded-3xl hover:bg-white hover:text-[#4D44B5]",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <ReUsableModal
        message={"Service Provider Created Successfully"}
        heading={"Service provider created"}
        isOpen={modelOpen}
        confirm={true}
        confirm_label="OK"
        onConfirm={() => {
          setModelOpen(false);
        }}
      ></ReUsableModal>
      <div className="max-w-6xl mt-4 mx-auto bg-lite_blue2 rounded-b-md shadow-md">
        <div className="  bg-[#4D44B5] rounded-t-md">
          <h1 className="text-primary text-2xl py-2 px-3 text-justify m-auto">
            Service Provider Details
          </h1>
        </div>

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

          <div className="mx-auto w-72  sm:mx-4 mt-8 sm:w-96 sm:px-auto md:px-auto">
            <FormComponent
              fieldConfig={fieldConfig}
              onSubmit={HandleSubmit}
              handleChange={handleChange}
            />
            <select
              name="payout_required"
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Select Payout Type
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
            </select>

            <select
              name="gender"
              id=""
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={handleStateChange}
            >
              <option value="" selected disabled>
                Gender
              </option>
              <option value="M"> Male </option>
              <option value="F">Female</option>
            </select>

            <select
              name="state"
              id=""
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={handleStateChange}
            >
              <option value="" selected disabled>
                State
              </option>
              {stateList.map((each) => {
                return <option value={each.id}>{each.name}</option>;
              })}
            </select>
            <select
              name="district"
              id=""
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={handleChange}
            >
              <option value="" selected disabled>
                District
              </option>
              {selectedDistrict.map((each) => {
                return <option value={each.id}>{each.name}</option>;
              })}
            </select>

            <select
              name=""
              id=""
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={handleChange}
            >
              <option value="category" selected disabled>
                Type
              </option>
              {categories.map((each) => {
                return <option value={each.id}>{each.title}</option>;
              })}
            </select>

            <select
              name="dealer"
              id=""
              className="my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              onChange={getFranchisee}
            >
              <option value="dealer" selected disabled>
                Select dealer
              </option>
              {dealerList.map((each) => {
                return <option value={each.id}>{each.user.full_name}</option>;
              })}
            </select>

            <p className="font-semibold text-sm flex justify-center p-2">
              #Other info as required
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl flex gap-2 justify-center items-center mx-auto sm:gap-8 sm:justify-end">
        {buttonConfig.map((btn) => (
          <ButtonComponent
            key={btn.key}
            onClick={btn.onClick}
            type={btn.type}
            children={btn.children}
            className={btn.className}
          />
        ))}
      </div>
    </div>
  );
}
export default AddServiceProvider;
