import React from "react";
import { useFormik } from "formik";
import addNewUserSchema from "../../../validationSchema/addNewUserSchema";
import InputFieldComponent from "../../reUsableComponents/InputFieldComponent";
import DropDown from "../../reUsableComponents/DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from "../../reUsableComponents/ImageUploader";
import { useParams } from "react-router-dom";
import { addNewUser } from "../../../service/api/admin/PostApi";
import CountryCodeSelect from "./CountryCodeSelect";

const AddNewUser = () => {
  const { id: userId } = useParams();

  const formik = useFormik({
    initialValues: {
      full_name: "",
      address: "",
      date_of_birth: "",
      email: "",
      country_code: "",
      phone_number: "",
      watsapp: "",
      gender: "",
      landmark: "",
      pincode: "",
      district: "",
      state: "",
      password: "",
      profile_image: null,
    },
    validationSchema: addNewUserSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const submissionData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          submissionData.append(key, value);
        });

        const response = await addNewUser(submissionData);
        console.log("User added successfully:", response);
        alert("User added successfully!");
        resetForm();
      } catch (error) {
        console.error("Error adding user:", error.response || error.message);
        alert("Error: " + (error.response?.data?.message || "Unexpected error"));
      }
    },
  });

  const handleDateChange = (date) => {
    formik.setFieldValue("date_of_birth", date ? date.toISOString().split("T")[0] : "");
  };

  const handleFileSelect = (file) => {
    formik.setFieldValue("profile_image", file);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-4xl w-full"
        onSubmit={formik.handleSubmit} noValidate
      >
        <h1 className="text-2xl font-bold text-center mb-8">
          {userId ? "Edit User" : "Add New User"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Image Upload */}
          <div>
            <ImageUploader
              title="Upload Profile Picture"
              showTerms={false}
              onFileSelect={handleFileSelect}
            />
            {formik.errors.profile_image && formik.touched.profile_image && (
              <div className="text-red text-sm">{formik.errors.profile_image}</div>
            )}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <InputFieldComponent
              name="full_name"
              placeholder="Full Name"
              value={formik.values.full_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.full_name && formik.touched.full_name && (
              <div className="text-red text-sm">{formik.errors.full_name}</div>
            )}

            <InputFieldComponent
              name="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.address && formik.touched.address && (
              <div className="text-red text-sm">{formik.errors.address}</div>
            )}

            <DatePicker
              selected={formik.values.date_of_birth ? new Date(formik.values.date_of_birth) : null}
              onChange={handleDateChange}
              placeholderText="Select DOB"
              className="p-4 w-full rounded-2xl pl-5 border border-gray-400"
              wrapperClassName="w-full"
              isClearable
            />
            {formik.errors.date_of_birth && formik.touched.date_of_birth && (
              <div className="text-red text-sm">{formik.errors.date_of_birth}</div>
            )}

            <InputFieldComponent
              name="email"
              placeholder="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red text-sm">{formik.errors.email}</div>
            )}

            <CountryCodeSelect
              name="country_code"
              value={formik.country_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* {formik.errors.country_code && formik.touched.country_code && (
              <div className="text-red text-sm">{formik.errors.country_code}</div>
            )} */}

            <InputFieldComponent
              name="phone_number"
              placeholder="Phone Number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.phone_number && formik.touched.phone_number && (
              <div className="text-red text-sm">{formik.errors.phone_number}</div>
            )}

            <InputFieldComponent
              name="watsapp"
              placeholder="WhatsApp Number"
              value={formik.values.watsapp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.watsapp && formik.touched.watsapp && (
              <div className="text-red text-sm">{formik.errors.watsapp}</div>
            )}

            <DropDown
              name="gender"
              placeholder="Gender"
              options={["Male", "Female", "Other"]}
              value={formik.values.gender}
              onChange={(event) => formik.setFieldValue("gender", event.target.value)}
            />
            {formik.errors.gender && formik.touched.gender && (
              <div className="text-red text-sm">{formik.errors.gender}</div>
            )}

            <InputFieldComponent
              name="landmark"
              placeholder="Landmark"
              value={formik.values.landmark}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.landmark && formik.touched.landmark && (
              <div className="text-red text-sm">{formik.errors.landmark}</div>
            )}

            <InputFieldComponent
              name="pincode"
              placeholder="Pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.pincode && formik.touched.pincode && (
              <div className="text-red text-sm">{formik.errors.pincode}</div>
            )}

            <InputFieldComponent
              name="district"
              placeholder="District"
              value={formik.values.district}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.district && formik.touched.district && (
              <div className="text-red text-sm">{formik.errors.district}</div>
            )}

            <InputFieldComponent
              name="state"
              placeholder="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.state && formik.touched.state && (
              <div className="text-red text-sm">{formik.errors.state}</div>
            )}

            <InputFieldComponent
              name="password"
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              color="bg-primary"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red text-sm">{formik.errors.password}</div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {userId ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
