import { apiInstance } from "../ApiInstence";

export const updateFranchiseeTypes = async (franchiseetypeData) => {
    try {
      const response = await apiInstance.patch(
        "/franchiseetype/",
  
        {
          id: franchiseetypeData.id,
          name: franchiseetypeData.name,
          details: franchiseetypeData.details,
          amount: franchiseetypeData.amount,
          curreny: franchiseetypeData.curreny,
        }
      );
  
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };