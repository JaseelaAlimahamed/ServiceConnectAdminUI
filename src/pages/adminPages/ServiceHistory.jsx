import React, { useEffect, useState } from "react";
import ServiceTable from "../../components/adminComponents/HistoryComponent/ReusableHistoryTable";
import ServiceHistoryCard from "../../components/adminComponents/HistoryComponent/ReusableHistoryCard";
import { getServiceHistory } from "../../service/api/admin/GetApi";
import cardIcon1 from "../../assets/AdminAssets/cardIcon1.png";
import cardIcon2 from "../../assets/AdminAssets/cardIcon2.png";

function ServiceHistory() {
  const [serviceCardData, setserviceCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tableColConfig = [
    "JOB_ID",
    "Date",
    "Franchisee",
    "Agent",
    "Service_Provider_ID",
    "Customer_ID",
    "Customer_Type",
    "Job_Type",
    "Status",
    "Action",
  ];

  const tableDataConfig = [
    {
      JOB_ID: "1",
      Date: "July 14 2024,12:45 PM",
      Franchisee: "1",
      Agent: "abc",
      Service_Provider_ID: "1",
      Customer_ID: "1",
      Customer_Type: "aska",
      Job_Type: "jkhdkj",
      Status: "Completed",
      Action: "--",
    },
    {
      JOB_ID: "2",
      Date: "Aug 14 2024,10:30 AM",
      Franchisee: "2",
      Agent: "def",
      Service_Provider_ID: "2",
      Customer_ID: "2",
      Customer_Type: "xyz",
      Job_Type: "cleaning",
      Status: "Pending",
      Action: "--",
    },
  ];

  // Fetch Service History
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getServiceHistory();
        const summary = response.results?.summary || {};

        // Transform API data into card format
        const cardData = [
          {
            title: "Total Jobs",
            icon: (
              <img
                src={cardIcon1}
                alt="Total Jobs Icon"
                className="w-[3rem] aspect-square"
              />
            ),
            count: summary.total_jobs,
            change: 0,
            isPositive: true,
          },
          {
            title: "Active Jobs",
            icon: (
              <img
                src={cardIcon2}
                alt="Active Jobs Icon"
                className="w-[3rem] aspect-square"
              />
            ),
            count: summary.active_jobs,
            change: 0,
            isPositive: true,
          },
          {
            title: "Completed Jobs",
            icon: (
              <img
                src={cardIcon2}
                alt="Completed Jobs Icon"
                className="w-[3rem] aspect-square"
              />
            ),
            count: summary.completed_jobs,
            change: 0,
            isPositive: true,
          },
        ];
        setserviceCardData(cardData);
      } catch (err) {
        console.error("Error fetching service history:", err);
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ServiceHistoryCard data={serviceCardData} />
      )}
      <ServiceTable data={tableDataConfig} columns={tableColConfig} />
    </div>
  );
}

export default ServiceHistory;
