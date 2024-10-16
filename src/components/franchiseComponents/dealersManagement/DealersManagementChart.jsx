import React from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const DealersManagementChart = ({ servicesData, revenueData, topDealers }) => {
  return (
    <>
    {/* Top Performing Dealers */}
    <div className="pt-5 px-5 mb-4">
            <h2 className=" font-bold mb-4">Top Performing Dealers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topDealers.map((dealer, index) => (
                <div key={dealer.id} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold">{dealer.name}</h3>
                <p>Total Services: {dealer.totalServices}</p>
                <p>Total Revenue: ${dealer.totalRevenue.toFixed(2)}</p>
                <p className="text-sm text-gray-600">Rank: {index + 1}</p>
                </div>
            ))}
            </div>
    </div>
    
    <div className='flex flex-col pt-5 px-5 gap-5 md:gap-0 justify-center items-center w-full md:flex-row md:justify-between'>
        {/* Total Services Offered */}
        <div className="w-full md:w-[50%]">
                <h2 className="font-bold mb-4">Total Services Offered (Month-to-Month)</h2>
                <div className="bg-white shadow rounded-lg p-4">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={servicesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalServices" stroke="#4D44B5" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>

        {/* Total Revenue Generated */}
            <div className="w-full md:w-[45%]">
            <h2 className=" font-bold mb-4">Total Revenue Generated</h2>
            <div className="bg-white shadow rounded-lg p-4">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalRevenue" fill="#4D44B5" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
      
        
    </div>
  </>
  );
};

export default DealersManagementChart;

