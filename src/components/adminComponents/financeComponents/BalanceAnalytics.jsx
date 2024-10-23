

import { useState } from "react";
import BalanceChart from "./BalanceChart/BalanceChart";

const BalanceAnalytics = () => {
  const [timeFilter, setTimeFilter] = useState("Month");

  const handleTimeFilterChange = (event) => {
    setTimeFilter(event.target.value);
  };

  return (
    <div className="font-poppins w-full">
      <div className="flex flex-col p-4 bg-white rounded-2xl ">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-semibold text-dark_blue">
            Balance Analytics
          </h2>

          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-4 ">
              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow"></span>
                  <span className="text-xs text-light_gray">Expense</span>
                </div>
                <span className="text-sm text-dark_blue font-bold">1.245</span>
              </div>

              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-red"></span>
                  <span className="text-xs text-light_gray">Income</span>
                </div>
                <span className="text-sm text-dark_blue font-bold">1.356</span>
              </div>
            </div>

            <div className="flex flex-row items-center border border-stand py-0.5 px-2 pr-2 rounded leading-none focus:outline-none focus:bg-primary focus:border-lite_blue">
              <select
                value={timeFilter}
                onChange={handleTimeFilterChange}
                className="block appearance-none w-full bg-white text-sm text-dark_blue leading-none focus:outline-none"
              >
                <option>Month</option>
                <option>Year</option>
              </select>

              <div className="pointer-events-none text-dark_blue ml-2">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <BalanceChart />
        </div>
      </div>
    </div>
  );
};

export default BalanceAnalytics;
