import React, { useEffect, useState } from "react";
import Dealerinfocard from "../../components/dealerComponents/dashboardComponents/Dealerinfocard";
import Franchisee from "../../components/dealerComponents/dashboardComponents/Franchisee";
import PaymentHistoryTable from "../../components/commonComponents/profileComponents/PaymentHistoryTable";
// import ReUsableTable from "../../components/reUsableComponents/ReUsableTable"
import Activitycard from "../../components/dealerComponents/dashboardComponents/Activitycard";
import Graph from "../../components/dealerComponents/dashboardComponents/Graph";
import { dashboard,recentactivities } from "../../service/api/dealer/GetApi";

function DealerDashboard() {
  const [recentActivities, setRecentActivities] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //recentactivities
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await recentactivities();
        setRecentActivities(result.data.results);
        console.log(result.data,"recentactivities ---")
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //dashboard Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dashboard();
        setData(result.data.dealer);
        console.log(result.data.dealer,"dataresult ---")
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


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

  const Graphdata = [
    { name: "Jan", income: "100" },
    { name: "Feb", income: "200" },
    { name: "Mar", income: "250" },
    { name: "Apr", income: "200" },
    { name: "May", income: "150" },
    { name: "Jun", income: "200" },
    { name: "Jul", income: "250" },
    { name: "Aug", income: "450" },
    { name: "Sep", income: "600" },
    { name: "Oct", income: "680" },
    { name: "Nov", income: "690" },
    { name: "Dec", income: "730" },
  ];
  return (
    <div>
      <div className="flex  flex-warp mx-5 max-[1100px]:flex-col  ">
        <div className="flex flex-wrap gap-5 max-[1100px]:flex-col  place-content-center">
          <Dealerinfocard
            title={"Total Earnings"}
            type={"Infocard"}
            number={"230"}
            percentage={20}
          ></Dealerinfocard>
          <Dealerinfocard
            title={"Total Service Providers"}
            type={"Infocard"}
            number={"230"}
            percentage={20}
          ></Dealerinfocard>
          <Dealerinfocard
            title={"Total Service "}
            type={"Infocard"}
            number={"230"}
            percentage={20}
          ></Dealerinfocard>
          <Dealerinfocard
            title={"Registration Earnings"}
            type={"Infocard"}
            number={"230"}
            percentage={20}
          ></Dealerinfocard>
          <Dealerinfocard
            title={"Commission Earnings"}
            type={"Infocard"}
            number={"230"}
            percentage={-20}
          ></Dealerinfocard>
          <Dealerinfocard
            title={"Ads Earnings"}
            type={"Infocard"}
            number={"230"}
            percentage={-12}
          ></Dealerinfocard>
        </div>

        <Dealerinfocard type={"Pendingcard"}></Dealerinfocard>
      </div>
      <div className="py-12 flex max-lg:flex-col gap-4 justify-around  p-4 max-[1100px]:flex-col   ">
        <div className="w-[67%]">
          {data && (
            <Franchisee
              franchiseename={data.franchisee_name || "Unknown"}
              daysleft={45} 
              validity={"13/02/2024"} 
              contactname={data.full_name || "Unknown"}
              address={data.address || "No Address"}
              phone={data.phone_number || "No Phone"}
              email={data.email || "No Email"}
            />
          )}

          <div className=" p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
            <PaymentHistoryTable
              tableColConfig={tableColConfig}
              tableDataConfig={tableDataConfig}
              tableConfig={tableConfig}
            />
          </div>
        </div>
        <div className="flex  flex-col gap-5   items-center ">
          <Activitycard
            type={"Titlecard"}
            title={"Recent Activites"}
            date={"Monday 12th March 2023"}
          ></Activitycard>
          {recentActivities.map((activity, index) => (
            <Activitycard
              key={activity.id || index}
              type="Activitycard"
              status={activity.status || "Unknown"}
              title={activity.title || "No Title"}
              date={new Date(activity.created).toLocaleDateString() || "No Date"}
              time={new Date(activity.created).toLocaleTimeString() || "No Time"}
              subtitle={activity.description || "No Description"}
              name={`Provider ID: ${activity.service_provider || "Unknown"}`}
            />
          ))}
          <button className="bg-slate-300 rounded-3xl text-violet h-14 text-xl mt-10 w-[100%] ">
            View more{" "}
          </button>
        </div>
      </div>
      <Graph title={"Income"} data={Graphdata}></Graph>
    </div>
  );
}

export default DealerDashboard;
