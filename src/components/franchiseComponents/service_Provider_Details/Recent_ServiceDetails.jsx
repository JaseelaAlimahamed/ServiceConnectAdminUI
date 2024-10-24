
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import RecentServiceCard from './RecentServiceCard'; 

const RecentServiceDetails = () => {
  const navigate = useNavigate(); 

  const handleViewMore = () => {
    navigate('/franchise/recent-service-details');
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm font-bold text-indigo-900">Recent Service Details</h2>
          <p className="text-gray-500 mt-1 text-sm">Thursday, 10th April, 2021</p>
        </div>

        {/* Service List */}
        <div className="space-y-4">
          <RecentServiceCard
            title="Tap Repair"
            person="Keshavan"
            status="Booking"
            date="March 20, 2021"
            time="09:00 - 10:00 AM"
            color="bg-[#4D44B5]"
          />
          <RecentServiceCard
            title="Drain Blockage"
            date="March 20, 2021"
            time="09:00 - 10:00 AM"
            color="bg-[#FB7D5B]"
          />
          <RecentServiceCard
            title="Light Change"
            date="March 20, 2021"
            time="09:00 - 10:00 AM"
            color="bg-[#FCC43E]"
          />
          <RecentServiceCard
            title="Fan Repair"
            date="March 20, 2021"
            time="09:00 - 10:00 AM"
            color="bg-indigo-900"
          />
        </div>

        {/* View More Button */}
        <div className="w-full bg-[#dedcf7] py-3 px-4 rounded-full text-center">
          <button 
            className="text-[#4D44B5] text-sm font-bold" 
            onClick={handleViewMore} // Attach the click handler
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentServiceDetails;
