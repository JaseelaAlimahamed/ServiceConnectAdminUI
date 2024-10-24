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
    }
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
    <div className="flex flex-col p-4 gap-6 w-full max-w-md bg-primary rounded-2xl">
      <h2 className="text-lg font-bold">Expense</h2>

      <table className=" min-w-full border-collapse">
        <tbody className="">
          {currentExpenses.map((expense, index) => (
            <tr key={index}>
              <td className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 bg-red rounded-full">
                  <IoMdTrendingUp className="size-8 text-primary" />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-base font-bold">{expense.id}</p>
                  <p className="text-sm text-id_gray ">{expense.date}</p>
                </div>
              </td>
              <td className="p-4 text-xs font-bold">
                {expense.type}
              </td> 
              <td className="p-4 text-base font-bold">{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-row justify-between items-center">
        <div>
          <span className="text-id_gray">showing</span> <span className="font-bold">{currentPage}</span> <span className="text-id_gray">out of{" "}</span>
          <span className="font-bold">{totalPages}</span>
        </div>
        {/* Dynamic Pagination: Only show if there's more than 1 page */}
        {totalPages > 1 && (
          <div className="flex flex-row justify-around">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex + 1}
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`mx-1 px-3 py-1 rounded-full border ${
                  currentPage === pageIndex + 1
                    ? "bg-dark_blue text-primary border-transparent"
                    : " text-id_gray border-id_gray" 
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
