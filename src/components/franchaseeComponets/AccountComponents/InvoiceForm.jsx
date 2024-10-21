
import { AiOutlineCalendar } from 'react-icons/ai';
import { useState } from 'react';

const InvoiceForm = ({ date, setDate, handleDateChange }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-4 mb-6'>
      {/* Invoice Input */}
      <div className="col-span-1">
        <label className="block text-id_gray mb-2">Invoice No</label>
        <input
          type="text"
          placeholder='clear'
          className='w-full border border-id_gray rounded-md px-4 py-2 focus:outline-none focus:border-medium_green focus:placeholder-medium_green hover:border-medium_green text-right' 
        />
      </div>

      {/* Date Input */}
      <div className="col-span-1 relative group focus-within:text-medium_green">
        <label className="block text-id_gray mb-2">Date</label>
        <div className="relative">
          <input
            type="text"
            value={date.split('/').reverse().join('-') || ""}
            onChange={handleDateChange}
            className='w-full border border-secondary rounded-md px-4 py-2 focus:outline-none hover:border-medium_green focus:border-medium_green' 
          />
          <AiOutlineCalendar className="absolute top-3 right-4 text-id_gray group-focus-within:text-medium_green" />
        </div>
      </div>

      {/* Description Remarks Input */}
      <div className="col-span-1">
        <label className="block text-id_gray mb-2">Description Remarks</label>
        <input
          type="text"
          className='w-full border border-secondary rounded-md px-4 py-2 focus:outline-none hover:border-medium_green focus:border-medium_green' 
        />
      </div>

      {/* DR Input */}
      <div className="col-span-1">
        <label className="block text-id_gray mb-2">DR</label>
        <input
          type="text"
          className='w-full border border-secondary rounded-md px-4 py-2 focus:outline-none hover:border-medium_green focus:border-medium_green'
        />
      </div>

      {/* CR Input */}
      <div className="col-span-1">
        <label className="block text-id_gray mb-2">CR</label>
        <input
          type="text"
          className='w-full border border-secondary rounded-md px-4 py-2 focus:outline-none hover:border-medium_green focus:border-medium_green' 
        />
      </div>
    </div>
  );
};

export default InvoiceForm;
