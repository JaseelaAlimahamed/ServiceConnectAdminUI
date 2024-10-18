import React from 'react';
import Table from '../../components/adminComponents/incomeManagement/incomeTable';

const IncomeManagement = () => {
  
  const incomeTypeOptions = [
    "Franchisee Registration",
    "Service Registration",
    "Banner Ads",
    "Card Ads",
    "Popup Ads",
    "Boost Profile",
    "Service Commission",
    "Lead Commission",
  ];

  const splitTypeOptions = ["Percentage", "Fixed Amount", "Proportional"];

  const tableDataConfig = [
    {
      slNo: "1",
      incomeType: "Franchisee Registration",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "2",
      incomeType: "Service Registration",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "3",
      incomeType: "Banner Ads",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "4",
      incomeType: "Card Ads",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "5",
      incomeType: "Popup Ads",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "6",
      incomeType: "Boost Profile",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    {
      slNo: "7",
      incomeType: "Service Commission",
      splitType: "Percentage",
      company: "4%",
      franchisee: "4%",
      dealer: "2%",
      serviceProvider: "90%",
    },
    {
      slNo: "8",
      incomeType: "Lead Commission",
      splitType: "Percentage",
      company: "100%",
      franchisee: "0%",
      dealer: "0%",
      serviceProvider: "0%",
    },
    
  ];

  const tableColConfig = [
    "Sl.No",
    "Income Type",
    "Split Type",
    "Company",
    "Franchisee",
    "Dealer",
    "Service Provider",
  ];

  return (
    <div className="w-full font-poppins px-6 pb-10 lg:px-10">
      <Table
        tableColConfig={tableColConfig}
        tableDataConfig={tableDataConfig}
        incomeTypeOptions={incomeTypeOptions}
        splitTypeOptions={splitTypeOptions}
      />
    </div>
  );
};

export default IncomeManagement;
