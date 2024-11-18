import { apiInstance } from "../ApiInstence";


export const getCategories = async () => {
    try {
      const response = await apiInstance.get('/categories/');
      return response
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };