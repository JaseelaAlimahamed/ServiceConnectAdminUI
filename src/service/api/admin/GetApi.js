 import { apiInstance } from "../ApiInstence";

/**
 * Fetch user profile details
 * @returns {Promise<object>} - Returns user profile data
 */
export const getUserProfile = async () => {
  try {
    const response = await apiInstance.get("profile/");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error.response ? error.response.data : new Error(error.message);
  }
};
