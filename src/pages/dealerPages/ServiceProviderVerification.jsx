import ServiceProviderProfile from "../../components/dealerComponents/ServiceProviderVerification/ServiceProviderProfile";
import AnalyticsComponent from "../../components/dealerComponents/ServiceProviderVerification/AnalyticsComponent";
import ButtonComponent from "../../components/dealerComponents/ServiceProviderVerification/ButtonComponent";

const ServiceProviderVerification = () => {
  return (
    <div className="flex p-10 justify-center items-center  flex-col gap-5 ">
      <ServiceProviderProfile
        name="Karen Hope"
        username="Plumber"
        franchise="K Top"
        address="Jakartra,Indonesia"
        phone="+12 34567 890"
        email="hope@gmail.com"
      />
      <AnalyticsComponent
        head="Registered Services"
        conversionText="Conversion"
        chartText="Total Orders"
        data={[
          {
            id: 1,
            title: "Home Services",
            value: "1.234",
            conversion: "26%",
          },
          {
            id: 2,
            title: "Health & Wellness",
            value: "5.678",
            conversion: "24%",
          },
          {
            id: 3,
            title: "Automative Services",
            value: "6.878",
            conversion: "24%",
          },
          {
            id: 4,
            title: "Education & Tutoring",
            value: "1.3448",
            conversion: "29%",
          },
          {
            id: 5,
            title: "Business Services",
            value: "2.938",
            conversion: "14%",
          },
        ]}
      />
      <AnalyticsComponent
      head="Ads"
      conversionText="Clicks"
      chartText="Total Reach"
        data={[
          {
            id: 1,
            title: "Ad1",
            value: "1.234",
            conversion: "26%",
          },
          {
            id: 2,
            title: "Ad2",
            value: "5.678",
            conversion: "24%",
          },
          {
            id: 3,
            title: "Boosted Profile",
            value: "6.878",
            conversion: "24%",
          },
        ]}
      />
      <div className="max-w-screen-lg w-full flex flex-col gap-3">

      <ButtonComponent children="VERIFY"  className="bg-dark_green " />
      <ButtonComponent children="DECLINE"  className="bg-lite_red " />
      </div>
    </div>
  );
};

export default ServiceProviderVerification;
