import { apiInstance } from "../ApiInstence";

export const fetchAdData = async () => {
    try {
      const response = await apiInstance.get("/ad_management/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching ads:", error);
      throw error;
    }
  };
