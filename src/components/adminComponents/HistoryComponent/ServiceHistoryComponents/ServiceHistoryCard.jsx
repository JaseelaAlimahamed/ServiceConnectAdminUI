import React, { useState, useEffect } from 'react';
import cardIcon1 from '../../../../assets/AdminAssets/cardIcon1.png';
import cardIcon2 from '../../../../assets/AdminAssets/cardIcon2.png';
import FranchiseeCard from '../../../adminComponents/FranchiseManagement/FranchiseeCard';
import { getServiceHistory } from '../../../../service/api/admin/GetApi'; // Import your API function

const ServiceHistoryCard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceHistory = async () => {
      try {
        setLoading(true);
        const response = await getServiceHistory();
        const { summary } = response.results;

        const formattedData = [
          {
            title: 'Total Jobs',
            icon: <img src={cardIcon1} alt="Total Jobs Icon" className="w-[3rem] aspect-square" />,
            count: summary.total_jobs,
            change: 0, 
            isPositive: true,
          },
          {
            title: 'Active Jobs',
            icon: <img src={cardIcon2} alt="Active Jobs Icon" className="w-[3rem] aspect-square" />,
            count: summary.active_jobs,
            change: 0,
            isPositive: true,
          },
          {
            title: 'Completed Jobs',
            icon: <img src={cardIcon2} alt="Completed Jobs Icon" className="w-[3rem] aspect-square" />,
            count: summary.completed_jobs,
            change: 0, 
            isPositive: true,
          },
        ];

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch service history:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceHistory();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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

export default ServiceHistoryCard;
