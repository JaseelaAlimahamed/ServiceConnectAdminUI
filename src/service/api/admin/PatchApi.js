import { apiInstance } from "../ApiInstence";


export const editCategory = async (data) => {
    try {
      const response = await apiInstance.patch('/categories/',
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return response
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };