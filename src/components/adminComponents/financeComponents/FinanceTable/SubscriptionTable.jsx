import { useState } from "react";

function SubscriptionTable() {
  // Sample data for subscription laps and expenses
  const subscriptionData = [
    { name: "Samantha W.", id: "123456789", role: "Franchisee" },
    { name: "Tony Soap", id: "123456789", role: "Service Provider" },
    { name: "Jordan Nico", id: "123456789", role: "Service Provider" },
    { name: "Karen Hope", id: "123456789", role: "Franchisee" },
    { name: "Nadila Adja", id: "123456789", role: "Franchisee" },
    // Add more data if necessary
  ];

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Adjust this to show more items per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(subscriptionData.length / itemsPerPage);

  // Logic for displaying the correct items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentSubscriptions = subscriptionData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-row gap-6 w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
      {/* Left side - Subscription table */}
      <div className="w-full">
        <h2 className="text-lg font-bold mb-4">
          Subscription laps Service/Franchisee
        </h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul>
            {currentSubscriptions.map((person, index) => (
              <li
                key={index}
                className="py-4 flex items-center justify-between"
              >
                <div className="flex flex-row">
                  <span className="h-10 w-10 rounded-full bg-slate-700 mr-4"></span>
                  <p className="text-sm font-medium">{person.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ID {person.id}</p>
                </div>
                <div className="text-sm text-gray-500">{person.role}</div>
                <button className="text-sm text-blue-500">...</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Dynamic Pagination: Only show if there's more than 1 page */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex + 1}
                onClick={() => handlePageChange(pageIndex + 1)}
                className={`mx-1 px-3 py-1 rounded-full ${
                  currentPage === pageIndex + 1
                    ? "bg-blue-600 text-white"
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

export default SubscriptionTable;
