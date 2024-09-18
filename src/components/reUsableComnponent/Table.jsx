import React, {useState} from "react";


const Table = ({tableDataConfig,tableColConfig,tableConfig}) => {

  const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [sortNewest, setSortNewest] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const userManagement = tableConfig.type === "usermanagement"
    const incompletedBookings = tableConfig.type === "incompletedbookings" 
    const paymentLog = tableConfig.type === "paymentlog" 
    const complaintsLog = tableConfig.type === "complaintslog" 
    const expenseLog = tableConfig.type === "expenselog" 


    
    const sortedUsers = [...tableDataConfig].sort((a, b) => {
      return sortNewest 
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
  });

  
  const filteredUsers = userManagement ? sortedUsers.filter(user => 
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


 

  return (
    <div className="flex flex-col font-default">
      {userManagement && (
        <div className="flex flex-wrap justify-between">
          <span className="relative rounded-full overflow-hidden h-16 mb-2">
            <img
              className="absolute left-6 top-1/2 transform -translate-y-1/2"
              src="/search-icon.png"
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
              className="flex items-center justify-center rounded-full px-14 h-16 border-2 border-solid border-violet gap-2"
              onClick={toggleSortOrder}
            >
              <span className="text-violet text-lg font-medium">Newest</span>
              <img src="/dropdown-icon.png" alt="dropdown" />
            </button>
            <button className="flex items-center justify-center bg-violet rounded-full  px-14 h-16 gap-2">
              <img src="/add-icon.png" alt="new user" />
              <span className="text-primary text-lg font-medium whitespace-nowrap">
                New User
              </span>
            </button>
          </div>
        </div>
      )}

      <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto min-h-[700px]">
        <table className="w-full text-left border-collapse ">
          {tableConfig.title && 
          <caption className="p-8 text-3xl font-semibold text-left rtl:text-right text-blue">
            {tableConfig.title}
          </caption>
          }
          <thead>
            <tr>
              {tableColConfig?.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-5 text-blue font-bold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((data, index) => (
              <tr key={index} className={`${userManagement && "border-t"}`}>
                {data.name && (
                  <td className={`px-6 ${userManagement && "py-10"}`}>
                    <div className="flex items-center gap-4 mr-6 lg:mr-0">
                      <img src={data.image} alt="" />
                      <span className="text-lg text-blue font-bold">{data.name}</span>
                    </div>
                  </td>
                )}
                {(complaintsLog || expenseLog || paymentLog) && (
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                        <img src="/trending-icon.svg" alt="" />

                        <div className="flex flex-col px-5 py-0">
                      <span className="text-lg text-violet font-bold mb-1">
                        {data.paymentId}
                      </span>
                      {(complaintsLog || expenseLog ) && 
                  <span className=" text-sm text-gray-500 ">
                    {data.date} {data.time}
                  </span> 
                 }

                        </div>
                    </div>
                  </td>
                )}
                {userManagement && 
                <td className="p-6 text-lg text-violet font-bold "><span className="">{data.id}</span></td>
                }
                {(userManagement || paymentLog) && (
                  <td className=" text-sm text-gray-500">
                    {data.date}
                  </td>
                )}
                {paymentLog && (
                  <td className="text-sm text-gray-500">
                    {data.description}
                  </td>
                )}
                {incompletedBookings && 
                <td className="p-6 ">
                <div className="flex items-center">
                    <img src={data.userImage} alt="" />

                    <div className="flex flex-col ml-2">
                  <span className="text-md text-gray-500 ">
                    {data.userName}
                  </span>
                    </div>
                </div>
              </td>
                }
                
                {expenseLog && data.paymentFor && (
                <td className="px-6 py-4 text-sm text-blue font-bold">
                   {data.paymentFor}
                </td>
                )}
                {data.paymentAmount && (
                  <td className="px-6 py-4 text-lg text-blue font-bold">
                    ${data.paymentAmount}
                  </td>
                )}

                {userManagement && (
                  <td className="px-6 py-4 text-blue text-center font-semibold">
                    {data.totalCompletedWork}
                  </td>
                )}
                {data.location && (
                  <td className="px-6 py-4 text-blue font-semibold">
                    {data.location}
                  </td>
                )}
                {data.contact && (
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a
                        href={`tel:${data.contact?.phone}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full cursor-pointer"
                      >
                        <img className="min-w-6" src="/phone-icon.png" alt="phone" />
                      </a>
                      <a
                        href={`mailto:${data.contact?.mail}`}
                        className="p-1 bg-violet bg-opacity-10 rounded-full cursor-pointer"
                      >
                        <img className="min-w-6" src="/email-icon.png" alt="email" />
                      </a>
                    </div>
                  </td>
                )}
                  {(data.paymentStatus || data.serviceStatus) && (
                  <td
                    className={`p-6 text-lg font-bold ${
                      (data.paymentStatus === "Complete" || data.serviceStatus === "Complete")
                        ? "text-lightergreen"
                        : (data.paymentStatus === "Pending" || data.serviceStatus === "Pending")
                        ? "text-gray-600"
                        : (data.paymentStatus === "Cancelled" || data.serviceStatus === "Cancelled")
                        ? "text-red"
                        : "text-default"
                    }`}
                  >
                    {data.paymentStatus || data.serviceStatus}
                  </td>
                )}
                {data.status && (
                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center justify-center ${
                        data.status ===  "active" ? "bg-fluracentgreen" : "bg-orange"
                      } text-primary w-24 h-10 inline-block rounded-full font-medium whitespace-nowrap`}
                    >
                      {data.status ===  "active" ? "Active" : "Not Active"}
                    </span>
                  </td>
                )}
                {(userManagement) && (
                  <td className="p-6">
                      <img
                        className="min-w-6 m-auto cursor-pointer"
                        src="/actions-icon.png"
                        alt="action"
                      />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
     
          <div className="absolute w-full bottom-0 flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
            <span>
              showing <span className="text-violet">1-5</span> from{" "}
              <span className="text-violet">100</span> data
            </span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage <= 1 ? true : false}
                className={` ${
                  currentPage <= 1
                    ? "opacity-50 cursor-default"
                    : "cursor-pointer"
                }`}
              >
                <img src="/prevsolid-icon.png" alt="previous" />
              </button>
              <div className="flex space-x-2">
                {pageNumbers.map((number) => (
                  <span
                    key={number}
                    onClick={() => paginate(number)}
                    className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${
                      number === currentPage
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
                className={`${
                  currentPage >= pageNumbers.length
                    ? "opacity-50 cursor-default"
                    : "cursor-pointer"
                }`}
              >
                <img src="/nextsolid-icon.png" alt="next" />
              </button>
            </div>
          </div>
   
      </div>
    </div>
  );
};

export default Table;
