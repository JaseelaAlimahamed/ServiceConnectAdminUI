import React, { useState } from "react";

const NewTable = ({ tableDataConfig, tableColConfig, tableConfig }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [selectedRows, setSelectedRows] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);

  const ExpenseManagement = tableConfig.type === "expenses";

  // Pagination Calculations
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = tableDataConfig.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = Array.from(
    { length: Math.ceil(tableDataConfig.length / usersPerPage) },
    (_, i) => i + 1
  );

  // Toggle Row Actions
  const toggleAction = (id) => {
    setOpenActionId((prev) => (prev === id ? null : id));
  };

  // Row Checkbox Selection
  const handleCheckboxChange = (id) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id]
    );
  };

  // Action Handlers (placeholder)
  const handleView = () => console.log("view true");
  const handleEdit = () => console.log("edit true");
  const handleDelete = () => console.log("delete true");

  // Pagination Controls
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col font-poppins text-black sm:w-full md:w-full pb-32"> {/* Increased bottom padding here */}
      {ExpenseManagement && <div className="flex flex-wrap justify-between"></div>}

      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full">
        <table className="w-full text-center border-collapse">
          {tableConfig.title && (
            <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-dark_blue">
              {tableConfig.title}
            </caption>
          )}
          <thead>
            <tr>
              {ExpenseManagement && (
                <th>
                  <span className="px-4 py-10">
                    <input type="checkbox" />
                  </span>
                </th>
              )}
              {tableColConfig?.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-5 font-poppins text-black border-b border-slate-400"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index}>
                {ExpenseManagement && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </td>
                )}

                {data.name && (
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4 mr-6 lg:mr-0">
                      <span className="text-lg text-dark_blue font-bold">{data.name}</span>
                    </div>
                  </td>
                )}

                {ExpenseManagement && (
                  <>
                    <td className="p-6">{data.slno}</td>
                    <td className="p-6">{data.date} {data.time}</td>
                    <td className="p-6">{data.invoiceNo}</td>
                    <td className="p-6">{data.desc}</td>
                    <td className="p-6">{data.dr}</td>
                    <td className="p-6">{data.cr}</td>
                  </>
                )}

                {ExpenseManagement && (
                  <td className="px-10">
                    <div className="relative">
                      <span onClick={() => toggleAction(data.id)} className="ml-3 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          <path d="M18 14h-8" />
                          <path d="M15 18h-5" />
                          <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                      </span>
                      <ul
                        className={`absolute z-10 top-6 right-6 shadow-md rounded-lg overflow-hidden ${
                          openActionId === data.id ? "block" : "hidden"
                        }`}
                      >
                        <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b" onClick={handleView}>view</li>
                        <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b" onClick={handleEdit}>edit</li>
                        <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2" onClick={handleDelete}>delete</li>
                      </ul>
                    </div>
                  </td>
                )}

                {ExpenseManagement && (
                  <td className="px-6">
                    <span onClick={handleEdit} className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="m-auto"
                      >
                        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                        <path d="m15 5 4 4" />
                      </svg>
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            Showing <span className="text-violet">1-{usersPerPage}</span> of{" "}
            <span className="text-violet">{tableDataConfig.length}</span> entries
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => paginate(currentPage - 1)}
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
                  className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${
                    number === currentPage ? "bg-violet text-primary shadow-lg" : "text-violet"
                  }`}
                >
                  {number}
                </span>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
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

export default NewTable;
