import { apiInstance } from "../ApiInstence";

/**
 * Fetches dealer dashboard data.
 * @param {object} data - Optional parameters for the request.
 * @returns {Promise<object>} - The dealer dashboard data.
 * @throws Will throw an error if the request fails.
 */
export const dashboard = async (data) => {
  try {
    const response = await apiInstance.get("dealer/dashboard/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};


export const recentactivities = async (data) => {
  try {
    const response = await apiInstance.get("recent-activities/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};



export const franchisedetail = async (data) => {
  try {
    const response = await apiInstance.get("franchise-details/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};


//service provider
export const serviceprovider = async (data) => {
  try {
    const response = await apiInstance.get("service-providers/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};
//serviceprovidercount
export const serviceprovidercount = async (data) => {
  try {
    const response = await apiInstance.get("service-provider-counts/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

/**
 * Fetches dealer dashboard data.
 * @param {object} data - Optional parameters for the request.
 * @returns {Promise<object>} - The dealer dashboard data.
 * @throws Will throw an error if the request fails.
 */
export const franchisedetails = async (data) => {
  try {
    const response = await apiInstance.get("franchise-details/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};


/**
 * Fetch user profile details
 * @returns {Promise<object>} - Returns user profile data
 */
export const getUserProfile = async () => {
  try {
    console.log("Fetching user profile...");
    const response = await apiInstance.get("dealer/dashboard/");
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error.response || error.message);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

