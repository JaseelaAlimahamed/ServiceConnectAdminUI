import { apiInstance } from "../ApiInstence";


//SubCategory Edit Api
export const SubcategoryEdit = async (id,data) => {
    console.log(`subcategories/${id}/`,data)
    try {
      const response = await apiInstance.put(`subcategories/${id}/`,data);
    console.log(response.data)
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
