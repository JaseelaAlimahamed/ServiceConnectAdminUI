import React, { useEffect, useState } from 'react';
import cardIcon1 from '../../../assets/AdminAssets/cardIcon1.png';
import cardIcon2 from '../../../assets/AdminAssets/cardIcon2.png';
import FranchiseeCard from '../../adminComponents/FranchiseManagement/FranchiseeCard';
import { getFranchiseeStats, getActiveFranchiseeStats, getInActiveFranchiseeStats } from '../../../service/api/admin/GetApi';

const FranchiseeCardDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from all three APIs
        const [franchiseeStats, activeStats, inactiveStats] = await Promise.all([
          getFranchiseeStats(),
          getActiveFranchiseeStats(),
          getInActiveFranchiseeStats(),
        ]);

        const processedData = [
          {
            title: 'Franchisees',
            icon: <img src={cardIcon1} alt="Franchisee Icon" className="w-[3rem] aspect-square" />,
            count: franchiseeStats.total_franchisees,
            change: franchiseeStats.percentage_increase,
            isPositive: franchiseeStats.percentage_increase >= 0,
          },
          {
            title: 'Active Franchisees',
            icon: <img src={cardIcon2} alt="Active Franchisee Icon" className="w-[3rem] aspect-square" />,
            count: activeStats.active_franchisees_current_month,
            change: activeStats.percentage_change,
            isPositive: activeStats.percentage_change >= 0,
          },
          {
            title: 'Inactive Franchisees',
            icon: <img src={cardIcon2} alt="Inactive Franchisee Icon" className="w-[3rem] aspect-square" />,
            count: inactiveStats.active_franchisees_current_month, // Assuming this field refers to inactive franchisees
            change: inactiveStats.percentage_change,
            isPositive: inactiveStats.percentage_change >= 0,
          },
        ];

        setData(processedData);
      } catch (error) {
        console.error('Error fetching franchisee stats:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
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
