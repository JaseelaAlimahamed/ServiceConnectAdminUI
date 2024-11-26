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
import InputComponent from "../../components/franchiseComponents/addServiceProvider/InputComponent";
import DropDown from "../../components/reUsableComponents/DropDown";

function AddServiceProvider() {
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [categories, setCatgories] = useState([]);
  const [dealerList, setDealerList] = useState([]);
  const [modelOpen, setModelOpen] = useState(false);
  const [image, setImage] = useState();
  const [dragActive, setDragActive] = useState(false);
  const [formErros, setFormErrors] = useState({});
  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent the browser's default drag-over behavior
    setDragActive(true); // Set drag active state
  };

  const handleDragLeave = () => {
    setDragActive(false); // Reset drag active state when leaving the dropzone
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Prevent the browser's default drop behavior
    setDragActive(false); // Reset drag active state

    const file = event.dataTransfer.files[0]; // Get the first file
    if (file && file.type.startsWith("image/")) {
      // Ensure the file is an image
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please drop a valid image file!");
    }
  };

  const handleFileInput = (event) => {};

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

  const formValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const newError = {};
    if (!formData.fullname.trim()) {
      newError.fullname = "Full name is required";
    }
    if (!formData.address.trim()) {
      newError.address = "address is  required";
    }
    if (!formData.dob.trim()) {
      newError.dob = "date of birth is required";
    }
    if (!formData.email.trim()) {
      newError.email = "email is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Enter a valid email";
    }
    if (!formData.mobile.trim()) {
      newError.mobile = "mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newError.mobile = "Enter a valid mobile number";
    }

    if (!formData.watsapp.trim()) {
      newError.whatsapp = "whatsapp number is required";
    } else if (!mobileRegex.test(formData.watsapp)) {
      newError.whatsapp= "Enter a valid whatsapp number";
    }
    if (!formData.password) {
      newError.password = "Please enter password";
    }
    if (!formData.pincode) {
      newError.pincode = "Please enter pincode";
    }
    else if(isNaN(formData.pincode))
    {
      newError.pincode = "Please enter a valid pincode";
    }
    if (!formData.landmark) {
      newError.landmark = "Please enter Landmark";
    }
    if (!formData.about) {
      newError.about = "Please enter about";
    }

    if (!formData.payout_required) {
      newError.payout_required = "Please enter payout type";
    }
    if (!formData.gender) {
      newError.gender = "Please enter gender";
    }
    if (!formData.state) {
      newError.state = "Please enter state";
    }
    if (!formData.district) {
      newError.district = "Please enter district";
    }
    if (!formData.type) {
      newError.type = "Please enter service type";
    }
    
    if (!formData.dealer) {
      newError.dealer = "Please enter dealer";
    }
    if (!formData.accepted_terms) {
      newError.terms = "Please accept term and condition";
    }
    setFormErrors(newError);
    return Object.keys(newError).length === 0;
  };
  const HandleSubmit = (e) => {
    if (formValidation()) {
    }
    console.log(formErros);
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
    accepted_terms:"",
    country_code: "+91",
    address: "",
    dob: "",
    email: "",
    mobile: "",
    watsapp:"",
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
  const handleImageClick = (e) => {
    const file = event.target.files[0]; // Get the first file
    if (file && file.type.startsWith("image/")) {
      // Ensure the file is an image
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file!");
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fieldConfig = [
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
          <div className="w-fit h-52 mx-auto mt-8 grid sm:mx-8 cursor-pointer">
            <h1 className="text-dark_blue text-lg font-semibold">Photo *</h1>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
              className={`w-40 h-40 flex justify-center items-center rounded-md border-2 border-[#C1BBEB] border-dashed ${
                dragActive ? "bg-[#f0f4ff]" : "bg-primary"
              }`}
            >
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <p className="text-center text-[#A098AE] text-sm">
                  Drag and drop or click here to select file
                </p>
              )}

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageClick}
                style={{ display: "none" }}
              />
            </div>
            {image && (
              <button
                className="bg-[#4D44B5] mt-2 rounded-md py-1 text-white hover:bg-[#4D44F6] "
                onClick={() => setImage(null)} // Clear the image
              >
                Remove Image
              </button>
            )}
          </div>

          <div className="mx-auto w-72  sm:mx-4 mt-8 sm:w-96 sm:px-auto md:px-auto">
            <InputComponent
              name={"fullname"}
              placeholder={"Full name"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.fullname && (
              <p className="text-red">{formErros.fullname}</p>
            )}
            <InputComponent
              name={"address"}
              placeholder={"Address"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.address && (
              <p className="text-red">{formErros.address}</p>
            )}

            <InputComponent
              name={"dob"}
              type={"Date"}
              placeholder={"Enter date of birth"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.dob && <p className="text-red">{formErros.dob}</p>}

            <InputComponent
              name={"email"}
              placeholder={"Email"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.email && <p className="text-red">{formErros.email}</p>}

            <InputComponent
              name={"mobile"}
              placeholder={"Mobile number"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.mobile && <p className="text-red">{formErros.mobile}</p>}


            <InputComponent
              name={"watsapp"}
              placeholder={"Whatsapp number"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.whatsapp && <p className="text-red">{formErros.whatsapp}</p>}
            <InputComponent
              name={"password"}
              placeholder={"Password"}
              type={"password"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.password && (
              <p className="text-red">{formErros.password}</p>
            )}
            <InputComponent
              name={"landmark"}
              placeholder={"Landmark"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.landmark && (
              <p className="text-red">{formErros.landmark}</p>
            )}

            <InputComponent
              name={"pincode"}
              placeholder={"Pincode"}
              className={
                "my-3 p-2 h-10 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.pincode && (
              <p className="text-red">{formErros.pincode}</p>
            )}

            <InputComponent
              name={"about"}
              type={"Textarea"}
              placeholder={"About"}
              className={
                "my-3 p-2 h-20 w-full bg-white border-none rounded-xl text-justify flex text-[#505050]"
              }
              onChange={handleChange}
            ></InputComponent>
            {formErros.about && <p className="text-red">{formErros.about}</p>}

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
            {formErros.payout_required && (
              <p className="text-red">{formErros.payout_required}</p>
            )}

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
            {formErros.gender && <p className="text-red">{formErros.gender}</p>}
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
            {formErros.state && <p className="text-red">{formErros.state}</p>}

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
            {formErros.district && (
              <p className="text-red">{formErros.district}</p>
            )}

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
            {formErros.type && (
              <p className="text-red">{formErros.type}</p>
            )}
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
            {formErros.dealer && <p className="text-red">{formErros.dealer}</p>}
            <label>
          <input
            type="checkbox"
           name="accepted_terms"
            onChange={handleChange}
          />
          I accept the <a href="/terms">Terms and Conditions</a>
        </label>
        {formErros.terms && <p className="text-red">{formErros.terms}</p>}
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
