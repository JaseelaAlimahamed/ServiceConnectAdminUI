import React, { useState } from 'react';
import { BiEdit } from 'react-icons/bi';

const IncomeTable = ({ tableDataConfig, tableColConfig, incomeTypeOptions, splitTypeOptions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentData = tableDataConfig.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const totalData = tableDataConfig.length;

  for (let i = 1; i <= Math.ceil(totalData / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleEdit = (id) => {
    console.log("Edit row with ID:", id);
  };

  return (
    <div className="flex flex-col font-poppins text-secondary">
      <div className="relative bg-primary mt-8 rounded-xl overflow-x-auto pb-20 h-full">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              {tableColConfig.map((col, index) => (
                <th key={index} className="p-5 text-secondary font-bold">
                  {col}
                </th>
              ))}
              <th className="p-5 text-secondary font-bold"></th>
            </tr>
            <tr>
              <td colSpan={tableColConfig.length + 1} className="border-b border-b-secondary" />
            </tr>
          </thead>
          <tbody>
            {currentData.map((data, index) => (
              <tr key={index} className="border-none">
                <td className="px-6 py-6 border-none">{data.slNo}</td>
                <td className="px-6 py-6 border-none">
                  <select
                    className="text-secondary rounded text-center focus:outline-none focus:ring-0"
                    value={data.incomeType}
                  >
                    {incomeTypeOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-6 border-none">
                  <select
                    className="text-secondary rounded text-center focus:outline-none "
                    value={data.splitType}
                  >
                    {splitTypeOptions.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-6 border-none">{data.company}</td>
                <td className="px-6 py-6 border-none">{data.franchisee}</td>
                <td className="px-6 py-6 border-none">{data.dealer}</td>
                <td className="px-6 py-6 border-none">{data.serviceProvider}</td>
                <td className="px-6 py-6 border-none">
                  <BiEdit
                    className="min-w-6 m-auto cursor-pointer text-secondary"
                    onClick={() => handleEdit(data.slNo)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            Showing <span className="text-secondary">{indexOfFirstUser + 1}-{Math.min(indexOfLastUser, totalData)}</span> from{" "}
            <span className="text-secondary">{totalData}</span> data
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`${currentPage <= 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`}
            >
              <img src="/prevsolid-icon.svg" alt="previous" />
            </button>
            <div className="flex space-x-2">
              {pageNumbers.map((number) => (
                <span
                  key={number}
                  onClick={() => paginate(number)}
                  className={`flex items-center justify-center h-10 w-10 border border-solid border-secondary font-medium rounded-full cursor-pointer ${number === currentPage ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]" : "text-secondary"}`}
                >
                  {number}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= pageNumbers.length}
              className={`${currentPage >= pageNumbers.length ? "opacity-50 cursor-default" : "cursor-pointer"}`}
            >
              <img src="/nextsolid-icon.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTable;
