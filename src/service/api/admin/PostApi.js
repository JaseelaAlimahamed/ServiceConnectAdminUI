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