import React from 'react';
import PayoutScheduleTable from '../../components/adminComponents/PayoutSchedules/PayoutScheduleTable';

const PayoutSchedule = () => {


    const schedules = [
        {
          name: "All Dealers",
          type: "Monthly",
          role: "All Dealers",
          date: "",
          icon: "https://cdn.openart.ai/published/yFPd4qLOC4gLwjBdASN6/pxaLRO6Y_59vN_1024.webp",
        },
        {
          name: "All Franchisee",
          type: "Monthly",
          role: "All Franchisee",
          date: "",
          icon: "https://cdn.openart.ai/published/yFPd4qLOC4gLwjBdASN6/Ki5lOnzo_1ILJ_1024.webp",
        },
        {
          name: "All Service Providers",
          type: "Weekly",
          role: "All Service Providers",
          date: "",
          icon: "https://cdn.openart.ai/published/yFPd4qLOC4gLwjBdASN6/Ki5lOnzo_1ILJ_1024.webp",
        },
        {
          name: "Thomas",
          type: "Service Provider",
          role: "Service Provider",
          date: "Feb 24",
          icon: "https://cdn.openart.ai/published/yFPd4qLOC4gLwjBdASN6/Ki5lOnzo_1ILJ_1024.webp",
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
    <div className="max-w-3xl mx-auto p-4">
      <PayoutScheduleTable schedules={schedules} />
    </div>
  );
}

export default PayoutSchedule;
