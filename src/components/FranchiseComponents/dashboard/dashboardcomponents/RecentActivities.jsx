
// import React from 'react';
// import { Plus, TrendingUp, MoreHorizontal } from 'lucide-react';

// const RecentActivities = () => {
//   const services = [
//     'Home Services',
//     'Health & Wellness',
//     'Automotive Services',
//     'Education & Tutoring',
//     'Business Services',
//   ];

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-[#303972] mb-4 sm:mb-0">Recent Activities</h2>
//         <button className="bg-[#4D44B5] text-white px-4 py-2 rounded-full flex items-center hover:bg-[#3D35A1] transition-colors">
//           <Plus size={20} className="mr-2" />
//           New Service
//         </button>
//       </div>
//       <div className="space-y-4">
//         {services.map((service, index) => (
//           <ServiceItem key={index} name={service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ServiceItem = ({ name }) => (
//   <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
//     <div className="flex items-center space-x-4">
//       <div className="w-20 h-20 bg-[#C1BBEB] rounded-lg"></div>
//       <span className="font-poppins text-lg font-bold leading-9 text-left text-[#303972]">{name}</span>
//     </div>

//     <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//       <div className="flex items-center space-x-2">
//         <div className="w-16 h-8">
//           <svg viewBox="0 0 80 40" className="w-full h-full">
//             <rect x="0" y="15" width="7" height="25" fill="#4D44B5" rx="2" />
//             <rect x="18" y="5" width="7" height="35" fill="#4D44B5" rx="2" />
//             <rect x="36" y="0" width="7" height="40" fill="#4D44B5" rx="2" />
//             <rect x="54" y="10" width="7" height="30" fill="#4D44B5" rx="2" />
//           </svg>
//         </div>
//         <div className="text-start">
//           <p className="font-bold text-[#303972]">1,456</p>
//           <p className="text-xs text-[#A098AE]">Total Order</p>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <TrendingUp size={24} className="text-[#4D44B5]" />
//         <div className="text-start">
//           <p className="font-bold text-[#303972]">26%</p>
//           <p className="text-xs text-[#A098AE]">Conversation</p>
//         </div>
//       </div>
//       <MoreHorizontal size={24} className="text-[#A098AE] cursor-pointer" />
//     </div>
//   </div>
// );

// export default RecentActivities;

