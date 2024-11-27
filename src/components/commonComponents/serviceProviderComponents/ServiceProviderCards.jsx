import React, { useEffect, useState } from "react";
import { getServiceProviderCounts } from "../../../service/api/franchise/GetApi"; // Import the API function
import { store } from "../../../Redux/store"; // Assuming Redux store
import { serviceprovidercount } from "../../../service/api/dealer/GetApi";

const ServiceProviderCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [isFranchise, setIsFranchise] = useState(true);

  // Check if the user is a franchise
  useEffect(() => {
    const state = store.getState();
    const { role } = state.auth;

    // Set the state accordingly based on the role
    if (role === "franchise") {
      setIsFranchise(true);
    } else {
      setIsFranchise(false);
    }
  }, []);

  // Fetch data from the API when the user is a franchise
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await serviceprovidercount();
        const { total_service_providers, approved_count, pending_count } =
          result.data;

        // Update cardData with dynamic API data
        const processedData = [
          {
            title: total_service_providers,
            subtitle: "Service Providers",
            iconBg: "bg-[#6F4FF2]",
          },
          {
            title: approved_count,
            subtitle: "Verified",
            iconBg: "bg-[#50BB25]",
          },
          {
            title: pending_count,
            subtitle: "Verification Requests",
            iconBg: "bg-[#F9D62C]",
          },
        ];

        setCardData(processedData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (isFranchise) {
      fetchData(); // Only fetch data if the user is a franchise
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Fetch data when isFranchise changes to true

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
