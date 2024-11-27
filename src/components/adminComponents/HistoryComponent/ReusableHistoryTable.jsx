import React, { useState } from "react";

const HistoryTable = ({
  data,
  columns,
  rowsPerPage = 5,
  onSearch,
  sortConfig = { key: "Date", descending: true },
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState(sortConfig.key);
  const [isDescending, setIsDescending] = useState(sortConfig.descending);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
    if (onSearch) onSearch(e.target.value);
  };

  const toggleSortOrder = () => setIsDescending(!isDescending);

  const sortedData = [...data].sort((a, b) => {
    if (sortKey) {
      const aValue = new Date(a[sortKey]) || a[sortKey];
      const bValue = new Date(b[sortKey]) || b[sortKey];
      if (isDescending) return aValue > bValue ? -1 : 1;
      return aValue < bValue ? -1 : 1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((row) =>
    Object.values(row).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col font-poppins text-secondary px-5">
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
          <span className="text-violet text-sm font-medium">
            {isDescending ? "Newest" : "Oldest"}
          </span>
          <img src="/dropdown-icon.svg" alt="dropdown" />
        </button>
      </div>

      {/* Table */}
      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto h-full w-full">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr>
              {columns.map((col, index) => (
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
            {currentRows.map((row, index) => (
              <tr key={index} className="border-t border-gray">
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-4 text-center ${
                      col === "JOB_ID" || col === "TransactionId"
                        ? "font-bold text-gray-700"
                        : "font-normal text-light_gray"
                    }`}
                  >
                    {col === "Status" ? (
                      <span
                        className={`px-4 py-2 rounded-full text-white text-sm ${
                          row["Status"] === "Pending"
                            ? "bg-red"
                            : row["Status"] === "Completed"
                            ? "bg-green-500"
                            : row["Status"] === "Failed"
                            ? "bg-gray"
                            : ""
                        }`}
                      >
                        {row["Status"]}
                      </span>
                    ) : (
                      row[col.replace(/\s+/g, "_")] || "-" // Render other fields or fallback to "-"
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
            Showing {indexOfFirstRow + 1}-
            {Math.min(indexOfLastRow, filteredData.length)} of{" "}
            {filteredData.length} entries
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

export default HistoryTable;
