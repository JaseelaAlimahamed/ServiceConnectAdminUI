import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

function TranasactionTable({ tableColConfig = [], tableDataConfig = [] }) {
  return (
    <div>
      <div className="bg-white w-[100%] min-w-full overflow-x-auto py-10 pl-10 max-[760px]:hidden">
        <h1 className="text-blue-950 font-bold text-xl">Transaction history</h1>
        <table className="mt-5 min-w-full">
          <thead>
            <tr>
              {tableColConfig.map((each, index) => (
                <th key={index} className="text-start">{each}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableDataConfig.map((each, index) => (
              <tr key={index}>
                <td className="flex items-center gap-5 mb-5 mx-5">
                  <div className="bg-lite_red size-14 rounded-full flex justify-center items-center">
                    <IoIosTrendingUp className="text-white text-2xl"></IoIosTrendingUp>
                  </div>
                  <h4 className="text-blue-900 text-xl font-semibold">
                    {each.transactionId}
                  </h4>
                </td>
                <td className="text-light_gray mb-5 pr-10">{each.date}</td>
                <td className="text-light_gray mb-5 mx-2 pr-10">{each.description}</td>
                <td className="text-blue-900 font-bold mb-5 mx-2 pr-10">{each.amount}</td>
                <td
                  className={`${
                    each.status === "Completed"
                      ? "text-green-600"
                      : each.status === "Pending"
                      ? "text-light_gray"
                      : "text-lite_red"
                  } font-semibold text-xl mb-5 mx-2 pr-10`}
                >
                  {each.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center my-10 md:hidden">
        <h1 className="text-blue-900 font-bold text-xl">Transaction History</h1>
        {tableDataConfig.map((each, index) => (
          <div key={index} className="bg-white w-[90%] mt-10 rounded-3xl flex flex-col items-center py-2">
            <div className="flex items-center gap-5">
              <div className="bg-lite_red size-10 rounded-full flex items-center justify-center text-white">
                <IoIosTrendingUp></IoIosTrendingUp>
              </div>
              <h2 className="text-blue-900 text-xl font-semibold">
                Transactionid: {each.transactionId}
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <p className="mt-5 text-xl">Date: {each.date}</p>
              <p className="text-xl mt-1">Description: {each.description}</p>
              <p className="text-xl mt-1">Amount: ${each.amount}</p>
              <div
                className={`${
                  each.status === "Completed"
                    ? "bg-green-500"
                    : each.status === "Pending"
                    ? "bg-light_gray"
                    : "bg-lite_red"
                } w-24 rounded-2xl py-2 px-2 mt-3 text-white text-center`}
              >
                {each.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TranasactionTable;
