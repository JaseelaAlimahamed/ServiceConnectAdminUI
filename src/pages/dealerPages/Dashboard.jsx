import React from "react";
import Dealerinfocard from "../../components/dealerComponents/dashboardComponents/Dealerinfocard";
import Franchisee from "../../components/dealerComponents/dashboardComponents/Franchisee";
import Table from "../../components/reUsableComponents/Table"
import Activitycard from "../../components/dealerComponents/dashboardComponents/Activitycard";
import Graph from "../../components/dealerComponents/dashboardComponents/Graph";
function Dashboard() {
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
          <Franchisee
            franchiseename={"franchisee"}
            daysleft={45}
            validity={"13/02/2024"}
            contactname={"amarnadh"}
            address={"kochi,kerala"}
            phone={2323242}
            email={"ajfs@gmail.com"}
          >
            {" "}
          </Franchisee>

          <div className=" p-5 w-full overflow-x-auto max-[1099px]:w-[150%]">
            <Table
              tableColConfig={tableColConfig}
              tableDataConfig={tableDataConfig}
              tableConfig={tableConfig}
            />
          </div>
        </div>
        <div className="flex  flex-col gap-5   items-center ">
          <Activitycard type="Titlecard"></Activitycard>
          <Activitycard
            type="Activitycard"
            status={"Active"}
            title={"New service registration"}
            date={"mar 20,2021"}
            time={"9:00 - 10:00 AM"}
            subtitle={"tapwork"}
            name={"rakhavan"}
          ></Activitycard>
          <Activitycard
            type="Activitycard"
            status={"Pending"}
            title={"New ad posted"}
            date={"april 15,2023"}
            time={"9:00 - 10:00 AM"}
            name={"Raju"}
            subtitle={"50% off"}
          ></Activitycard>

          <Activitycard
            type="Activitycard"
            status={"Disable"}
            title={"New ad posted"}
            date={"april 15,2023"}
            time={"9:00 - 10:00 AM"}
            name={"Raju"}
            subtitle={"50% off"}
          ></Activitycard>
          <Activitycard
            type="Activitycard"
           status={"Active"}
            title={"New ad posted"}
            date={"april 15,2023"}
            time={"9:00 - 10:00 AM"}
            name={"Raju"}
            subtitle={"50% off"}
          ></Activitycard>

          <button className="bg-slate-300 rounded-3xl text-violet h-14 text-xl mt-10 w-[100%] ">
            View more{" "}
          </button>
        </div>
      </div>
      <Graph title={"Income"} data={Graphdata}></Graph>
    </div>
  );
}

export default Dashboard;
