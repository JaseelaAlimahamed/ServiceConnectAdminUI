import React from "react";
import TransactionCard from "../../components/adminComponents/HistoryComponent/ReusableHistoryCard";
import TranasactionTable from "../../components/adminComponents/HistoryComponent/ReusableHistoryTable";
import cardIcon1 from "../../assets/AdminAssets/cardIcon1.png";
import cardIcon2 from "../../assets/AdminAssets/cardIcon2.png";

function TransactionHistory() {
  const transactionCardData = [
    {
      title: "Total Expense",
      icon: (
        <img
          src={cardIcon1}
          alt="Franchisee Icon"
          className="w-[3rem] aspect-square"
        />
      ),
      count: 120,
      change: 10,
      isPositive: true,
    },
    {
      title: "Total Income",
      icon: (
        <img
          src={cardIcon2}
          alt="Active Franchisee Icon"
          className="w-[3rem] aspect-square"
        />
      ),
      count: 85,
      change: -0.5,
      isPositive: false,
    },
    {
      title: "Total Expenditure",
      icon: (
        <img
          src={cardIcon2}
          alt="Inactive Franchisee Icon"
          className="w-[3rem] aspect-square"
        />
      ),
      count: 35,
      change: -3,
      isPositive: false,
    },
  ];

  const tableDataConfig = [
    {
      TransactionId: "1",
      Date: "July 14 2024, 12:45 PM", // Ensure this key is lowercase in data
      Description: "Description",
      Amount: "32,890",
      Status: "Completed",
    },
    {
      TransactionId: "2",
      Date: "July 14 2024, 12:45 PM", // Ensure this key is lowercase in data
      Description: "Description",
      Amount: "32,890",
      Status: "Pending",
    },
    // Add more rows if needed...
  ];

  const tableColConfig = [
    "TransactionId",
    "Date",
    "Description",
    "Amount",
    "Status",
  ];

  return (
    <div className="w-full overflow-x-auto">
      <TransactionCard data={transactionCardData} />
      <TranasactionTable columns={tableColConfig} data={tableDataConfig} />
    </div>
  );
}

export default TransactionHistory;
