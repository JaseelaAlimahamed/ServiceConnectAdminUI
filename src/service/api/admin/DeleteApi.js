import { apiInstance } from "../ApiInstence";


export const deleteCategory = async (id) => {
    try {
      const response = await apiInstance.delete(`/categories/`, {
        data: { id: id }//The data Key: Axios requires you to use the data key in the 
                        //config object to include a request body with DELETE requests.
      });
      return response
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };