import React from "react";
import ServiceCard from "../../components/franchiseComponents/service_Provider_Details/Registered_Service_Details";
import AdCard from "../../components/franchiseComponents/service_Provider_Details/Ads_Details";
import PaymentHistory from "../../components/franchiseComponents/service_Provider_Details/Payment_History";
import ReviewCard from "../../components/franchiseComponents/service_Provider_Details/Review";
import RecentServiceDetails from "../../components/franchiseComponents/service_Provider_Details/Recent_ServiceDetails";
import ProfileCard from "../../components/franchiseComponents/service_Provider_Details/Service_Provider_Profile";

const ServiceProviderPage = () => {
  return (
    <div className="p-6 lg:flex lg:space-x-6 bg-gray-100">
      {/* Left side (Main content) */}
      <div className="lg:w-3/4 space-y-8">
        {/* Service Provider Details */}
        <ProfileCard />

        {/* Registered Services */}
        {/* <div className="bg-white p-6 rounded-lg shadow-lg space-y-4"> */}
        {/* <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Registered Services</h3>
            <button className="bg-[#4D44B5] text-white px-4 py-2 rounded-lg">New Service</button>
          </div> */}
        <div className="space-y-3">
          <ServiceCard />
          {/* <ServiceCard title="Health & Wellness" totalOrder="1,456" conversion="26%" />
            <ServiceCard title="Automotive Services" totalOrder="1,456" conversion="26%" />
            <ServiceCard title="Education & Tutoring" totalOrder="1,456" conversion="26%" /> */}
          {/* </div> */}
        </div>

        {/* Ads Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-lg space-y-4"> */}
        {/* <h3 className="text-xl font-semibold">Ads</h3> */}
        <div className="space-y-3">
          <AdCard />
          {/* <AdCard title="Ad2" reach="1,456" clicks="26%" /> */}
          {/* <AdCard title="Boosted Profile" reach="1,456" clicks="26%" /> */}
        </div>
        {/* </div> */}

        {/* Payment History */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          {/* <h3 className="text-xl font-semibold">Payment History</h3> */}
          <PaymentHistory />
        </div>

        {/* Reviews Section */}
        {/* <div className="bg-white p-6 rounded-lg shadow-lg space-y-4"> */}
        {/* <h3 className="text-xl font-semibold">Reviews</h3> */}
        <ReviewCard />
        <ReviewCard />
        {/* </div> */}
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-1/4 mt-8 lg:mt-0">
        {/* <div className="bg-white p-6 rounded-lg shadow-lg space-y-6"> */}
        {/* <h3 className="text-xl font-semibold">Recent Service Details</h3> */}
        <RecentServiceDetails />
        {/* </div> */}
      </div>
    </div>
  );
};

export default ServiceProviderPage;
