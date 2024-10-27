import React, { useState } from 'react';
import ServiceProviderDropdown from './ServiceProviderDropdwn';

import { useNavigate } from 'react-router-dom';

function ServiceProvidersTable({ tableDataConfig, tableColConfig, tableConfig, onView,onDelete,options,label }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);
  const serviceProviderManagement = tableConfig.type === "serviceprovidermanagements";
  // Sort users based on newest or oldest
  const sortedUsers = [...tableDataConfig].sort((a, b) =>
    sortNewest ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
  );
  // Filter users based on search term
  const filteredUsers = serviceProviderManagement
    ? sortedUsers.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : sortedUsers;

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfLastUser - usersPerPage, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => i + 1);

  const handleCheckboxChange = (id) =>
    setSelectedRows(
      selectedRows.includes(id) ? selectedRows.filter(rowId => rowId !== id) : [...selectedRows, id]
    );

  const toggleSortOrder = () => setSortNewest(!sortNewest);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const toggleAction = (id) => setOpenActionId((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col font-poppins text-black space-y-4">
      {serviceProviderManagement && (
        <div className="flex flex-wrap justify-between">
          <div className="flex gap-4">
            <ServiceProviderDropdown 
            buttonLabel={label}
            options={options} // Pass the options prop to the dropdown
        onSelect={(value) => console.log('Selected franchise:', value)}  />
            <div className="relative rounded-full h-16 mb-2">
              <img className="absolute left-6 top-1/2 transform -translate-y-1/2" src="/search-icon.svg" alt="search" />
              <input
                className="outline-none px-16 py-4 pl-[70px] h-full"
                type="text"
                placeholder="Search Here..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="flex items-center justify-center rounded-full px-14 h-16 border-2 border-violet gap-2"
              onClick={toggleSortOrder}
            >
              <span className="text-violet text-lg font-medium">Newest</span>
              <img src="/dropdown-icon.svg" alt="dropdown" />
            </button>
            <button className="flex items-center justify-center bg-violet rounded-full px-14 h-16 gap-2">
              <img src="/add-icon.svg" alt="new user" />
              <span className="text-primary text-lg font-medium">New User</span>
            </button>
          </div>
        </div>
      )}
      <div className="bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full relative">
        <table className="w-full text-center border-collapse">
          {tableConfig.title && (
            <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-dark_blue">
              {tableConfig.title}
            </caption>
          )}
          <thead>
            <tr>
              {serviceProviderManagement && <th><input type="checkbox" className="px-4 py-10" /></th>}
              {tableColConfig.map((col, index) => (
                <th key={index} scope="col" className="p-5 text-dark_blue font-bold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index} className={`${serviceProviderManagement ? "border-t" : ""}`}>
                {serviceProviderManagement && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </td>
                )}
                {data.name && (
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4">
                      <img src={data.image} alt="" />
                      <span className="text-lg text-dark_blue font-bold">{data.name}</span>
                    </div>
                  </td>
                )}
                <td className="p-6 text-lg text-violet font-bold">{data.id}</td>
                <td className="px-6 text-sm text-gray-500">{data.activejobs}</td>
                <td className="px-6 py-4 text-dark_blue font-semibold">{data.registeredService}</td>
                <td className="px-6 py-4 text-dark_blue font-semibold">{data.location}</td>
                {serviceProviderManagement && (
                  <td className="px-6 py-4 flex gap-2">
                    <a href={`tel:${data.contact?.phone}`} className="p-1 bg-violet bg-opacity-10 rounded-full">
                      <img className="min-w-6" src="/phone-icon.svg" alt="phone" />
                    </a>
                    <a href={`mailto:${data.contact?.mail}`} className="p-1 bg-violet bg-opacity-10 rounded-full">
                      <img className="min-w-6" src="/email-icon.svg" alt="email" />
                    </a>
                  </td>
                )}
                <td className="px-6 py-4">
                  <span
                    className={`flex items-center justify-center ${
                      data.status === "Active" ? "bg-fluracent_green" : "bg-orange"
                    } text-primary w-24 h-10 inline-block rounded-full font-medium`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="p-6">
                  <div className="relative">
                    <span onClick={() => toggleAction(data.id)}>
                      <img className="min-w-6 cursor-pointer" src="/actions-icon.svg" alt="action" />
                    </span>
                    <ul
                      className={`absolute z-10 top-6 right-6 shadow-md rounded-lg ${
                        openActionId === data.id ? "block" : "hidden"
                      }`}
                    >
                      <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2" onClick={onView}>
                        View
                      </li>
                      <li
                        className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2"
                        onClick={onDelete}
                      >
                        Delete
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute w-full bottom-0 flex justify-between px-6 py-4">
          <span>
            Showing{" "}
            <span className="text-violet">{indexOfLastUser - usersPerPage + 1}-{Math.min(indexOfLastUser, filteredUsers.length)}</span>{" "}
            of <span className="text-violet">{filteredUsers.length}</span> entries
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className={`${currentPage <= 1 ? "opacity-50 cursor-default" : ""}`}
            >
              <img src="/prevsolid-icon.svg" alt="previous" />
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`w-10 h-10 text-lg flex items-center justify-center rounded-full font-medium ${
                  currentPage === number ? "bg-violet text-primary" : "text-dark_blue bg-primary"
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= pageNumbers.length}
              className={`${currentPage >= pageNumbers.length ? "opacity-50 cursor-default" : ""}`}
            >
              <img src="/nextsolid-icon.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvidersTable;
