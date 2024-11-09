
import React, { useState } from "react";
import ServiceCard from "../../components/franchiseComponents/service_Provider_Details/RecentServiceCard"; // Assuming ServiceCard is the component for the card design
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing react-icons for pagination arrows

const RecentServiceDetails = () => {
  // Sample data for service cards
  const serviceData = [
    { title: "Tap Repair", person: "Keshavan", status: "Booked", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Drain Blockage", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Light Change", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Fan Repair", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Pipe Fix", date: "March 21, 2021", time: "10:00 - 11:00 AM" },
    { title: "AC Repair", date: "March 22, 2021", time: "01:00 - 02:00 PM" },
    { title: "Geyser Fix", date: "March 23, 2021", time: "12:00 - 01:00 PM" },
    { title: "Leakage Repair", date: "March 24, 2021", time: "02:00 - 03:00 PM" },
    { title: "Wiring Fix", date: "March 25, 2021", time: "03:00 - 04:00 PM" },
    // More services...
    { title: "Tap Repair", person: "Keshavan", status: "Booked", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Drain Blockage", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Light Change", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Fan Repair", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Pipe Fix", date: "March 21, 2021", time: "10:00 - 11:00 AM" },
    { title: "AC Repair", date: "March 22, 2021", time: "01:00 - 02:00 PM" },
    { title: "Geyser Fix", date: "March 23, 2021", time: "12:00 - 01:00 PM" },
    { title: "Leakage Repair", date: "March 24, 2021", time: "02:00 - 03:00 PM" },
    { title: "Wiring Fix", date: "March 25, 2021", time: "03:00 - 04:00 PM" },
    // More services... { title: "Tap Repair", person: "Keshavan", status: "Booked", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Drain Blockage", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Light Change", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Fan Repair", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Pipe Fix", date: "March 21, 2021", time: "10:00 - 11:00 AM" },
    { title: "AC Repair", date: "March 22, 2021", time: "01:00 - 02:00 PM" },
    { title: "Geyser Fix", date: "March 23, 2021", time: "12:00 - 01:00 PM" },
    { title: "Leakage Repair", date: "March 24, 2021", time: "02:00 - 03:00 PM" },
    { title: "Wiring Fix", date: "March 25, 2021", time: "03:00 - 04:00 PM" },
    // More services... { title: "Tap Repair", person: "Keshavan", status: "Booked", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Drain Blockage", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Light Change", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Fan Repair", date: "March 20, 2021", time: "09:00 - 10:00 AM" },
    { title: "Pipe Fix", date: "March 21, 2021", time: "10:00 - 11:00 AM" },
    { title: "AC Repair", date: "March 22, 2021", time: "01:00 - 02:00 PM" },
    { title: "Geyser Fix", date: "March 23, 2021", time: "12:00 - 01:00 PM" },
    { title: "Leakage Repair", date: "March 24, 2021", time: "02:00 - 03:00 PM" },
    { title: "Wiring Fix", date: "March 25, 2021", time: "03:00 - 04:00 PM" },
    // More services...
  ];

  const getRandomColor = () => {
    const colors = [
      "bg-[#4D44B5]",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-indigo-900",
      "bg-green-500",
      "bg-blue-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-teal-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(serviceData.length / itemsPerPage);
  const currentServices = serviceData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-[#F3F4FF] min-h-screen flex justify-center items-start p-4">
      <div className="w-full max-w-[1200px]">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h2 className="text-xl font-bold text-indigo-900">Recent Service Details</h2>
        </div>

        {/* Service Cards in a 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentServices.map((service, index) => (
            <ServiceCard key={index} {...service} color={getRandomColor()} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-500">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, serviceData.length)} of {serviceData.length} services
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              className="p-2 bg-gray-200 rounded-full"
              disabled={currentPage === 1}
            >
              <AiOutlineLeft size={20} />
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
    </div>
  );
};

export default RecentServiceDetails;
