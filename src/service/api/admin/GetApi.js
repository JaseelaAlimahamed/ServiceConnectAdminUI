import { apiInstance } from "../ApiInstence";

/**
 * Fetch franchisee statistics
 * @returns {Promise<object>} - Franchisee statistics data
 */
export const getFranchiseeStats = async () => {
    try {
        const response = await apiInstance.get("/franchisee-stats/");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response ? error.response.data : new Error(error.message);
    }
};

/**
 * Fetch Active Franchisee Stats
 * @returns {Promise<Object>} - API response
 */
export const getActiveFranchiseeStats = async () => {
    try {
      const response = await apiInstance.get('/franchisee-active-stats/');
      return response.data;
    } catch (error) {
      console.error("Error fetching active franchisee stats:", error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
  