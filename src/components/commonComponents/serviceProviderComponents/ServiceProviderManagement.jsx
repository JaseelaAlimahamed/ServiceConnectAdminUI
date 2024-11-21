import React, { useEffect, useState } from "react";
import { GetServiceProviderData } from "../../../service/api/franchise/GetApi";
import { store } from "../../../Redux/store"; // Importing Redux store
import { FiMail, FiPhone, FiMoreHorizontal, FiSearch } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ServiceProviderManagement = () => {
  const [tableDataConfig, setTableDataConfig] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [error, setError] = useState(null);
  const [isFranchise, setIsFranchise] = useState(false); // Track if user is franchise

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

  // Check if the user is a franchise
  useEffect(() => {
    const state = store.getState();
    const { role } = state.auth;

    if (role === "franchise") {
      setIsFranchise(true);
    } else {
      setIsFranchise(false);
    }
  }, []);

  // Fetch service provider data only if user is a franchise
  useEffect(() => {
    const fetchServiceProviderData = async () => {
      if (!isFranchise) return; // Avoid API call if not a franchise

      try {
        const response = await GetServiceProviderData();
        setTableDataConfig(response.data.results);
        console.log("Fetched data:", response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.response ? error.response.data : error.message);
      }
    };

    fetchServiceProviderData();
  }, [isFranchise]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTableDataConfig = tableDataConfig.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(tableDataConfig.length / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const sortTableDataConfig = (tableData) => {
    return tableData.sort((a, b) => {
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

  const filteredTableDataConfig = sortTableDataConfig(
    tableDataConfig.filter((data) => {
      const matchesSearch = data.name?.toLowerCase().includes(searchTerm.toLowerCase() || "");
      const matchesStatus = !statusFilter || data.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
  );

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleView = (id) => {
    navigate(`/service-providers/details/${id}`);
  };

  return (
    <div className="p-5 min-h-screen bg-primary">
      {/* Search, Filter and Sort Inputs */}
      <div className="flex flex-wrap justify-between">
        <span className="relative rounded-full overflow-hidden h-12 mb-2">
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

        </span>

        <div className="flex gap-4 flex-wrap">
          {/* Sort button */}
          
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-violet text-violet text-sm rounded-full px-4 py-2 focus:ring-2 focus:ring-violet w-full md:w-auto"
        >
          <option value="">Franchisee Type</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

          <Link
            to={`/service-providers/add-new`}
            className="flex items-center justify-center bg-violet rounded-full hover:opacity-90 duration-300 px-14 h-12 gap-2"
          >
            <img src="/add-icon.svg" alt="new user" />

            {/* New user button */}
            <button className="text-primary text-sm font-medium whitespace-nowrap">
              New Service Provider
            </button>
          </Link>
        </div>
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
                Name
              </th>
              <th className="p-3 text-sm text-violet font-semibold tracking-wide text-left">ID</th>
              <th className="w-24 p-3 text-sm text-violet font-semibold tracking-wide text-left">Registered Services</th>
              <th className="w-24 p-3 text-sm text-violet font-semibold tracking-wide text-left">Active Jobs</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">
                Location
              </th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Status</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Contact</th>
              <th className="w-32 p-3 text-sm text-violet font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary">
            {currentTableDataConfig.map((data, index) => (
              
              <tr onClick={() => { handleView(data.id) }} key={data.id} className={index % 2 === 0 ? "bg-white  cursor-pointer" : "bg-gray-50 cursor-pointer"}>
                
                <td className="py-3 px-6">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
                  />
                </td>
                <td className="p-3 text-s text-violet whitespace-nowrap">{data.full_name}</td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <a href="#" className="font-bold text-violet hover:underline">
                    {data.custom_id}
                  </a>
                </td>
                <td className="p-3 text-sm text-violet  whitespace-nowrap">
                  {data.registeredServices}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {data.activeJobs}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  {data.location}
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <span
                    className={`p-1.5 text-xs font-medium uppercase tracking-wider ${data.status === "Active"
                      ? "text-primary bg-fluracent_green"
                      : "text-primary bg-orange"
                      } rounded-full `}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-violet whitespace-nowrap">
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${data.email}`}
                      className="text-violet hover:underline"
                    >
                      <FiMail size={20} />
                    </a>
                    <a
                      href={`tel:${data.phone}`}
                      className="text-violet hover:underline"
                    >
                      <FiPhone size={20} />
                    </a>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(index);
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    <FiMoreHorizontal size={20} className="text-violet" />
                  </button>

                  {dropdownOpen === index && (
                    <div
                      onClick={(e) => e.stopPropagation()} // Prevents row click when interacting with dropdown
                      className="absolute bg-white border shadow-lg right-0 mt-2 rounded-lg z-10"
                    >
                      <ul>
                        <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleEdit(data.id) }} >Edit</li>
                        <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleDelete(data.id); toggleDropdown(null); }}>Delete</li>
                        <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleView(data.id); toggleDropdown(null); }}>View</li>
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
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tableDataConfig.length)} of {tableDataConfig.length} data
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
              className={`px-4 py-2 border rounded-full ${currentPage === pageIndex + 1 ? 'bg-violet text-white' : 'bg-white text-violet'
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
        {currentTableDataConfig.map((data) => (
          <div
            key={data.id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-2 text-sm">
              <div> 
                <a href="#" className="text-violet font-bold hover:underline">
                  {data.name}
                </a>
              </div>
              <div className="text-violet">{data.validUntil}</div>
              <div>
                <span
                  className={`p-1.5 text-xs font-medium uppercase tracking-wider ${data.status === "Active"
                    ? "text-green-800 bg-green-200"
                    : "text-gray-800 bg-gray-200"
                    } rounded-lg bg-opacity-50`}
                >
                  {data.status}
                </span>
              </div>
            </div>
            <div className="text-sm text-violet">Location: {data.location}</div>
            <div className="text-sm text-violet">Revenue: {data.revenue}</div>
            <div className="text-sm font-medium text-violet">Branches: {data.branches}</div>
            <div className="text-sm font-medium text-violet">Providers: {data.providers}</div>

            <div className="flex space-x-4">
              <a href={`mailto:${data.email}`} className="text-violet hover:underline">
                <FiMail size={20} />
              </a>
              <a href={`tel:${data.phone}`} className="text-violet hover:underline">
                <FiPhone size={20} />
              </a>
              {/* Action button for mobile */}
              <button
                onClick={() => toggleDropdown(data.id)}
                className="text-violet hover:underline"
              >
                <FiMoreHorizontal size={20} />
              </button>
              {dropdownOpen === data.id && (
                <div className="absolute bg-primary border shadow-lg right-0 mt-2 rounded-lg z-10">
                  <ul>
                    <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleEdit(data.id) }} >Edit</li>
                    <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleDelete(data.id); toggleDropdown(null); }}>Delete</li>
                    <li className="p-2 hover:bg-text-violet cursor-pointer" onClick={() => { handleView(data.id); toggleDropdown(null); }}>View</li>
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
export default ServiceProviderManagement;