import React from 'react';

const PaymentSchedules = () => {
  const schedules = [
    { name: 'All Dealers', type: 'Monthly', role: 'All Dealers', date: '', icon: '🛠️' },
    { name: 'All Franchisee', type: 'Monthly', role: 'All Franchisee', date: '', icon: '🔧' },
    { name: 'All Service Providers', type: 'Weekly', role: 'All Service Providers', date: '', icon: '⚙️' },
    { name: 'Thomas', type: 'Service Provider', role: 'Service Provider', date: 'Feb 24', icon: '👤' },
    { name: 'Banu', type: 'Service Provider', role: 'Service Provider', date: 'Feb 15', icon: '👥' },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-orange-500 mb-4">Payment Schedules</h2>
      <div className="space-y-4">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{schedule.icon}</span>
              <div>
                <h3 className="font-medium text-gray-800">{schedule.name}</h3>
                <p className="text-sm text-gray-500">{schedule.type}</p>
                {schedule.date && <p className="text-xs text-gray-400">{schedule.date}</p>}
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-blue-500 hover:text-blue-700">
                <i className="fas fa-edit"></i>
              </button>
              <button className="text-red-500 hover:text-red-700">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSchedules;
