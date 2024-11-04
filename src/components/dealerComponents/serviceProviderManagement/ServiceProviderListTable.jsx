import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

const ServiceProviderListTable = ({ tableDataConfig, tableColConfig, tableConfig }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);

  const serviceProviderManagement =
    tableConfig.type === 'serviceprovidermanagement';

  // Sorting and Filtering Logic
  const sortedUsers = [...tableDataConfig].sort((a, b) =>
    sortNewest ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
  );

  const filteredUsers = sortedUsers.filter((user) =>
    user && user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const pageNumbers = Array.from(
    { length: Math.ceil(filteredUsers.length / usersPerPage) },
    (_, i) => i + 1
  );

  const toggleSortOrder = () => setSortNewest(!sortNewest);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleCheckboxChange = (id) => {
    setSelectedRows(
      selectedRows.includes(id)
        ? selectedRows.filter((rowId) => rowId !== id)
        : [...selectedRows, id]
    );
  };
  const toggleAction = (id) => setOpenActionId((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col font-poppins text-black p-4 md:p-6 lg:p-8">
      {serviceProviderManagement && (
        <div className="flex flex-wrap justify-between mb-4">
          <span className="relative rounded-full overflow-hidden h-16">
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
          <div className="flex gap-4 flex-wrap">
            <button
              className="flex items-center justify-center rounded-full px-4 h-12 border-2 border-solid border-violet gap-2"
              onClick={toggleSortOrder}
            >
              <span className="text-violet text-lg font-medium">Newest</span>
              <img src="/dropdown-icon.svg" alt="dropdown" />
            </button>
            <button className="flex items-center justify-center bg-violet rounded-full px-4 h-12 gap-2">
              <img src="/add-icon.svg" alt="new user" />
              <span className="text-primary text-lg font-medium whitespace-nowrap">
                New User
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive Table */}
      <div className="relative bg-primary mt-4 rounded-xl overflow-hidden">
        {/* Table Layout for Larger Screens */}
        <div className="hidden md:block">
          <table className="min-w-full text-center border-collapse">
            {tableConfig.title && (
              <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-dark_blue">
                {tableConfig.title}
              </caption>
            )}
            <thead>
              <tr>
                {serviceProviderManagement && (
                  <th>
                    <span className="px-4 py-10">
                      <input type="checkbox" />
                    </span>
                  </th>
                )}
                {tableColConfig?.map((col, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="p-2 text-dark_blue font-bold text-xs md:text-sm lg:text-base"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((data, index) => (
                <tr key={index} className="border-t">
                  {serviceProviderManagement && (
                    <td className="p-2">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(data.id)}
                        onChange={() => handleCheckboxChange(data.id)}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2 flex items-center gap-2 text-xs md:text-sm lg:text-base">
                    <img src={data.image} alt="" className="w-8 h-8 rounded-full" />
                    <span className="text-lg text-dark_blue font-bold">{data.name}</span>
                  </td>
                  <td className="p-4 text-lg text-violet font-bold">{data.id}</td>
                  <td className="px-4 py-4 text-sm text-gray-500">{data.date}</td>
                  <td className="px-4 py-4 text-dark_blue font-semibold">
                    {data.verifiedBy}
                  </td>
                  <td className="px-4 py-4 text-dark_blue font-semibold">
                    {data.location}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <a
                        href={`tel:${data.contact.phone}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full"
                      >
                        <img src="/phone-icon.svg" alt="phone" />
                      </a>
                      <a
                        href={`mailto:${data.contact.mail}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full"
                      >
                        <img src="/email-icon.svg" alt="email" />
                      </a>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`flex items-center justify-center ${data.status === 'Active' ? 'bg-fluracent_green' : 'bg-orange'
                        } text-primary w-24 h-10 inline-block rounded-full font-medium`}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleView(data.id)} // Navigate on icon click
                    >
                        <FaEye className="mx-2 text-blue-500" style={{ fontSize: '1.3rem' }} /> {/* Icon with some margin */}
                     
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card Layout for Smaller Screens */}
        <div className="md:hidden grid grid-cols-1 gap-10 p-4 ">
          {currentUsers.map((data, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
              <div className="absolute top-2 right-2">
                <div className="relative">
                  <button onClick={() => toggleAction(data.id)} className="focus:outline-none">
                    <img
                      className="w-6 h-6 cursor-pointer"
                      src="/actions-icon.svg"
                      alt="action"
                    />
                  </button>
                  {openActionId === data.id && (
                    <ul className="absolute top-8 right-0 w-32 bg-white shadow-lg rounded-lg z-10">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex items-center mb-3 w-full">
                {serviceProviderManagement && (
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(data.id)}
                    onChange={() => handleCheckboxChange(data.id)}
                    className="mr-2 w-6 h-6 "
                  />
                )}
                <img src={data.image} alt={data.name} className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <h3 className="text-lg font-bold break-words">{data.name}</h3>
                  <p className="text-gray-500 break-words">ID: {data.id}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-gray-500 whitespace-normal">Date: {data.date}</p>
                <p className="text-gray-500 whitespace-normal">Verified By: {data.verifiedBy}</p>
                <p className="text-gray-500 whitespace-normal">Location: {data.location}</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="p-1 bg-violet bg-opacity-10 rounded-full"
                  >
                    <img src="/phone-icon.svg" alt="phone" />
                  </a>
                  <a
                    href={`mailto:${data.contact.mail}`}
                    className="p-1 bg-violet bg-opacity-10 rounded-full"
                  >
                    <img src="/email-icon.svg" alt="email" />
                  </a>
                </div>
                <span
                  className={`flex items-center justify-center ${data.status === 'Active' ? 'bg-fluracent_green' : 'bg-orange'
                    } text-primary w-24 h-10 inline-block rounded-full font-medium`}
                >
                  {data.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className=" w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            showing <span className="text-violet">1-5</span> from{" "}
            <span className="text-violet">100</span> data
          </span>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1 ? true : false}
              className={` ${currentPage <= 1
                  ? "opacity-50 cursor-default"
                  : "cursor-pointer"
                }`}
            >
              <img src="/prevsolid-icon.svg" alt="previous" />
            </button>
            <div className="flex space-x-2">
              {pageNumbers.map((number) => (
                <span
                  key={number}
                  onClick={() => paginate(number)}
                  className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${number === currentPage
                      ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]"
                      : "text-violet"
                    }`}
                >
                  {number}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= pageNumbers.length ? true : false}
              className={`${currentPage >= pageNumbers.length
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

export default ServiceProviderListTable;
