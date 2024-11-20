import { apiInstance } from "../ApiInstence";


/**
 * Login API endpoint
 * @param {object} data - Account Credentials
 * @param {string} data.email - Email used by the account
 * @param {string} data.password - Password
 * 
 */
export const loginUser = async (data) => {
    try {
      const response = await apiInstance.post("/login", data);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  


 
  export const getrecentactives = async () => {
    try {
      const response = await apiInstance.get('/franchise/recent-activities/');
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  }
  