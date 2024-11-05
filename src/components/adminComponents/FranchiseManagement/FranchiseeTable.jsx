import React, { useEffect, useState } from "react";
import { FiMail, FiPhone, FiMoreHorizontal } from "react-icons/fi"; // Importing icons from react-icons
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const FranchiseeTable = () => {
  const [franchises, setFranchises] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [statusFilter, setStatusFilter] = useState(""); // State for status filter
  const [sortOrder, setSortOrder] = useState(""); // State for sort order
  const [dropdownOpen, setDropdownOpen] = useState(null); // State for dropdown menu
  const navigate = useNavigate();

  //pagination logic

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5; // Number of items per page

// Logic for displaying current franchises
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentFranchises = franchises.slice(indexOfFirstItem, indexOfLastItem);
// Function to handle page change
const paginate = (pageNumber) => setCurrentPage(pageNumber);
const totalPages = Math.ceil(franchises.length / itemsPerPage);
  // Function to go to the previous page
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Function to go to the next page
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const fetchFranchiseDetails = async () => {
    return [
      {
        name: "Samanta William",
        id: "#123456789",
        revenue: "10,00,500",
        branches: 2,
        providers: 2,
        location: "Jakarta",
        validUntil: "March 25, 2023",
        status: "Inactive",
        email: "samanta@example.com",
        phone: "+62 123 456 789",
        action: "..."
      },
      
      {
        name: "John Doe",
        id: "#987654321",
        revenue: "15,75,300",
        branches: 3,
        providers: 4,
        location: "Bangkok",
        validUntil: "April 15, 2023",
        status: "Active",
        email: "johndoe@example.com",
        phone: "+66 987 654 321",
        action: "..."
      },
    ];
  };

  useEffect(() => {
    const getFranchises = async () => {
      const fetchedFranchises = await fetchFranchiseDetails();
      setFranchises(fetchedFranchises);
    };

    getFranchises();
  }, []);

  // Sorting franchises based on validUntil
  const sortFranchises = (franchises) => {
    return franchises.sort((a, b) => {
      const dateA = new Date(a.validUntil);
      const dateB = new Date(b.validUntil);
      if (sortOrder === "newest") {
        return dateB - dateA;
      } else if (sortOrder === "oldest") {
        return dateA - dateB;
      }
      return 0;
    });
  };

  // Filter franchises based on search term and status
  const filteredFranchises = sortFranchises(
    franchises.filter((franchise) => {
      const matchesSearch = franchise.name && franchise.name
        .toLowerCase()
        .includes(searchTerm &&searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "" || franchise.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
  );

  // Handle dropdown toggle for each action
  const toggleDropdown = (index) => {
    if (dropdownOpen === index) {
      setDropdownOpen(null); // Close the dropdown if clicked again
    } else {
      setDropdownOpen(index); // Open the specific dropdown
    }
  };

  const handleAddNew = () => {
    navigate("");
  };

  const handleNewFranchise = () => {
    navigate("/admin/New-Franchisee");
  };

  const handleEdit=()=>{
    navigate("")
  }

  const handleDelete=()=>{
    navigate("")
  }

  const handleView=()=>{
    navigate("/admin/franchise/franchise-details/1")
  }

  return (

    <div className="p-5 min-h-screen bg-primary">
      {/* Search, Filter and Sort Inputs */}
      <div className="flex flex-col md:flex-row md:flex-wrap space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-40 px-4 py-2 border border-violet rounded-full shadow-sm focus:ring-2 focus:ring-violet pl-10"
          />
          <FiSearch className="absolute left-3 text-violet" />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-violet text-violet text-sm rounded-full px-4 py-2 focus:ring-2 focus:ring-violet w-full md:w-auto"
        >
          <option value="">Franchisee Type</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-violet text-violet text-sm rounded-full px-4 py-2 focus:ring-2 focus:ring-violet w-full md:w-auto"
        >
          <option value="">Newest</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        <Link
          className="bg-violet text-primary text-sm px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
          to={'/admin/franchise/edit-add-franchiseType'}
        >
          Add/Edit Franchisee Type
        </Link>

        <button
          className="bg-violet text-primary text-sm px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
          onClick={handleNewFranchise}
        >
          + New Franchisee
        </button>
      </div>

    {/* Table for larger screens */}
      {/* <div className="overflow-auto rounded-lg shadow hidden md:block"> */}
      <div className="releative bg-primary mt-4 rounded-xl overflow-x-auto lg:pb-20 h-full w-full">
        <table className="w-full text-center border-collapse hidden lg:table">
          <thead className="bg-primary border-b-2 border-violet">
            <tr>
              <th className="py-3 px-6">
                <input
                  type="checkbox"
                  className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
                />
              </th>
              <th className="w-40 p-3 text-sm text-violet  font-semibold tracking-wide text-left">
                Franchisee Name
              </th>
              <th className="p-3 text-sm text-violet font-semibold tracking-wide text-left">ID</th>
              <th className="w-24 p-3 text-sm text-violet font-semibold tracking-wide text-left">Revenue</th>
              <th className="w-24 p-3 text-sm text-violet font-semibold tracking-wide text-left">Branches</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">
                Service Providers
              </th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Location</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Valid Until</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Status</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Contact</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary">
            {filteredFranchises.map((franchise, index) => (
              <tr onClick={ handleView} key={franchise.id} className={index % 2 === 0 ? "bg-white  cursor-pointer" : "bg-gray-50 cursor-pointer"}>
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
                  />
                </td>
                <td className="p-3 text-sm text-violet text-violet whitespace-nowrap">{franchise.name}</td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <a href="#" className="font-bold text-violet hover:underline">
                    {franchise.id}
                  </a>
                </td>
                <td className="p-3 text-sm text-violet  whitespace-nowrap">
                  {franchise.revenue}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {franchise.branches}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {franchise.providers}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {franchise.location}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {franchise.validUntil}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <span
                    className={`p-1.5 text-xs font-medium uppercase tracking-wider ${franchise.status === "Active"
                        ? "text-primary bg-fluracent_green"
                        : "text-primary bg-orange"
                      } rounded-full `}
                  >
                    {franchise.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${franchise.email}`}
                      className="text-violet hover:underline"
                    >
                      <FiMail size={20} />
                    </a>
                    <a
                      href={`tel:${franchise.phone}`}
                      className="text-violet hover:underline"
                    >
                      <FiPhone size={20} />
                    </a>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-blue-500 hover:underline"
                  >
                    <FiMoreHorizontal size={20} className="text-violet" />
                  </button>
                  
                  {dropdownOpen === index && (
                    <div className="absolute bg-white border shadow-lg right-0 mt-2 rounded-lg z-10">
                      <ul>
                        <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={handleEdit}>Edit</li>
                        <li className="p-2 hover:bg-text-violet cursor-pointer"onClick={handleDelete}>Delete</li>
                        <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={handleView}>View</li>
                      </ul>
                   
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         </div>

          {/* Pagination Controls */}
       <div className="flex justify-between items-center mt-4">
      <p className="text-sm text-violet">
        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, franchises.length)} of {franchises.length} data
      </p>
      <div className="flex space-x-1 items-center">
        {/* Left Arrow (Previous Page Button) */}
        <button
          onClick={handlePrevious}
          className="px-4 py-2 border rounded-lg bg-white text-violet hover:bg-violet hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
        >
          <FaArrowLeft />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => paginate(pageIndex + 1)}
            className={`px-4 py-2 border rounded-full ${
              currentPage === pageIndex + 1 ? 'bg-violet text-white' : 'bg-white text-violet'
            } hover:bg-violet hover:text-white`}
          >
            {pageIndex + 1}
          </button>
        ))}

        {/* Right Arrow (Next Page Button) */}
        <button
          onClick={handleNext}
          className="px-4 py-2 border rounded-full bg-white text-violet hover:bg-violet hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>


      {/* Cards for smaller screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {filteredFranchises.map((franchise) => (
          <div
            key={franchise.id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-violet font-bold hover:underline">
                  {franchise.name}
                </a>
              </div>
              <div className="text-violet">{franchise.validUntil}</div>
              <div>
                <span
                  className={`p-1.5 text-xs font-medium uppercase tracking-wider ${franchise.status === "Active"
                      ? "text-green-800 bg-green-200"
                      : "text-gray-800 bg-gray-200"
                    } rounded-lg bg-opacity-50`}
                >
                  {franchise.status}
                </span>
              </div>
            </div>
            <div className="text-sm text-violet">Location: {franchise.location}</div>
            <div className="text-sm text-violet">Revenue: {franchise.revenue}</div>
            <div className="text-sm font-medium text-violet">Branches: {franchise.branches}</div>
            <div className="text-sm font-medium text-violet">Providers: {franchise.providers}</div>

            <div className="flex space-x-4">
              <a href={`mailto:${franchise.email}`} className="text-violet hover:underline">
                <FiMail size={20} />
              </a>
              <a href={`tel:${franchise.phone}`} className="text-violet hover:underline">
                <FiPhone size={20} />
              </a>
              {/* Action button for mobile */}
              <button
                onClick={() => toggleDropdown(franchise.id)}
                className="text-violet hover:underline"
              >
                <FiMoreHorizontal size={20} />
              </button>
              {dropdownOpen === franchise.id && (
                <div className="absolute bg-primary border shadow-lg right-0 mt-2 rounded-lg z-10">
                  <ul>
                    <li className="p-2 hover:bg-violet cursor-pointer">Edit</li>
                    <li className="p-2 hover:bg-violet cursor-pointer">Delete</li>
                    <li className="p-2 hover:bg-violet cursor-pointer">View</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchiseeTable;
