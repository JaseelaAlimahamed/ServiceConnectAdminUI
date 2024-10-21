import React, { useState } from "react";
import { AiOutlineRise, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import from react-icons

const PaymentHistory = () => {
  const payments = [
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "text-green-500", // Tailwind class for green
    },
    {
      id: "#987654321",
      date: "3 March 2021, 14:00 PM",
      amount: "$24,500",
      status: "Pending",
      statusColor: "#A098AE", // Custom gray color
    },
    {
      id: "#456789123",
      date: "4 March 2021, 12:30 PM",
      amount: "$7,890",
      status: "Canceled",
      statusColor: "#FF4550", // Custom red color
    },
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "text-green-500", // Tailwind class for green
    },
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "text-green-500", // Tailwind class for green
    },
    {
      id: "#987654321",
      date: "3 March 2021, 14:00 PM",
      amount: "$24,500",
      status: "Pending",
      statusColor: "#A098AE", // Custom gray color
    },
    {
      id: "#456789123",
      date: "4 March 2021, 12:30 PM",
      amount: "$7,890",
      status: "Canceled",
      statusColor: "#FF4550", // Custom red color
    },
    {
      id: "#987654321",
      date: "3 March 2021, 14:00 PM",
      amount: "$24,500",
      status: "Pending",
      statusColor: "#A098AE", // Custom gray color
    },
    {
      id: "#456789123",
      date: "4 March 2021, 12:30 PM",
      amount: "$7,890",
      status: "Canceled",
      statusColor: "#FF4550",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const paymentsPerPage = 4;
  const totalPages = Math.ceil(payments.length / paymentsPerPage);

  const startIndex = (currentPage - 1) * paymentsPerPage;
  const currentPayments = payments.slice(
    startIndex,
    startIndex + paymentsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#303972] mb-4 sm:mb-0">
            Payment History
          </h1>
        </div>

        {/* Payment List */}
        {currentPayments.map((payment, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between py-4 space-y-2 md:space-y-0"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-[#FF4550] rounded-full flex items-center justify-center">
                <AiOutlineRise className="text-white" size={24} />{" "}
                {/* Using react-icons */}
              </div>
              <span className="font-bold text-[#303972]">{payment.id}</span>
            </div>
            <div className="text-gray-500">{payment.date}</div>
            <div className="font-bold text-[#303972]">{payment.amount}</div>

            {/* Conditionally apply status color */}
            <div
              className={`font-bold ${
                payment.statusColor.startsWith("text-")
                  ? payment.statusColor
                  : ""
              }`}
              style={
                payment.statusColor.startsWith("#")
                  ? { color: payment.statusColor }
                  : {}
              }
            >
              {payment.status}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}-{startIndex + currentPayments.length} of{" "}
          {payments.length} payments
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPreviousPage}
            className="p-2 bg-gray-200 rounded-full"
            disabled={currentPage === 1}
          >
            <AiOutlineLeft size={20} /> {/* Using react-icons */}
          </button>
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber + 1}
              onClick={() => setCurrentPage(pageNumber + 1)}
              className={`w-8 h-8 ${
                currentPage === pageNumber + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              } rounded-full flex items-center justify-center`}
            >
              {pageNumber + 1}
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className="p-2 bg-gray-200 rounded-full"
            disabled={currentPage === totalPages}
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
