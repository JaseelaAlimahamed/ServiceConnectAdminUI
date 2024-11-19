import React, { useEffect, useState } from 'react';
import cardIcon1 from '../../../assets/AdminAssets/cardIcon1.png';
import cardIcon2 from '../../../assets/AdminAssets/cardIcon2.png';
import FranchiseeCard from '../../adminComponents/FranchiseManagement/FranchiseeCard';
import { getFranchiseeStats,getActiveFranchiseeStats } from '../../../service/api/admin/GetApi';

const FranchiseeCardDashboard = () => {
  const [data, setData] = useState([]);

  // Fetch data from both APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [franchiseeStats, activeStats] = await Promise.all([
          getFranchiseeStats(),
          getActiveFranchiseeStats(),
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
            icon: <img src={cardIcon2} alt="Franchisee Icon" className="w-[3rem] aspect-square" />,
            count: activeStats.active_franchisees_current_month,
            change: activeStats.percentage_change,
            isPositive: activeStats.percentage_change >= 0,
          },
          {
            title: 'Inactive Franchisees',
            icon: <img src={cardIcon2} alt="Franchisee Icon" className="w-[3rem] aspect-square" />,
            count: Math.max(
              franchiseeStats.total_franchisees - activeStats.active_franchisees_current_month,
              0
            ),
            change: 0, // No percentage change available for inactive franchisees
            isPositive: false,
          },
        ];
        setData(processedData);
      } catch (error) {
        console.error("Error fetching franchisee stats:", error);
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
