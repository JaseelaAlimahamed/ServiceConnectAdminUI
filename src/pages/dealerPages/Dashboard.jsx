import React from "react";
import Dealerinfocard from "../../components/dealerComponents/Dealerinfocard";
import Franchisee from "../../components/dealerComponents/Franchisee";
import Table from "../../components/ReUsableComponents/Table";
import Card from "../../components/reUsableComponents/Card";
import Graph from "../../components/dealerComponents/Graph";
import UserProfile from "../../components/adminComponents/UserProfile";
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

  const smallCardDetails = {
    title: "Recent Activities",
    variant: "large",
    subtitle: "Thursday,10th April,2021",
  };
  const cardDetails = [
    {
      id: 1,
      title: "New service registration",
      subtitle: "Tap work",
      name: "Keshavan",
      sideColor: "bg-violet",
      variant: "large",
      date: "March 20,2021",
      time: "09:00-10:00 AM",
    },
    {
      id: 2,
      title: "New Ad Posted",
      subtitle: "50% off",
      name: "Keshavan",
      sideColor: "bg-orange",
      variant: "large",
      date: "March 20,2021",
      time: "09:00-10:00 AM",
    },
    {
      id: 3,
      title: "New service registration",
      subtitle: "Tap work",
      name: "Raghavan",
      sideColor: "bg-dark_yellow",
      variant: "large",
      date: "March 20,2021",
      time: "09:00-10:00 AM",
    },
    {
      id: 4,
      title: "New service registration",
      subtitle: "Tap work",
      name: "Thomas",
      sideColor: "bg-dark_blue",
      variant: "large",
      date: "March 20,2021",
      time: "09:00-10:00 AM",
    },
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

      <div className="flex  flex-wrap  ">
<div className="grid grid-cols-3    gap-5 max-[1370px]:grid-cols-2 max-[530px]:grid-cols-1  max-[530px]:ml-[10%]">

     
        <Dealerinfocard title={"Total Earnings"} number={434} percentage={10}></Dealerinfocard>
        <Dealerinfocard title={"Total Service providers"} number={932} percentage={10}></Dealerinfocard>
        <Dealerinfocard title={"Total Earnings"} number={434} percentage={10}></Dealerinfocard>
        <Dealerinfocard title={"Total Earnings"} number={434} percentage={10}></Dealerinfocard>

             <Dealerinfocard title={"Total Earnings"} number={434} percentage={10}></Dealerinfocard>
             <Dealerinfocard title={"Total Earnings"} number={434} percentage={10}></Dealerinfocard>
      </div>
        <div className="bg-white  w-[260px]  mx-10 my-10 py-10 px-10 rounded-lg">
            <p   className="text font-semibold"  >Pending verificaton </p>

            <div className="flex mt-5 items-center gap-3"> <div className=' bg-violet size-14 rounded-full ml-[10%] '> </div> <h1 className="text-xl font-bold text-blue-950">32</h1>  </div>
           
        </div>
      </div>
     
      
      <div className="flex max-lg:flex-col   justify-around   max-[1378px]:flex-col ">  
        <div className="mx-5  my-5">
          
          <Franchisee franchiseename={"franchisee"} daysleft={45} validity={ "13/02/2024"} contactname={"amarnadh"} address={"kochi,kerala"} phone={2323242} email={"ajfs@gmail.com"}></Franchisee>

          <div className=" p-5 overflow-x-auto">
            <Table
              tableColConfig={tableColConfig}
              tableDataConfig={tableDataConfig}
              tableConfig={tableConfig}
            />
          </div>
          
        </div>
        <div>
          <div>
            <div className="mb-5 mt-5 max-[1360px]:ml-[20%]">
              <Card
                title={smallCardDetails.title}
                variant={smallCardDetails.variant}
                subtitle={smallCardDetails.subtitle}
              />
            </div>
            <div className="grid grid-cols-1 gap-5 max-[1366px]:grid-cols-4  max-[1158px]:grid-cols-2 max-[475px]:grid-cols-1 max-[475px]:ml-[20%]">
              {cardDetails.map((detail) => {
                return (
                  <Card
                    key={detail.id}
                    title={detail.title}
                    subtitle={detail.subtitle}
                    sideColor={detail.sideColor}
                    variant={detail.variant}
                    date={detail.date}
                    time={detail.time}
                    name={detail.name}
                  />
                );
              })}

              
            </div>
            <button className="bg-slate-300 rounded-lg text-violet h-14 text-xl mt-10 w-[100%] " > view more</button>
          </div>
        </div>
      </div>
      <Graph title={"Income"} data={Graphdata} ></Graph>
      
    </div>
  );
}

export default Dashboard;
