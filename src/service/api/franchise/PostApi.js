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
    // Prepare data for the request
    const response = await apiInstance.post("dealers/create/", {
      full_name: dealerData.fullName,
      email: dealerData.email,
      phone_number: dealerData.phoneNumber,
      address: dealerData.address,
      landmark: dealerData.landmark,
      pin_code: dealerData.pinCode,
      watsapp: dealerData.watsapp,
      country_code: dealerData.countryCode,
      district: dealerData.district,
      state: dealerData.state,
      about: dealerData.about,
      service_providers: dealerData.serviceProviders,
      franchisee: dealerData.franchisee,
      status: dealerData.status,
      verification_id: dealerData.verificationId,
      verificationid_number: dealerData.verificationIdNumber,
      image: dealerData.image, // Add image field here
      // id: dealerData.id // Add id field here
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
