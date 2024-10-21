import React from 'react';
import ServiceProvidersTable from '../../components/franchiseComponents/serviceProviders/ServiceProvidersTable';
import { useNavigate } from 'react-router-dom';


const ServiceProviders = () => {
  const navigate = useNavigate();

  // Data for table rows
  const tableColConfig = ['Name', 'Id', 'Registered Services', 'Active Jobs', 'Location', 'Contact', 'Status', 'Action'];

  // Data for table rows
  const tableDataConfig = [
    {
      name: 'Samantha William',
      id: '#1000123',
      registeredService: 2,
      activejobs: 2,
      location: 'Jakarta',
      contact: { phone: '123-456-7890', email: 'provider1@example.com' },
      status: 'Not Active',
    },
    {
      id: '#1000456',
      name: 'Tony Soap',
      registeredService: 8,
      activejobs: 2,
      location: 'Jakarta',
      contact: { phone: '987-654-3210', email: 'provider2@example.com' },
      status: 'Active',
    },
    {
      id: '#1000789',
      name: 'Karen Hope',
      registeredService: 10,
      activejobs: 2,
      location: 'Jakarta',
      contact: { phone: '555-123-4567', email: 'provider3@example.com' },
      status: 'Active',
    },
    {
      id: '#1001234',
      name: 'Michael Smith',
      registeredService: 5,
      activejobs: 1,
      location: 'Bandung',
      contact: { phone: '333-222-1111', email: 'provider4@example.com' },
      status: 'Active',
    },
    {
      id: '#1002345',
      name: 'Linda Johnson',
      registeredService: 7,
      activejobs: 3,
      location: 'Bali',
      contact: { phone: '444-555-6666', email: 'provider5@example.com' },
      status: 'Not Active',
    },
    {
      id: '#1003456',
      name: 'Robert Brown',
      registeredService: 9,
      activejobs: 4,
      location: 'Surabaya',
      contact: { phone: '777-888-9999', email: 'provider6@example.com' },
      status: 'Active',
    },
    {
      id: '#1004567',
      name: 'Emily Davis',
      registeredService: 4,
      activejobs: 2,
      location: 'Yogyakarta',
      contact: { phone: '222-333-4444', email: 'provider7@example.com' },
      status: 'Not Active',
    },
    {
      id: '#1005678',
      name: 'John White',
      registeredService: 6,
      activejobs: 3,
      location: 'Jakarta',
      contact: { phone: '111-222-3333', email: 'provider8@example.com' },
      status: 'Active',
    },
    {
      id: '#1005678',
      name: 'John White',
      registeredService: 6,
      activejobs: 3,
      location: 'Jakarta',
      contact: { phone: '111-222-3333', email: 'provider8@example.com' },
      status: 'Active',
    },
    {
      id: '#1005678',
      name: 'John White',
      registeredService: 6,
      activejobs: 3,
      location: 'Jakarta',
      contact: { phone: '111-222-3333', email: 'provider8@example.com' },
      status: 'Active',
    },

  ];

  // Table configuration
  const tableConfig = {
    type: 'serviceprovidermanagements',
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">

        <ServiceProvidersTable
          tableDataConfig={tableDataConfig}
          tableColConfig={tableColConfig}
          tableConfig={tableConfig}
          // onView={()=>navigate('providers')}
        />
      </div>
    </div>
  );
};

export default ServiceProviders;