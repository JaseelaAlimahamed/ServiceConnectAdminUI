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
  

  // Incomplete booking list
  export const getIncompleteBookingList = async () => {
    try {
      const response = await apiInstance.get(`/franchise/incomplete-bookings/`);
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };  

  // Complaints list
  export const getComplaintsList = async () => {
    try {
      const response = await apiInstance.get(`/franchise/complaints/`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  // Payment History
  export const getPayments = async () => {
    try {
      const response = await apiInstance.get(`/franchisee/payments/`);
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  }

  // dashboard count  
  export const getDashboardCount = async () => {
    try {
      const response = await apiInstance.get(`/franchise-dashboardcount/`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  // Total Complaints
  export const getTotalComplaints = async () => {
    try {
      const response = await apiInstance.get(`/franchise-dashboardcount-complaints/`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
