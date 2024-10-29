import React from 'react'
import ServiceProviderTable from './ServiceProviderTable';

const ServiceProviderList = () => {
    const tableConfig = { type: "serviceprovidermanagement" };
    const tableColConfig = [
      "Name",
      "ID",
      "Registered Services",
      "Active Jobs",
      "Location",
      "Contact",
      "Status",
      "Action",
    ];
    const tableDataConfig = [
      {
        name: "Ora Wells",
        id: "#132923443",
        date: "May 25, 2024",
        registeredServices : 6,
        activeJobs : 1,
        location: "Sydney",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Active",
      },
      {
        name: "Margaret Hawkins",
        id: "#129876543",
        date: "April 05, 2024",
        registeredServices : 3,
        activeJobs : 2,
        location: "Mumbai",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "winnie.berry@example.com" },
        status: "Not Active",
      },
      {
        name: "Della Romero",
        id: "#129872443",
        date: "December 25, 2024",
        registeredServices : 1,
        activeJobs : 4,
        location: "Mumbai",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "michael.smith@example.com" },
        status: "Active",
      },
      {
        name: "Leon Elliott",
        id: "#129376523",
        date: "June 03, 2024",
        registeredServices : 2,
        activeJobs : 7,
        location: "Mumbai",
        image: "/tableimage.png",
        contact: { phone: "123456789", mail: "isabelle.maxwell@example.com" },
        status: "Not Active",
      },
      {
          name: "Mason Andrews",
          id: "#129276543",
          date: "January 28, 2023",
          registeredServices : 2,
          activeJobs : 4,
          location: "Mumbai",
          image: "/tableimage.png",
          contact: { phone: "123456789", mail: "scott.smith@example.com" },
          status: "Not Active",
        },
        {
          name: "James Todd",
          id: "#129876523",
          date: "March 05, 2024",
          registeredServices : 2,
          activeJobs : 2,
          location: "Mumbai",
          image: "/tableimage.png",
          contact: { phone: "123456789", mail: "michael.smith@example.com" },
          status: "Not Active",
        },
    ];
 

  return (
    <>
    <div className='m-10'>

      <ServiceProviderTable 
      tableColConfig={tableColConfig}
      tableConfig={tableConfig}
      tableDataConfig={tableDataConfig}/>
      
    </div>
    </>
  );
};

export default ServiceProviderList