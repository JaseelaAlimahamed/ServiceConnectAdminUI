import React, { useState } from 'react';
import TableComponent from '../../../components/adminComponents/serviceHistoryComponent/TableComponent'
import CardsComponent from '../../../components/adminComponents/serviceHistoryComponent/CardsComponent'

const ServiceHistory = () => {
    const tableData = [
      {
        jobId: "FRDLSE1201",
        date: "March 25, 2021",
        franchise: "Recto C",
        agent: "Jackop R",
        serviceProviderId:"R01A01S1002",
        customerId:"R01A01S1002",
        customerType:"Service Provider",
        jobType:"One Time Lead",
        status:"Active",
        action:"..."
      },
      {
          jobId: "FRDLSE1201",
          date: "March 25, 2021",
          franchise: "Recto C",
          agent: "Jackop R",
          serviceProviderId:"R01A01S1002",
          customerId:"GLO21002",
          customerType:"Customer", 
          jobType:"Daily work",
          status:"Completed",
          action:"..."
      },
      {
          jobId: "FRDLSE1201",
        date: "March 25, 2021",
        franchise: "Recto C",
        agent: "Jackop R",
        serviceProviderId:"R01A01S1002",
        customerId:"R01A01S1002",
        customerType:"Service Provider",
        jobType:"One Time Lead",
        status:"Active",
        action:"..."
      },
      {
          jobId: "FRDLSE1201",
        date: "March 25, 2021",
        franchise: "Recto C",
        agent: "Jackop R",
        serviceProviderId:"R01A01S1002",
        customerId:"R01A01S1002",
        customerType:"Service Provider",
        jobType:"One Time Lead",
        status:"Active",
        action:"..."
      },
      {
          jobId: "FRDLSE1201",
          date: "March 25, 2021",
          franchise: "Recto C",
          agent: "Jackop R",
          serviceProviderId:"R01A01S1002",
          customerId:"R01A01S1002",
          customerType:"Service Provider",
          jobType:"One Time Lead",
          status:"Active",
          action:"..."
      },
      {
          jobId: "FRDLSE1201",
          date: "March 25, 2021",
          franchise: "Recto C",
          agent: "Jackop R",
          serviceProviderId:"R01A01S1002",
          customerId:"R01A01S1002",
          customerType:"Service Provider",
          jobType:"One Time Lead",
          status:"Active",
          action:"..."
      },
    ];

    


    return (
      
  
        <div>
         <div><CardsComponent/></div>
         <TableComponent data={tableData} />

        </div>
    );
};

export default ServiceHistory;
