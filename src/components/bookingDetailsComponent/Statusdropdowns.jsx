import React, { useState } from 'react';

const StatusDropdowns = () => {
  const [bookingStatus, setBookingStatus] = useState('');
  const [complaintStatus, setComplaintStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  return (
    <div>
      <div className="grid grid-cols-1 mt-4 ml-20">
        <div>
          <label className ="text-[1E1E1E] font-normal leading-[22.4px] text-left" style={{ fontFamily: 'var(--sds-typography-body-font-family)', fontSize: 'var(--sds-typography-body-size-medium)' }}>Booking Status</label>
          <select
            className="mt-2 p-2 border border-red rounded-md w-full"
            value={bookingStatus}
            onChange={(e) => setBookingStatus(e.target.value)}
          >
            <option>Select</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div>
          <label className="text-[1E1E1E] font-normal leading-[22.4px] text-left" style={{ fontFamily: 'var(--sds-typography-body-font-family)', fontSize: 'var(--sds-typography-body-size-medium)' }}>Complaint Status</label>
          <select
            className="mt-2 p-2 border border-red rounded-md w-full"
            value={complaintStatus}
            onChange={(e) => setComplaintStatus(e.target.value)}
          >
            <option>Select</option>
            <option value="Resolved">Resolved</option>
            <option value="Unresolved">Unresolved</option>
          </select>
        </div>

        <div>
          <label className="text-[1E1E1E] font-normal leading-[22.4px] text-left" style={{ fontFamily: 'var(--sds-typography-body-font-family)', fontSize: 'var(--sds-typography-body-size-medium)' }}>Payment Status</label>
          <select
            className="mt-2 p-2 border border-red rounded-md w-full"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option>Select</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StatusDropdowns;
