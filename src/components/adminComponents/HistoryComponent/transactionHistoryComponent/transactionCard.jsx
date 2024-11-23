import React, { useState } from 'react';
import cardIcon1 from '../../../../assets/AdminAssets/cardIcon1.png';
import cardIcon2 from '../../../../assets/AdminAssets/cardIcon2.png';
import FranchiseeCard from '../../../adminComponents/FranchiseManagement/FranchiseeCard';

const TransactionCard = () => {
  // Dummy data
  const [data] = useState([
    {
      title: 'Total Expense',
      icon: <img src={cardIcon1} alt="Franchisee Icon" className="w-[3rem] aspect-square" />,
      count: 120, // Total franchisees
      change: 10, // Percentage increase
      isPositive: true,
    },
    {
      title: 'Total Income',
      icon: <img src={cardIcon2} alt="Active Franchisee Icon" className="w-[3rem] aspect-square" />,
      count: 85, // Active franchisees
      change: -0.5, // Percentage change
      isPositive: false,
    },
    {
      title: 'Total Expenditure',
      icon: <img src={cardIcon2} alt="Inactive Franchisee Icon" className="w-[3rem] aspect-square" />,
      count: 35, // Inactive franchisees
      change: -3, // Percentage change
      isPositive: false,
    },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
      {data.length > 0 ? (
        data.map((item, index) => (
          <FranchiseeCard
            key={index}
            title={item.title}
            icon={item.icon}
            count={item.count}
            change={item.change}
            isPositive={item.isPositive}
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TransactionCard;
