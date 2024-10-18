import { useState } from "react";
import { IoMdTrendingUp } from "react-icons/io";

function ExpenseTable() {
  const expenseData = [
    {
      id: "#123456789",
      date: "2 March 2021",
      type: "SMS charges",
      amount: "$50,036",
    },
    {
      id: "#123456789",
      date: "2 March 2021",
      type: "Salary",
      amount: "$50,036",
    },
    {
      id: "#123456789",
      date: "2 March 2021",
      type: "Rent",
      amount: "$50,036",
    },
    {
      id: "#123456789",
      date: "2 March 2021",
      type: "Salary",
      amount: "$50,036",
    },
    {
      id: "#123456789",
      date: "2 March 2021",
      type: "Salary",
      amount: "$50,036",
    },
    // Add more data if necessary
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust this to show more items per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(expenseData.length / itemsPerPage);

  // Logic for displaying the correct items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExpenses = expenseData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-row gap-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
      {/* Right side - Expense table */}
      <div className="w-full">
        <h2 className="text-lg font-bold mb-4">Expense</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul >
            {currentExpenses.map((expense, index) => (
              <li
                key={index}
                className="py-4 flex items-center justify-between"
              >
                
                <div className="flex flex-row gap-3">
                <div className="bg-red p-3 rounded-full">
                        <IoMdTrendingUp className="text-white" />
                    </div>
                <div>
                    
                  <p className="text-sm font-medium">{expense.id}</p>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">{expense.type}</p>
                </div>
                <div className="text-sm font-medium">
                  {expense.amount}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination: Only show if there's more than 1 page */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex + 1}
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`mx-1 px-3 py-1 rounded-full ${
                  currentPage === pageIndex + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {pageIndex + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseTable;
