import { apiInstance } from "../ApiInstence";

export const editProfile = async (data) => {
    try {
      const response = await apiInstance.patch("profile/", data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
