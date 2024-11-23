import React from "react";
import TransactionCard from "../../components/adminComponents/HistoryComponent/transactionHistoryComponent/transactionCard";
import TranasactionTable from "../../components/adminComponents/HistoryComponent/transactionHistoryComponent/transactionTable";

function TransactionHistory() {
  const tableDataConfig = [
    {
      transactionId: "#23242353",
      date: "July 14 2024,12:45 PM",
      description: "Description",

      amount: "32,890",
      status: "Completed",
    },
    {
      transactionId: "#335353",
      date: "July 14 2024,12:45 PM",
      description: "Description",

      amount: "32,890",
      status: "Canceled",
    },
    {
      transactionId: "#335353",
      date: "Sep 13 2024,12:45 PM",
      description: "Description",

      amount: "32,890",
      status: "Pending",
    },
    {
      transactionId: "#335353",
      date: "Aug 14 2024,12:45 PM",
      description: "Description",

      amount: "890",
      status: "Pending",
    },
    {
      transactionId: "#133533",
      date: "Aug 14 2024,12:45 PM",
      description: "Description",

      amount: "1200",
      status: "Completed",
    },
    {
      transactionId: "#23253",
      date: "Aug 14 2024,12:45 PM",
      description: "Description",

      amount: "1200",
      status: "Canceled",
    },
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
      <TransactionCard />
      <TranasactionTable
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
      ></TranasactionTable>
    </div>
  );
}

export default TransactionHistory;
