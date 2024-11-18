import { apiInstance } from "../ApiInstence";


export const Dashboarddetails = async () => {
    try {
      const response = await apiInstance.get("dashboard/");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };



  export const Totalusers = async () => {
    try {
      const response = await apiInstance.get("total-customer/");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };