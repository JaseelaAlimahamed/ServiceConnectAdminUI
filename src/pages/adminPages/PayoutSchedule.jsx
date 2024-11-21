import React from 'react';
import PayoutScheduleTable from '../../components/adminComponents/PayoutSchedules/PayoutScheduleTable';
import PayoutScheduleForm from '../../components/adminComponents/PayoutSchedules/PayoutScheduleForm';
import avtar1 from '../../assets/AdminAssets/Avatar1.jpeg'
import avtar2 from '../../assets/AdminAssets/Avatar2.jpeg'

const PayoutSchedule = () => {


    const schedules = [
        {
          name: "All Dealers",
          type: "Monthly",
          role: "All Dealers",
          date: "",
          icon: `${avtar1}`,
        },
        {
          name: "All Franchisee",
          type: "Monthly",
          role: "All Franchisee",
          date: "",
          icon: `${avtar2}`,
        },
        {
          name: "All Service Providers",
          type: "Weekly",
          role: "All Service Providers",
          date: "",
          icon: `${avtar2}`,
        },
        {
          name: "Thomas",
          type: "Service Provider",
          role: "Service Provider",
          date: "Feb 24",
          icon: `${avtar2}`,
        },
        {
          name: "Banu",
          type: "Service Provider",
          role: "Service Provider",
          date: "Feb 15",
          icon: "https://cdn.openart.ai/published/yFPd4qLOC4gLwjBdASN6/vHliRHeZ_ld4e_1024.webp",
        },
      ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <PayoutScheduleTable schedules={schedules} />
      <div className='mt-11'>
      <PayoutScheduleForm/>

      </div>
    </div>
  );
}

export default PayoutSchedule;
