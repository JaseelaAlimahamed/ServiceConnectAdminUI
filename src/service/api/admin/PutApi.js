import { apiInstance } from "../ApiInstence";


//SubCategory Edit Api
export const SubcategoryEdit = async (id, data) => {
  try {
    // Log FormData before sending
    console.log("Data sent to API:");
    for (const [key, value] of data.entries()) {
      console.log(`${key}:`, value);
    }

    const response = await apiInstance.put(`subcategories/${id}/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Response:", response.data);
    return response;
  } catch (error) {
    console.error("Error editing sub-category:", error.response?.data || error.message);
    throw error.response ? error.response.data : new Error(error.message);
  }
};

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

