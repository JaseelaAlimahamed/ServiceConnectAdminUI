import React, { useEffect, useState } from 'react';
import ServiceProviderProfile from "./ServiceProviderProfile";
import Activitycard from "../../dealerComponents/dashboardComponents/Activitycard";
import AnalyticsComponent from "../../dealerComponents/verificationComponents/AnalyticsComponent";
import PaymentHistoryTable from '../profileComponents/PaymentHistoryTable';
import { ServiceprovideDetails } from '../../../service/api/franchise/PostApi';
import { useParams } from 'react-router-dom';

const ServiceProviderDashboard = () => {
  const { id } = useParams();
  const [serviceProvider, setServiceProvider] = useState(null);
  const [summary, setSummary] = useState({});
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceProviderDetails = async () => {
      try {
        const response = await ServiceprovideDetails(id);
        console.log(response)
        const { service_provider, summary, ads } = response.data;
        setServiceProvider(service_provider);
        setSummary(summary);
        setAds(ads);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch service provider details");
        console.error("Error fetching service provider details:", err);
        setLoading(false);
      }
    };
    fetchServiceProviderDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="service-provider-dashboard">
      <div className="py-4 flex max-lg:flex-col gap-4 justify-around p-4 max-[1100px]:flex-col">
        <div className="w-[100%]">
          {serviceProvider && (
            <>
              <ServiceProviderProfile
                name={serviceProvider.personal_info.full_name}
                username={serviceProvider.personal_info.gender === "M" ? "Male" : "Female"}
                franchise={serviceProvider.business_info.franchisee}
                address={serviceProvider.business_info.address_proof_document}
                phone={serviceProvider.personal_info.phone_number}
                email={serviceProvider.personal_info.email}
              />
              <div className="p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
                <AnalyticsComponent
                  head="Summary"
                  conversionText="Pending Requests"
                  chartText="Active Ads"
                  data={[
                    { id: 1, title: "Total Services", value: summary.total_services || "0" },
                    { id: 2, title: "Total Reviews", value: summary.total_reviews || "0" },
                    { id: 3, title: "Average Rating", value: summary.average_rating || "0" },
                    { id: 4, title: "Pending Requests", value: summary.pending_requests || "0" },
                    { id: 5, title: "Active Ads", value: summary.active_ads || "0" },
                  ]}
                />
              </div>
            </>
          )}

          <div className="p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
            <AnalyticsComponent
              head="Ads"
              conversionText="Clicks"
              chartText="Total Reach"
              data={ads.map((ad, index) => ({
                id: index + 1,
                title: ad.title || `Ad ${index + 1}`,
                value: ad.reach || "0",
                conversion: `${ad.clicks || "0"}%`,
              }))}
            />
          </div>
          <div className="p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
            <PaymentHistoryTable
              tableColConfig={["PaymentId", "Date", "PaymentAmount", "ServiceStatus"]}
              tableDataConfig={[
                {
                  paymentId: "#12345678",
                  date: "March 25 2024,12:45 PM",
                  paymentAmount: "50,542",
                  serviceStatus: "Complete",
                },
                // Add dynamic payment data here
              ]}
              tableConfig={{ title: "Payment History", type: "paymentslog" }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Activitycard type="Titlecard" title="Recent Activities" date="Monday 12th March 2023" />
          {/* Add dynamic activity cards based on recent services */}
          <button className="bg-slate-300 rounded-3xl text-violet h-14 text-xl mt-10 w-[100%]">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
