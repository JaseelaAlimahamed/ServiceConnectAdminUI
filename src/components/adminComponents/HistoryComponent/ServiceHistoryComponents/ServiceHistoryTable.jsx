import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5); // Number of jobs to display per page
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const tableDataConfig = [
    {
      JOB_ID: "1",
      Date: "July 14 2024,12:45 PM",
      Franchisee: "1",
      Agent: "abc",
      Service_Provider_ID: "1",
      Customer_ID: "1",
      Customer_Type: "aska",
      Job_Type: "jkhdkj",
      Status: "complete",
      Action: "...",
    },
    {
      JOB_ID: "2",
      Date: "Aug 14 2024,10:30 AM",
      Franchisee: "2",
      Agent: "def",
      Service_Provider_ID: "2",
      Customer_ID: "2",
      Customer_Type: "xyz",
      Job_Type: "cleaning",
      Status: "pending",
      Action: "...",
    },
  ];

  const tableColConfig = [
    "JOB ID",
    "Date",
    "Franchisee",
    "Agent",
    "Service Provider ID",
    "Customer ID",
    "Customer Type",
    "Job Type",
    "Status",
    "Action",
  ];

  // Sort data by date
  const sortedJobs = [...tableDataConfig].sort((a, b) =>
    sortNewest
      ? new Date(b.Date) - new Date(a.Date)
      : new Date(a.Date) - new Date(b.Date)
  );

  // Filter data by search term
  const filteredJobs = sortedJobs.filter((job) =>
    Object.values(job).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const toggleSortOrder = () => setSortNewest(!sortNewest);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col font-poppins text-secondary">
      {/* Search and Sort */}
      <div className="flex flex-wrap justify-between">
        <span className="relative rounded-full overflow-hidden h-12 mb-2">
          <img
            className="absolute left-6 top-1/2 transform -translate-y-1/2"
            src="/search-icon.svg"
            alt="search"
          />
          <input
            className="outline-none px-16 py-4 pl-[70px] h-full"
            type="text"
            placeholder="Search Here..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </span>

        <button
          className="flex items-center justify-center rounded-full px-14 h-12 border-2 border-solid border-violet gap-2"
          onClick={toggleSortOrder}
        >
          <div className="relative">
            <span className="text-violet text-sm font-medium">
              {sortNewest ? "Newest" : "Oldest"}
            </span>
          </div>
          <img src="/dropdown-icon.svg" alt="dropdown" />
        </button>
      </div>

      {/* Table */}
      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto h-full w-full">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              {tableColConfig.map((col, index) => (
                <th
                  key={index}
                  className="py-5 px-4 text-dark_blue font-bold text-sm"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentJobs.map((job, index) => (
              <tr key={index} className="border-t border-gray">
                {tableColConfig.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-4 text-center ${
                      col === "JOB ID"
                        ? "font-bold text-gray-700" 
                        : "font-normal text-light_gray" 
                    }`}
                  >
                    {col === "Status" ? (
                      <span
                        className={`px-4 py-2 rounded-full text-white text-sm ${
                          job["Status"] === "pending"
                            ? "bg-red" 
                            : job["Status"] === "complete"
                            ? "bg-green-500" 
                            : "bg-gray-300"
                        }`}
                      >
                        {job["Status"]}
                      </span>
                    ) : (
                      job[col.replace(/\s+/g, "_")] || "-" // Render other fields or fallback to "-"
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between px-6 py-4">
          <span className="text-sm">
            Showing {indexOfFirstJob + 1}-
            {Math.min(indexOfLastJob, filteredJobs.length)} of{" "}
            {filteredJobs.length} entries
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
              }`}
            >
              <img src="/prevsolid-icon.svg" alt="previous" />
            </button>
            {pageNumbers.map((number) => (
              <span
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${
                  number === currentPage
                    ? "bg-violet text-primary"
                    : "text-violet"
                }`}
              >
                {number}
              </span>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
              }
              disabled={currentPage === pageNumbers.length}
              className={`${
                currentPage === pageNumbers.length
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

export default ServiceTable;
