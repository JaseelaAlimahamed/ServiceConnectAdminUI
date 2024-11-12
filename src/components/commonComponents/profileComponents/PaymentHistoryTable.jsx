import React, { useState} from "react";
import { LuTrendingUp } from "react-icons/lu";

const PaymentHistoryTable = ({ tableDataConfig, tableConfig }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentHistory = tableDataConfig.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const totalUsers = tableDataConfig.length;

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col font-poppins text-secondary  ">
      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto lg:pb-20 h-full">
        
        {/* table  */}
        <table className={`w-full text-center border-collapse`}>
          {tableConfig.title && (
            <caption className="py-4 px-6 text-xl font-bold text-left rtl:text-right text-dark_blue">
              {tableConfig.title}
            </caption>
          )}
          <thead></thead>

          <tbody>
            {currentHistory.map((data, index) => (
              <tr key={index}>

                {/* Payment ID Column */}
                {tableDataConfig && (
                  <td className="px-6 py-4">
                    <div className="flex">
                      <div className="bg-lite_red text-white pt-3 rounded-full w-10 h-10 flex justify-center me-2">
                        <LuTrendingUp />
                      </div>
                      <div className="flex flex-col px-5">
                        <span className="text-sm text-violet font-bold pt-2" style={{fontSize:"12px"}}>
                          {data.paymentId}
                        </span>
                      </div>
                    </div>
                  </td>
                )}

                {/* Payment Date Column  */}

                {tableDataConfig && (
                  <td className="text-sm text-id_gray">
                    <div className="mr-2">
                      <span className="whitespace-nowrap" style={{fontSize:"12px"}}>{data.date}</span>{" "}
                      {data.time}
                    </div>
                  </td>
                )}

                {/* Payment Amount Column */}
                {tableDataConfig && (
                  <td className="px-6 py-4 text-sm text-dark_blue font-bold" style={{fontSize:"12px"}}>
                    ${data.paymentAmount}
                  </td>
                )}

                {/* Payment/Service Status Column */}
                {tableDataConfig && (
                  <td
                    className={`px-6 py-4 text-sm font-bold ${
                      data.paymentStatus === "Complete"
                        ? "text-lite_green"
                        : data.paymentStatus === "Pending"
                        ? "text-gray-600"
                        : data.paymentStatus === "Cancelled"
                        ? "text-red"
                        : "text-default"
                    }`} style={{fontSize:"12px"}}
                  >
                    {data.paymentStatus}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination  */}

        <div className="lg:absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            showing <span className="text-violet">1-5</span> from{" "}
            <span className="text-violet">100</span> data
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1 ? true : false}
              className={` ${
                currentPage <= 1
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
              }`}
            >
              <img src="/prevsolid-icon.svg" alt="previous" />
            </button>
            <div className="flex space-x-2">
              {pageNumbers.map((number) => (
                <span
                  key={number}
                  onClick={() => paginate(number)}
                  className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${
                    number === currentPage
                      ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]"
                      : "text-violet"
                  }`}
                >
                  {number}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= pageNumbers.length ? true : false}
              className={`${
                currentPage >= pageNumbers.length
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
              }`}
            >
              <img src="/nextsolid-icon.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryTable;
