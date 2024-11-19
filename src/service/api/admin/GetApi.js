import { apiInstance } from "../ApiInstence";

/**
 * Fetch franchisee statistics
 * @returns {Promise<object>} - Franchisee statistics data
 */
export const getFranchiseeStats = async () => {
    try {
        const response = await apiInstance.get("/franchisee-stats/");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response ? error.response.data : new Error(error.message);
    }
};

/**
 * Fetch Active Franchisee Stats
 * @returns {Promise<Object>} - API response
 */
export const getActiveFranchiseeStats = async () => {
    try {
      const response = await apiInstance.get('/franchisee-active-stats/');
      return response.data;
    } catch (error) {
      console.error("Error fetching active franchisee stats:", error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
  
// list users
export const listUser = async () => {
    try {
      const response = await apiInstance.get("usersview/");
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  // total customer
  export const totalCustomer = async () => {
    try {
      const response = await apiInstance.get("total-customer/");
      console.log(response);
      return response.data.total_customers;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

   // total service request
   export const totalServiceRequest = async () => {
    try {
      const response = await apiInstance.get("total-servicerequest/");
      console.log(response);
      return response.data.total_service_requests_count;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };


  // online customers
  export const onlineCustomers = async () => {
    try {
      const response = await apiInstance.get("online-customers/");
      console.log(response);
      return response.data.online_customers_count;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

  // lead service requestcount
  export const leadServiceRequestCount = async () => {
    try {
      const response = await apiInstance.get("lead-service-request-count/");
      console.log(response);
      return response.data.lead_service_request_count;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

   // active service request count
   export const activeServiceRequestCount = async () => {
    try {
      const response = await apiInstance.get("active-service-request-count/");
      console.log(response);
      return response.data.active_service_request_count;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };

   // complaintsTotal
   export const complaintsTotal = async () => {
    try {
      const response = await apiInstance.get("complaints-total/");
      console.log(response);
      return response.data.total_complaints;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };


export const DashboardDetails = async () => {
    try {
      const response = await apiInstance.get("dashboard/");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };



  export const TotalUsers = async () => {
    try {
      const response = await apiInstance.get("total-customer/");
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error.response ? error.response.data : new Error(error.message);
    }
  };
