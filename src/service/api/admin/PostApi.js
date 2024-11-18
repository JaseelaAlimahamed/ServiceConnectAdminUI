import { apiInstance } from "../ApiInstence";


/**
 * -1
 *  Dealer Login API endpoint
 * @param {object} data - Account Credentials
 * @param {string} data.email - Email used by the dealer  account
 * @param {string} data.password - Password for the dealer account
 * 
 */
export const signInAdmin = async (data) => {
    try {
      const response = await apiInstance.post("login/", data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  
  export const FinanceReport = async (data) => {
      try {
        const response = await apiInstance.post("monthly_fin_rep/", data);
        console.log(response);
        return response;
      } catch (error) {
        console.error(error);
        throw error.response ? error.response.data : new Error(error.message);
      }
    };




  // add new user 

  export const addNewUser = async (data) => {
    console.log(data,'data');
    try {
      const response = await apiInstance.post("users/", data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  // view User Details 

  export const viewUserDetails = async (userId) => {
    const payload = { user_id: userId }; 
    try {
      const response = await apiInstance.post("user-details/", payload);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
