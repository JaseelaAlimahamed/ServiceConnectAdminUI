import * as Yup from "yup";

const addNewUserSchema = Yup.object({
  full_name: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  
  address: Yup.string().required("Address is required"),
  
  date_of_birth: Yup.date()
    .required("Date of Birth is required")
    .nullable()
    .typeError("Invalid date format"),
  
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  
//   country_code: Yup.string()
//     .required("Country code is required"),
  
  phone_number: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  
  watsapp: Yup.string()
    .matches(/^\d{10}$/, "WhatsApp number must be 10 digits")
    .required("WhatsApp number is required"),
  
  gender: Yup.string()
    // .oneOf(["M", "F", "O"], "Invalid gender")
    .required("Gender is required"),
  
  landmark: Yup.string().required("Landmark is required"),
  
  pincode: Yup.string()
    .matches(/^\d{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  
  district: Yup.string().required("District is required"),
  
  state: Yup.string().required("State is required"),
  
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
  
  profile_image: Yup.mixed()
    .required("Profile image is required")
    .test(
      "fileFormat",
      "Only JPG, JPEG, and PNG files are allowed",
      (value) =>
        !value || ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
    ),
});

export default addNewUserSchema;
