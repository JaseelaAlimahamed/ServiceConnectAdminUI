// src/components/BalanceAnalytics.js

import { useState } from "react";
import BalanceChart from "./BalanceChart/BalanceChart";

const BalanceAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState("Month");

  const handleTimeFilterChange = (event) => {
    setTimeFilter(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Balance Analytics
        </h2>

        <div className="flex flex-row gap-6">
        <div className="flex space-x-4 mb-6 ">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow"></span>
              <span className="text-sm text-gray-600">Expense</span>
            </div>
            <span className="text-sm text-gray-800">1.245</span>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-red"></span>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <span className="text-sm text-gray-800">1.356</span>
          </div>
        </div>

        <div className="flex flex-row items-center h-6 border border-stand py-0.5 px-2 pr-2 rounded leading-none focus:outline-none focus:bg-white focus:border-secondary">
  <select
    value={timeFilter}
    onChange={handleTimeFilterChange}
    className="block appearance-none w-full bg-white text-gray-700 leading-none"
  >
    <option>Month</option>
    <option>Year</option>
  </select>

  {/* Centering the arrow inline with the text */}
  <div className="pointer-events-none text-gray-700 ml-2">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
    </svg>
  </div>
</div>



        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
        <BalanceChart />
      </div>
    </div>
  );
};

export default BalanceAnalytics;
