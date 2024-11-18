import React, { useEffect, useState } from "react";
import UserManagementCard from "../../adminComponents/userManagement/UserManagementCard";
import ReUsableTable from "../../reUsableComponents/ReUsableTable";
import {
  listUser,
  totalCustomer,
  totalServiceRequest,
  onlineCustomers,
  leadServiceRequestCount,
  activeServiceRequestCount,
  complaintsTotal,
} from "../../../service/api/admin/GetApi";

const UserManagement = () => {
  const tableConfig = { type: "usermanagement", title: "" };
  const [cardConfig, setCardConfig] = useState([]);
  const [tableDataConfig, setTableDataConfig] = useState([]);
  
  const initialCardConfig = [
    { title: "Total Users", iconBg: "bg-[#6F4FF2]" },
    { title: "Online", iconBg: "bg-[#50BB25]" },
    { title: "Service Requests", iconBg: "bg-[#F9D62C]" },
    { title: "Lead Requests", iconBg: "bg-[#28B5E1]" },
    { title: "Active Services", iconBg: "bg-[#167F71]" },
    { title: "Complaints", iconBg: "bg-[#DC3546]" },
  ];

  // six card counts data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          totalCustomerCount,
          totalServiceRequestCount,
          onlineCustomerCount,
          leadServiceRequestCountValue,
          activeServiceRequestCountValue,
          complaintsTotalCount,
        ] = await Promise.all([
          totalCustomer(),
          totalServiceRequest(),
          onlineCustomers(),
          leadServiceRequestCount(),
          activeServiceRequestCount(),
          complaintsTotal(),
        ]);

        const counts = [
          totalCustomerCount,
          onlineCustomerCount,
          totalServiceRequestCount,
          leadServiceRequestCountValue,
          activeServiceRequestCountValue,
          complaintsTotalCount,
        ];

        // Merge counts with initial card config
        const updatedCardConfig = initialCardConfig.map((card, index) => ({
          ...card,
          count: counts[index] || 0, // Use 0 as a fallback if count is undefined
        }));

        setCardConfig(updatedCardConfig);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        // Optionally, handle errors with a fallback configuration
      }
    };

    fetchData();
  }, []);
  console.log(cardConfig, "cardConfig");


  // user table data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await listUser();
        setTableDataConfig(Array.isArray(users) ? users : []);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setTableDataConfig([]); // Set to an empty array in case of error
      }
    };

    fetchData();
  }, []);
  // console.log(tableDataConfig, "tableDataConfig");

  const tableColConfig = [
    "Name",
    "ID",
    "Date",
    "Total Completed Services",
    "Location",
    "Contact",
    "Status",
    "Action",
  ];

  return (
    <div className="w-full font-poppins px-6 pb-10 pt-10 h-full ">
      <div className="flex flex-wrap gap-2 pb-10">
        {cardConfig.map((item, index) => (
          <UserManagementCard key={index} item={item} />
        ))}
      </div>

      <ReUsableTable
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
        path={"/user-management"}
      />
    </div>
  );
};

export default UserManagement;
