import { apiInstance } from "../ApiInstence";

export const deleteFranchiseeTypes = async (franchiseetypeid) => {
    try {
      const response = await apiInstance.delete("/franchiseetype/", {
        data: { id: franchiseetypeid },
      });
  
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
  

export const categorydelete = async (id) => {
    console.log(id)
    try {
      const response = await apiInstance.delete(`categories/`,{
        data: { id },});
        
       console.log(response)
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.id : new Error(error.message);
    }
  }

  //SubCategory Delete Api
  export const SubcategoryDelete = async (id) => {
    try {
      const response = await apiInstance.delete(`subcategories/${id}/`);
    
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

