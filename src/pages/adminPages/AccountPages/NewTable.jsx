import React, { useState } from "react";
import { LuTrendingUp } from "react-icons/lu";

const NewTable = ({ tableDataConfig, tableColConfig, tableConfig }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);

  const ExpenseManagement = tableConfig.type === "expenses";

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = tableDataConfig.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const totalUsers = tableDataConfig.length;

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleView = () => {
    console.log("view true");
  };
  const handleEdit = () => {
    console.log("edit true");
  };
  const handleDelete = () => {
    console.log("delete true");
  };

  const toggleAction = (id) => {
    setOpenActionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col font-poppins text-black w-3/4 ">
      {ExpenseManagement && (
        <div className="flex flex-wrap justify-between "></div>
      )}

      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full  ">
        <table className="w-full text-center border-collapse ">
          {tableConfig.title && (
            <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-dark_blue  ">
              {tableConfig.title}
            </caption>
          )}
          <thead>
            <tr>
              {ExpenseManagement && (
                <th>
                  <span className="px-4 py-10 ">
                    <input type="checkbox" />
                  </span>
                </th>
              )}
              {tableColConfig?.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-5 font-poppins text-black border-b "
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index}>
                {/* Checkbox  */}
                {ExpenseManagement && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </td>
                )}

                {/* Name Column */}
                {data.name && (
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4 mr-6 lg:mr-0 ">
                      <span className="text-lg text-dark_blue font-bold ">
                        {data.name}
                      </span>
                    </div>
                  </td>
                )}

                {/* Sl no  Column */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black ">
                    <span>{data.slno}</span>
                  </td>
                )}

                {/* Date and Time Column */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black">
                    <div className="mr-2">
                      <span className="whitespace-nowrap">{data.date}</span>{" "}
                      {data.time}
                    </div>
                  </td>
                )}

                {/*Invoice */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black">
                    {data.invoiceNo}
                  </td>
                )}

                {/*desc Column */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black">
                    {data.desc}
                  </td>
                )}
                {/* dr Column */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black">
                    {data.dr}
                  </td>
                )}
                {/* cr Column */}
                {ExpenseManagement && (
                  <td className="p-6 flex-col font-poppins text-black">
                    {data.cr}
                  </td>
                )}

                {/* Additional Actions Column */}
                {ExpenseManagement && (
                  <td className="p-6">
                    <div className="relative">
                      <span onClick={() => toggleAction(data.id)}>
                        <img
                          className="min-w-6 m-auto cursor-pointer"
                          src="/invoice-icon.svg"
                          alt="action"
                        />
                      </span>
                      <ul
                        className={`absolute z-10 top-6 right-6 shadow-md rounded-lg overflow-hidden ${
                          openActionId === data.id ? "block" : "hidden"
                        }`}
                      >
                        <li
                          className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b"
                          onClick={handleView}
                        >
                          view
                        </li>
                        <li
                          className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b"
                          onClick={handleEdit}
                        >
                          edit
                        </li>
                        <li
                          className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2"
                          onClick={handleDelete}
                        >
                          delete
                        </li>
                      </ul>
                    </div>
                  </td>
                )}
                {/* Edit Icon Column */}
                {ExpenseManagement && (
                  <td className="p-6">
                    <img
                      className="min-w-6 m-auto cursor-pointer"
                      src="/edit-icon.svg"
                      alt="Edit"
                      onClick={handleEdit} // Add edit action
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            showing <span className="text-violet">1-5</span> from{" "}
            <span className="text-violet">{totalUsers}</span> data
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`${
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
              disabled={currentPage >= pageNumbers.length}
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

export default NewTable;
