import React, { useEffect, useState } from 'react';
import { getServiceProviderCounts } from '../../../service/api/franchise/GetApi'; // Import the API function
import { store } from '../../../Redux/store'; // Assuming Redux store

const ServiceProviderCards = () => {
  const [cardData, setCardData] = useState([
    {
      title: 0,
      subtitle: "Service Providers",
      iconBg: "bg-[#6F4FF2]",
    },
    {
      title: 0,
      subtitle: "Verified",
      iconBg: "bg-[#50BB25]",
    },
    {
      title: 0,
      subtitle: "Verification Requests",
      iconBg: "bg-[#F9D62C]",
    },
  ]); // Initialize with dummy data
  const [isFranchise, setIsFranchise] = useState(false);

  // Check if the user is a franchise
  useEffect(() => {
    const state = store.getState();
    const { role } = state.auth;

    // Set the state accordingly based on the role
    if (role === 'franchise') {
      setIsFranchise(true);
    } else {
      setIsFranchise(false);
    }
  }, []);

  // Fetch data from the API when the user is a franchise
  useEffect(() => {
    const fetchData = async () => {
      if (!isFranchise) {
        return; // Prevent API call if the user is not a franchise
      }

      try {
        const serviceProviderCounts = await getServiceProviderCounts();

        const processedData = [
          {
            title: serviceProviderCounts.total_service_providers,
            subtitle: "Service Providers",
            iconBg: "bg-[#6F4FF2]",
          },
          {
            title: serviceProviderCounts.approved_count,
            subtitle: "Verified",
            iconBg: "bg-[#50BB25]",
          },
          {
            title: serviceProviderCounts.pending_count,
            subtitle: "Verification Requests",
            iconBg: "bg-[#F9D62C]",
          },
        ];

        setCardData(processedData); // Update state with the API data
      } catch (error) {
        console.error("Error fetching service provider counts:", error);
        // Keep using dummy data if the API call fails
      }
    };

    if (isFranchise) {
      fetchData(); // Only call the API if the user is a franchise
    }
  }, [isFranchise]); // Fetch data when isFranchise changes to true

  return (
    <div className="flex flex-wrap gap-5 pb-10 mx-10">
      {cardData.map((item, index) => (
        <div key={index} className="flex w-56 bg-primary rounded-xl px-4 py-3">
          <span
            className={`flex items-center justify-center h-14 w-14 mr-4 rounded-full ${item.iconBg}`}
          >
            <img src="/card-icon.svg" alt="Icon" />
          </span>
          <div>
            <h2 className="text-lg font-bold mb-1">{item.title}</h2>
            <p className="text-sm text-[#68676E]">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProviderCards;
