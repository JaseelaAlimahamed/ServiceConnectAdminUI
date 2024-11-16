import React from 'react';
import ServiceProviderProfile from "./ServiceProviderProfile";
import Activitycard from "../../dealerComponents/dashboardComponents/Activitycard";
import AnalyticsComponent from "../../dealerComponents/verificationComponents/AnalyticsComponent";
import PaymentHistoryTable from '../profileComponents/PaymentHistoryTable';


const ServiceProviderDashboard = () => {
  const dummyServiceProvider = {
    name: 'Karen Hope',
    rating: 4.9,
    role: 'Plumber',
    franchise: 'K Top',
    address: 'Jakarta, Indonesia',
    phone: '+12 345 6789 0',
    email: 'Hope@mail.com',
  };

  const dummyServices = [
    { name: 'Home Services', orders: 1456, conversion: 26 },
    { name: 'Health & Wellness', orders: 1456, conversion: 26 },
    { name: 'Automotive Services', orders: 1456, conversion: 26 },
    { name: 'Education & Tutoring', orders: 1456, conversion: 26 },
    { name: 'Business Services', orders: 1456, conversion: 26 },
  ];

  const recentServices = [
    { name: 'Tap Repair', date: 'March 20, 2023', time: '09:00 - 10:00 AM', status: 'Booked' },
    { name: 'Drain Blockage', date: 'March 20, 2023', time: '09:00 - 10:00 AM', status: '' },
    { name: 'Light Change', date: 'March 28, 2023', time: '09:00 - 10:00 AM', status: '' },
    { name: 'Fan Repair', date: 'March 28, 2023', time: '09:00 - 10:00 AM', status: '' },
  ];

  const tableConfig = { title: "Payment History", type: "paymentslog" };

  const tableDataConfig = [
    {
      paymentId: "#12345678",
      date: "March 25 2024,12:45 PM",
      paymentAmount: "50,542",
      serviceStatus: "Complete",
    },
    {
      paymentId: "#65432109",
      date: "April 10 2024,12:45 PM",
      paymentAmount: "15,275",
      serviceStatus: "Cancelled",
    },
    {
      paymentId: "#12345678",
      date: "March 25 2024,12:45 PM",
      paymentAmount: "32,542",
      serviceStatus: "Cancelled",
    },
    {
      paymentId: "#12345678",
      date: "March 25 2024,12:45 PM",
      paymentAmount: "40,542",
      serviceStatus: "Cancelled",
    },
    {
      paymentId: "#78912345",
      date: "August 20 2024,12:45 PM",
      paymentAmount: "25,100",
      serviceStatus: "Complete",
    },
    {
      paymentId: "#98765432",
      date: "July 14 2024,12:45 PM",
      paymentAmount: "32,890",
      serviceStatus: "Pending",
    },
  ];

  const tableColConfig = [
    "PaymentId",
    "Date",
    "PaymentAmount",
    "ServiceStatus",
  ];

  return (
    <div className="service-provider-dashboard">
      
      <div className= 'py-4 flex max-lg:flex-col gap-4 justify-around p-4 max-[1100px]:flex-col'>
        <div className='w-[100%]'>
            <div>    
            <ServiceProviderProfile
                name={dummyServiceProvider.name}
                username={dummyServiceProvider.role}
                franchise={dummyServiceProvider.franchise}
                address={dummyServiceProvider.address}
                phone={dummyServiceProvider.phone}
                email={dummyServiceProvider.email}
            
            />
            </div>
            <div className=" p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
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
            </div>
            <div className=" p-5 w-full overflow-x-auto max-[1099px]:w-[150%]"> 
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
            </div>
            <div className=" p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
                <PaymentHistoryTable
                tableColConfig={tableColConfig}
                tableDataConfig={tableDataConfig}
                tableConfig={tableConfig}
                />
            </div>

        </div>
        <div className="flex  flex-col gap-5   items-center ">
          <Activitycard type={"Titlecard"} title={"Recent Activites"} date={"Monday 12th March 2023"}></Activitycard>
          <Activitycard
            type="Activitycard"
            status={"Active"}
            title={"Tap Repair"}
            date={"Mar 20,2021"}
            time={"9:00 - 10:00 AM"}
            name={"Keshavan"}
            subtitle={"Booked"}
          ></Activitycard>
          <Activitycard
            type="Activitycard"
            status={"Pending"}
            title={"Drain Blockage"}
            date={"April 15,2023"}
            time={"9:00 - 10:00 AM"}
          ></Activitycard>

          <Activitycard
            type="Activitycard"
            status={"Disable"}
            title={"Light Change"}
            date={"april 15,2023"}
            time={"9:00 - 10:00 AM"}
          ></Activitycard>

          <Activitycard
            type="Activitycard"
           status={"Active"}
            title={"Fan Repair"}
            date={"april 15,2023"}
            time={"9:00 - 10:00 AM"}

          ></Activitycard>

          <button className="bg-slate-300 rounded-3xl text-violet h-14 text-xl mt-10 w-[100%] ">
            View more{" "}
          </button>
        </div>

      </div>
     
    </div>
  );
};

export default ServiceProviderDashboard;
