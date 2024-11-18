import { apiInstance } from "../ApiInstence";

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

  // totalcustomer
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

   // totalservicerequest
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


  // onlinecustomers
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

  // leadservicerequestcount
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

   // activeservicerequestcount
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