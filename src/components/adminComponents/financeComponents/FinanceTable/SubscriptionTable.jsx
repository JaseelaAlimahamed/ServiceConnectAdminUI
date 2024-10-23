import { useState } from "react";
import { LiaUserTieSolid } from "react-icons/lia";

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
    <div className="flex flex-col p-4 gap-4 w-full bg-primary rounded-2xl">
      <h2 className="text-lg font-bold">
        Subscription laps Service/Franchisee
      </h2>
      
        <table className="min-w-full border-collapse">
          <tbody>
            {currentSubscriptions.map((person, index) => (
              <tr key={index}>
                <td className=" flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 bg-id_gray rounded-full">
                    <LiaUserTieSolid className="size-8 text-primary" />
                  </div>
                  <h4 className="text-sm font-medium">{person.name}</h4>
                  
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  ID {person.id}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">
                  {person.role}
                </td>
                <td className="py-4 px-4">
                  <button className="text-xl text-blue-500">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      <div className="flex flex-row justify-between items-center">
        <div>
          showing <span className="font-bold">{currentPage}</span> out of{" "}
          <span className="font-bold">{totalPages}</span>
        </div>
        {/* Dynamic Pagination: Only show if there's more than 1 page */}
        {totalPages > 1 && (
          <div className="flex flex-row justify-around">
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
