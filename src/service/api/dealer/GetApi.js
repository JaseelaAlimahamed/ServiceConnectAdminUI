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



/**
 * Fetches dealer dashboard data.
 * @param {object} data - Optional parameters for the request.
 * @returns {Promise<object>} - The dealer dashboard data.
 * @throws Will throw an error if the request fails.
 */
export const dashboardCount = async (data) => {
  try {
    const response = await apiInstance.get("dealer-dashboard-count/", data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};
