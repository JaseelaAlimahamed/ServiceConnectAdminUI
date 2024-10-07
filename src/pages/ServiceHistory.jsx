import React from 'react'
import Table from '../components/reUsableComponents/Table'

const ServiceHistory = () => {

    const tableDataConfig = [
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
            jobTytpe:"One Time Lead",
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

      const tableColConfig = ["Job_Id", "Date", "Franchise", "Agent","Service Provider Id","Customer Id","Customer Type","Job Type","Status","Action"];
      const tableConfig = {type: "servicehistory" };
  



  return (
    <div className="w-full p-5">
    <Table
      tableColConfig={tableColConfig}
      tableDataConfig={tableDataConfig}
      tableConfig={tableConfig}
      
    />
  </div>
  )
}

export default ServiceHistory
