import React, { useState } from 'react';

const AdsDropDown = () => {
  const [franchisee, setFranchisee] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');

  const franchiseeOptions = ['Franchisee A', 'Franchisee B', 'Franchisee C'];
  const serviceProviderOptions = ['Provider X', 'Provider Y', 'Provider Z'];

  return (
    <div className="flex flex-wrap space-x-0 sm:space-x-8 space-y-4 sm:space-y-0 mb-5">
      {/* Franchisee Dropdown */}
      <div className="flex flex-col w-full sm:w-[400px]">
        <label className="mb-1 font-semibold">Franchisee</label>
        <select
          className="p-2 border border-light_gray rounded-lg w-full"
          value={franchisee}
          onChange={(e) => setFranchisee(e.target.value)}
        >
          <option value="" disabled>
            Select Franchisee
          </option>
          {franchiseeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Service Provider Dropdown */}
      <div className="flex flex-col w-full sm:w-[400px]">
        <label className="mb-1 font-semibold">Service Provider</label>
        <select
          className="p-2 border border-light_gray rounded-lg w-full"
          value={serviceProvider}
          onChange={(e) => setServiceProvider(e.target.value)}
        >
          <option value="" disabled>
            Select Provider
          </option>
          {serviceProviderOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AdsDropDown;
