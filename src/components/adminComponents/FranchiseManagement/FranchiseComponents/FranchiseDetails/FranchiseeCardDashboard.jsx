import React from 'react';
import cardIcon1 from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/cardIcon1.png";
import cardIcon2 from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/cardIcon2.png";
import FranchiseeCard from '../FranchiceeReuseableComponents/FranchiseeCard';


const FranchiseeCardDashboard = () => {
  const data = [
    { 
      title: 'Franchisees',
      icon: <img src={cardIcon1} alt="Franchisee Icon" className="w-[4rem] aspect-square" />, // Smaller icons for mobile
      count: 932, 
      change: 10, 
      isPositive: true 
    },
    { 
      title: 'Active Franchisees', 
      icon: <img src={cardIcon2} alt="Franchisee Icon" className="w-[4rem] aspect-square" />, // Smaller icons for mobile
      count: 754, 
      change: -0.5, 
      isPositive: false 
    },
    { 
      title: 'Inactive Franchisees', 
      icon: <img src={cardIcon2} alt="Franchisee Icon" className="w-[4rem] aspect-square" />, // Smaller icons for mobile
      count: 754, 
      change: -0.5, 
      isPositive: false 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4">
      {data.map((item, index) => (
        <FranchiseeCard
          key={index} 
          title={item.title} 
          icon={item.icon} 
          count={item.count} 
          change={item.change} 
          isPositive={item.isPositive} 
        />
      ))}
    </div>
  );
};

export default FranchiseeCardDashboard;
