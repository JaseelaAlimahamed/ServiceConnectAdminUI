import { apiInstance } from "../ApiInstence";




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

  

