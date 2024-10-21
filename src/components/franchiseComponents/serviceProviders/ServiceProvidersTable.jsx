import React, { useState } from 'react'
import ServiceProviderDropdwn from './ServiceProviderDropdwn';
import SeviceModal from './SeviceModal';
import { useNavigate } from 'react-router-dom';

function ServiceProvidersTable({ tableDataConfig, tableColConfig, tableConfig, onView }) {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [sortNewest, setSortNewest] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [openActionId, setOpenActionId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);


  const serviceProviderManagement = tableConfig.type === "serviceprovidermanagements"



  const sortedUsers = [...tableDataConfig].sort((a, b) => {
    return sortNewest
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });
  const handleSelect = (option) => {
    console.log('selected Option', option);

  }
  const options = [
    { label: 'Franchise 1', value: '1' },
    { label: 'Franchise 2', value: '2' },
    { label: 'Franchise 3', value: '3' },
  ];


  const filteredUsers = (serviceProviderManagement) ? sortedUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : sortedUsers;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  const totalUsers = filteredUsers.length

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }


  const toggleSortOrder = () => {
    setSortNewest(!sortNewest);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };



  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  }

  const handleView = () => {
    navigate(`providers`);
    // if (onView) {
    //   onView();
    // }
    console.log("view true");
  };
  
  const handleOpenModal = (id) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSuccessOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log(`Delete confirmed for ID: ${deleteId}`);
    setIsModalOpen(false); 
    setIsSuccessOpen(true); 
  };


  const toggleAction = (id) => {
    setOpenActionId((prev) => (prev === id ? null : id));
  };


  return (
    <div className="flex flex-col font-poppins text-black ">
      {(serviceProviderManagement) && (
        <div className="flex flex-wrap justify-between">
          <div className="flex gap-4 flex-wrap">

            <span className="text-violet text-lg font-medium">
              <ServiceProviderDropdwn buttonLabel="Franchise" options={options} onSelect={handleSelect} />
            </span>

            <span className="relative rounded-full overflow-hidden h-16 mb-2">
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
          </div>

          <div className="flex gap-4 flex-wrap">
            <button
              className="flex items-center justify-center rounded-full px-14 h-16 border-2 border-solid border-violet gap-2"
              onClick={toggleSortOrder}
            >
              <span className="text-violet text-lg font-medium">Newest</span>
              <img src="/dropdown-icon.svg" alt="dropdown" />
            </button>
            <button className="flex items-center justify-center bg-violet rounded-full  px-14 h-16 gap-2">
              <img src="/add-icon.svg" alt="new user" />
              <span className="text-primary text-lg font-medium whitespace-nowrap">
                New User
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full">
        <table className="w-full text-center border-collapse ">
          {tableConfig.title &&
            <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-dark_blue">
              {tableConfig.title}
            </caption>
          }
          <thead>
            <tr>
              {(serviceProviderManagement) &&
                <th><span className="px-4 py-10"><input type="checkbox" /></span></th>
              }
              {tableColConfig?.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-5 text-dark_blue font-bold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index} className={`${(serviceProviderManagement) && "border-t"}`}>
                {/* Checkbox for user management and service provider management */}
                {(serviceProviderManagement) && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(data.id)}
                      onChange={() => handleCheckboxChange(data.id)}
                    />
                  </td>
                )}

                {/* Name Column */}
                {data.name && (
                  <td className={`px-6 py-6 ${(serviceProviderManagement) && "py-8"}`}>
                    <div className="flex items-center gap-4 mr-6 lg:mr-0">
                      <img src={data.image} alt="" />
                      <span className="text-lg text-dark_blue font-bold">{data.name}</span>
                    </div>
                  </td>
                )}



                {/* ID Column */}
                {(serviceProviderManagement) && (
                  <td className="p-6 text-lg text-violet font-bold">
                    <span>{data.id}</span>
                  </td>
                )}



                {/* Date and Time Column */}
                {(serviceProviderManagement) && (
                  <td className="px-6 text-sm text-gray-500">
                    {data.activejobs}
                  </td>
                )}


                {/* Verified By Column (for service provider management) */}
                {serviceProviderManagement && (
                  <td className="px-6 py-4 text-dark_blue font-semibold">
                    {data.registeredService}
                  </td>
                )}

                {/* Location Column */}
                {(serviceProviderManagement) && (
                  <td className="px-6 py-4 text-dark_blue font-semibold">
                    {data.location}
                  </td>
                )}

                {/* Contact Column */}
                {(serviceProviderManagement) && (
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a
                        href={`tel:${data.contact?.phone}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full cursor-pointer"
                      >
                        <img className="min-w-6" src="/phone-icon.svg" alt="phone" />
                      </a>
                      <a
                        href={`mailto:${data.contact?.mail}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full cursor-pointer"
                      >
                        <img className="min-w-6" src="/email-icon.svg" alt="email" />
                      </a>
                    </div>
                  </td>
                )}


                {/* Status Column */}
                {(serviceProviderManagement) && (
                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center justify-center ${data.status === "Active" ? "bg-fluracent_green" : "bg-orange"
                        } text-primary w-24 h-10 inline-block rounded-full font-medium whitespace-nowrap`}
                    >
                      {data.status}
                    </span>
                  </td>
                )}

                {/* Additional Actions Column */}
                {(serviceProviderManagement) && (
                  <td className="p-6">
                    <div className="relative">
                      <span onClick={() => toggleAction(data.id)}>
                        <img
                          className="min-w-6 m-auto cursor-pointer"
                          src="/actions-icon.svg"
                          alt="action"
                        />
                      </span>
                      <ul className={`absolute z-10 top-6 right-6 shadow-md rounded-lg overflow-hidden ${openActionId === data.id ? "block" : "hidden"}`}>
                        <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b " onClick={handleView}>view</li>
                        {/* <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2 border-b " onClick={handleEdit}>edit</li> */}
                        <li className="bg-primary cursor-pointer hover:bg-slate-100 px-7 py-2" onClick={() => handleOpenModal(data.id)}>delete</li>
                      </ul>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>



        </table>

        <div className="absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
          <span>
            showing <span className="text-violet">{indexOfFirstUser + 1}-{indexOfLastUser > totalUsers ? totalUsers : indexOfLastUser}</span> from{" "}
            <span className="text-violet">{totalUsers}</span> data
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
      <SeviceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Delete Confirmation"
        children="Are you sure you want to delete this service provider?"
        confirmText="Delete"
      />
      <SeviceModal
        isOpen={isSuccessOpen} 
        onClose={handleCloseModal}
        children="Successfully Deleted" 
      />
    
    </div>
  );
};

export default ServiceProvidersTable
