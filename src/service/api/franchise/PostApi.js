import { apiInstance } from "../ApiInstence";

/**
 * -1
 *  Dealer Login API endpoint
 * @param {object} data - Account Credentials
 * @param {string} data.email - Email used by the dealer  account
 * @param {string} data.password - Password for the dealer account
 *
 */
export const signInFranchise = async (data) => {
  try {
    const response = await apiInstance.post("login/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

export const createDealer = async (dealerData) => {
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("full_name", dealerData.fullName);
    formData.append("email", dealerData.email);
    formData.append("phone_number", dealerData.phoneNumber);
    formData.append("address", dealerData.address);
    formData.append("landmark", dealerData.landmark);
    formData.append("pin_code", dealerData.pinCode);
    formData.append("watsapp", dealerData.watsapp);
    formData.append("country_code", dealerData.countryCode);
    formData.append("district", dealerData.district);
    formData.append("state", dealerData.state);
    formData.append("about", dealerData.about);
    formData.append("service_providers", dealerData.serviceProviders);
    formData.append("franchisee", dealerData.franchisee);
    formData.append("status", dealerData.status);
    formData.append("verification_id", dealerData.verificationId);
    formData.append("verificationid_number", dealerData.verificationIdNumber);
    formData.append("profile_image", dealerData.image); // Profile image
    formData.append("id_copy", dealerData.idCopy); // ID copy
    
    // Make the API call with FormData
    const response = await apiInstance.post("dealers/create/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response; // Return the API response
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw error.response ? error.response.data : new Error(error.message); // Return error data if available
  }
};

export const createFranchiseeType = async (frachiseeTypeData) => {
  try {
    const response = await apiInstance.post(
      "/franchiseetype/",

      {
        name: frachiseeTypeData.name,
        details: frachiseeTypeData.details,
        amount: frachiseeTypeData.amount,
        currency: frachiseeTypeData.currency,
      }
    );

    return response;
  } catch (error) {
    if (err) console.log(error);
  }
};
export const dealerDetails = async (dealerId) => {
  try {
    const response = await apiInstance.post(
      "/franchisee-dealers-details/",

      {
        custom_id: dealerId,
      }
    );

    return response;
  } catch (error) {
    if (err) console.log(error);
  }
};

export const createServiceProviders = async (data) => {
  try {
    const response = await apiInstance.post("/service-providers/create/", {
      phone: data.mobile,
      country_code: data.country_code,
      phone_number: data.mobile,
      full_name: data.fullname,
      address: data.address,
      pin_code: data.pincode,
      about: data.about,
      date_of_birth: data.dob,
      gender: data.gender,
      franchisee: data.franchisee,
      dealer: data.dealer,
      payout_required: data.payout_required,
      status: "Active",
      district: data.district,
      state: data.state,
      landmark: data.landmark,
      watsapp: data.mobile,
      accepted_terms: "True",
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const ServiceprovideDetails = async (id) => {
  try {
    const response = await apiInstance.post(
      "service-provider-details/",

      {
        custom_id: id,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getdealerProfile = async (id) => {
  try {
    const response = await apiInstance.post("franchisee-dealers-details/", {
      custom_id: `${id}`,
    });
    return response;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};
