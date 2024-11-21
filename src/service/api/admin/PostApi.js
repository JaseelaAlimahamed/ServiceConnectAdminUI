import { apiInstance } from "../ApiInstence";

/**
 * -1
 *  Dealer Login API endpoint
 * @param {object} data - Account Credentials
 * @param {string} data.email - Email used by the dealer  account
 * @param {string} data.password - Password for the dealer account
 *
 */
export const signInAdmin = async (data) => {
  try {
    const response = await apiInstance.post("login/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

export const addCategory = async (data) => {
  try {
    const response = await apiInstance.post("/categories/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.error(
      "Error adding category:",
      error.response?.data || error.message
    );
    throw error.response ? error.response.data : new Error(error.message);
  }
};

export const FinanceReport = async (data) => {
  try {
    const response = await apiInstance.post("monthly_fin_rep/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

// add new user

export const addNewUser = async (data) => {
  console.log(data, "data");
  try {
    const response = await apiInstance.post("users/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

// view User Details

export const viewUserDetails = async (userId) => {
  const payload = { user_id: userId };
  try {
    const response = await apiInstance.post("user-details/", payload);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
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


export const SubcategoryPost = async (data) => {
  
  try {
    // Log FormData before sending
    console.log("Data sent to API:");
    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await apiInstance.post(`subcategories/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error add sub-category:", error.response?.data || error.message);
    throw error.response ? error.response.data : new Error(error.message);
  }
};


