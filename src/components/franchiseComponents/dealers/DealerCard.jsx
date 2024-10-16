import React from 'react'

function DealerCard({ icon, title, count, percentage, percentageColor , iconBackgroundColor }) {
    return (
        <div className="bg-white flex justify-center items-center gap-4 shadow-sm p-4 rounded-lg font-poppins">
          <div className={`w-12 h-12 ${iconBackgroundColor} flex items-center justify-center  rounded-full`}>
            {icon}
          </div>
          <div>
            <p className="text-sm text-light_gray">{title}</p>
            <h1 className="font-bold text-dark_blue">{count}</h1>
            <div className='flex items-center gap-1'>
                <p className={`text-sm font-semibold ${percentageColor}`}>
                    {percentage}
                </p>
                <span className='text-sm text-light_gray' >than last month</span>
            </div>
          </div>
        </div>
      );
    };

export default DealerCard
