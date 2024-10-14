import React from 'react';
import Table from '../../ReUsableComponents/Table';

const ServiceProvider = () => {
  // Column configuration
  const tableColConfig = ['Name', 'Id', 'Registered Services', 'Active Jobs', 'Location', 'Contact', 'Status', 'Action'];

  // Data for table rows
  const tableDataConfig = [
    { name: 'Samantha William', id: '#123456789', registeredServices: 2, activeJobs: 2, location: 'Jakarta', status: 'Not Active' },
    { name: 'Tony Soap', id: '#123456789', registeredServices: 2, activeJobs: 8, location: 'Jakarta', status: 'Active' },
    { name: 'Karen Hope', id: '#123456789', registeredServices: 2, activeJobs: 10, location: 'Jakarta', status: 'Active' },
    { name: 'Jordan Nico', id: '#123456789', registeredServices: 2, activeJobs: 0, location: 'Jakarta', status: 'Active' },
    { name: 'Nadila Adja', id: '#123456789', registeredServices: 2, activeJobs: 1, location: 'Jakarta', status: 'Not Active' },
   
  ];

  // Table configuration
  const tableConfig = {
    type: 'serviceprovidermangement',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        
       
        <Table 
         tableDataConfig={tableDataConfig}
         tableColConfig={tableColConfig}
         tableConfig={tableConfig}
         />
      </div>
    </div>
  );
};

export default ServiceProvider;