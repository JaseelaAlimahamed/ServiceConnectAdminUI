import React from 'react';
import { AiOutlineCalendar, AiOutlineClockCircle } from 'react-icons/ai';

const ServiceCard = ({ title, person, date, time, color, status }) => (
  <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
    {/* Left Color Sidebar */}
    <div className={`w-4 ${color}`}></div>

    {/* Main Content */}
    <div className="flex-1 p-4">
      <h3 className="flex text-lg font-semibold text-indigo-900">{title}</h3>
      
      {/* Optional Person Field */}
      {person && (
        <div className="flex items-center mt-2">
          <div className="w-7 h-7 rounded-full bg-indigo-300 mr-2"></div>
          <span className="text-sm font-semibold text-gray-500">{person}</span>
        </div>
      )}
      
      {/* Optional Status Field */}
      {status && <div className="flex text-sm font-semibold text-gray-500 mt-2">{status}</div>}

      {/* Date and Time */}
      <div className="flex items-center text-sm text-gray-500 mt-3">
        <AiOutlineCalendar size={16} className="text-red-500 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mt-1">
        <AiOutlineClockCircle size={16} className="text-yellow-500 mr-2" />
        <span>{time}</span>
      </div>
    </div>
  </div>
);

export default ServiceCard;
