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

//SubCategory Edit Api
export const SubcategoryEdit = async (id, data) => {
  try {
    const response = await apiInstance.put(`subcategories/${id}/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
   
    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error editing sub-category:", error.response?.data.status || error.message);
    throw error.response ? error.response.data : new Error(error.message);
  }
};