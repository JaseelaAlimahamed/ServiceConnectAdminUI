import React, { useEffect, useState } from "react";
import ServiceTable from "../../components/adminComponents/HistoryComponent/ServiceHistoryComponents/ServiceHistoryTable";
import ServiceHistoryCard from "../../components/adminComponents/HistoryComponent/ServiceHistoryComponents/ServiceHistoryCard";

const ServiceHistory = () => {
    const tableConfig = { type: "servicehistory", title: "Service History" };
    const tableColConfig = [
      "JOB_ID",
      "Date",
      "Franchisee",
      "Agent",
      "Service_Provider_ID",
      "Customer_ID",
      "Custometr_Type",
      "Job_Type",
      "Status",
      "Action",
    ];
    const tableDataConfig = [
        {
          JOB_ID: "1",
          Date: "July 14 2024,12:45 PM",
          Franchisee: "1",
          Agent: "abc",
          Service_Provider_ID: "1",
          Customer_ID: "1",
          Custometr_Type: "aska",
          Job_Type: "jkhdkj",
          Status: "complete",
          Action: "khdkj",
        },
        {
          JOB_ID: "2",
          Date: "Aug 14 2024,10:30 AM",
          Franchisee: "2",
          Agent: "def",
          Service_Provider_ID: "2",
          Customer_ID: "2",
          Custometr_Type: "xyz",
          Job_Type: "cleaning",
          Status: "pending",
          Action: "View/Edit",
        },
      ];
      
  
    return (
      <div className="w-full font-poppins px-6 pb-10 pt-10 h-full">
        <ServiceHistoryCard/>
        <ServiceTable
          tableColConfig={tableColConfig}
          tableDataConfig={tableDataConfig}
          tableConfig={tableConfig}
          path={"/service-history"}
        />
      </div>
    );
  };
  
  export default ServiceHistory;
  
