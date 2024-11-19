import { apiInstance } from "../ApiInstence";



//categoryList api 
export const categoryListGet = async () => {
    try {
      const response = await apiInstance.get("categories/");
    
       const list = response.data
      
      return list;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  //SubCategoryList Api
  export const SubcategoryGet = async () => {
    try {
      const response = await apiInstance.get("subcategories/");
    
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  //SubCategoryGetById Api
  export const SubCategoryGetById = async (id) => {

    try {
      const response = await apiInstance.get(`subcategories/${id}/`);
    
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };


