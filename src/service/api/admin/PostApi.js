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

  // Fetch User details
  export const getUserDetails = async (user_id) => {
      try{
          const response = await apiInstance.post('/user-details/', {
            user_id: "4"
          });
          //console.log(response.data,"user details")
          return response.data;
      } catch (error) {
          console.error(error);
          throw error.response ? error.response.data : new Error(error.message);
      }
    };

  //user payment history service
  export const getUserPaymentHistory = async (users_id) => {
      try{
          const response = await apiInstance.post('/user-payment-history-service/', {
            users_id: "1"
          });
          //console.log(response.data.results,"payment history")
          return response.data.results;
      } catch (error) {
          console.error(error);
          throw error.response ? error.response.data : new Error(error.message);
      }
    };