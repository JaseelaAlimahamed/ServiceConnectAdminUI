import React from "react";
import NewTable from "./NewTable";

const ExpenseList = () => {
  const tableConfig = { type: "expenses", title: "" };

  const tableDataConfig = [
    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",

      dr: "dfdfs",
      cr: "Active",
      invoice: "de",
    },

    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",

      dr: "dfwe",
      cr: "Active",
      invoice: "de",
    },
    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",

      dr: "dvfd",
      cr: "Active",
      invoice: "de",
    },
    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",

      dr: "dfdf",
      cr: "Active",
      invoice: "de",
    },
    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",

      dr: "ddss",
      cr: "Active",
      invoice: "de",
    },
    {
      slno: "1",
      date: "May 25, 2024",
      invoiceNo: "10",
      desc: "Sydney",
      dr: "fghfhg",
      cr: "Active",
      invoice: "de",
    },
  ];

  const tableColConfig = [
    "Sl No",
    "Date",
    "Invoice No",
    "Description/Remarks",
    "DR",
    "CR",
    "Invoice",
  ];

  return (
    <div className="flex flex-col font-poppins text-black ">
      <NewTable
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        tableConfig={tableConfig}
      />
    </div>
  );
};

export default ExpenseList;
