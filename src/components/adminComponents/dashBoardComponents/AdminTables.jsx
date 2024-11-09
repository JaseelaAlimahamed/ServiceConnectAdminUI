import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { IoIosMore } from 'react-icons/io';
import { LuTrendingUp } from "react-icons/lu";

const AdminTables = ({ tableDataConfig, tableConfig }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [openActionId, setOpenActionId] = useState(null);

    const incompletedBookings = tableConfig.type === "incompletedbookings";
    const complaintsLog = tableConfig.type === "complaintslog";

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = tableDataConfig.slice(indexOfFirstUser, indexOfLastUser);
    const totalUsers = tableDataConfig.length;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleView = () => {
        console.log("view true");
    };
    const handleEdit = () => {
        console.log("edit true");
    };
    const handleDelete = () => {
        console.log("delete true");
    };

    const toggleAction = (id) => {
        setOpenActionId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="flex flex-col font-poppins text-secon">
            <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto pb-16 h-full">
                <table className="w-full text-center border-collapse">
                    {tableConfig.title && (
                        <caption className="p-6 text-xl font-semibold text-left rtl:text-right text-dark_blue">
                            {tableConfig.title}
                        </caption>
                    )}
                    
                    <tbody>
                        {currentUsers.map((data, index) => (
                            <tr key={index} className="border-t">
                                {/* First column: User Image and Name */}
                                {incompletedBookings && (
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <img src={data.userImage} alt="" className="w-8 h-8 rounded-full" />
                                            <div className="flex flex-col ml-2">
                                                <span className="text-sm text-gray-500">{data.userName}</span>
                                            </div>
                                        </div>
                                    </td>
                                )}

                                {/* Complaints log Payment Info */}
                                {complaintsLog && (
                                    <td className="px-4 py-3">
                                        <div className="flex">
                                            <div className="bg-lite_red text-primary p-2 rounded-full w-8 h-8 flex justify-center mr-2">
                                                <LuTrendingUp size={16} />
                                            </div>
                                            <div className="flex flex-col px-4 items-start">
                                                <span className="text-md text-violet font-bold">{data.paymentId}</span>
                                                <span className="text-xs text-gray-500">
                                                    {data.date} {data.time}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                )}

                                {/* Second column: ID */}
                                {incompletedBookings && (
                                    <td className="p-4 text-md text-violet font-bold hidden lg:table-cell">
                                        <span>{data.id}</span>
                                    </td>
                                )}

                                {/* Payment Amount */}
                                {(complaintsLog || incompletedBookings) && (
                                    <td className="px-4 py-3 text-md text-dark_blue font-bold">
                                        ${data.paymentAmount}
                                    </td>
                                )}

                                {/* Second Username Column */}
                                {incompletedBookings && (
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="bg-orange_bg text-primary p-2 rounded-full w-8 h-8 flex justify-center mr-2">
                                                <BiUser size={16} />
                                            </div>
                                            <div className="flex flex-col ml-2">
                                                <span className="text-sm text-gray-500 hidden lg:table-cell">{data.userName}</span>
                                            </div>
                                        </div>
                                    </td>
                                )}

                                {/* Complaints Log Payment Status */}
                                {complaintsLog && (
                                    <td className={`px-4 py-3 text-md font-bold ${data.paymentStatus === "Complete"
                                        ? "text-lite_green"
                                        : data.paymentStatus === "Pending"
                                            ? "text-gray-600"
                                            : data.paymentStatus === "Cancelled"
                                                ? "text-red"
                                                : "text-default"
                                        }`}>
                                        {data.paymentStatus}
                                    </td>
                                )}

                                {/* Action Column */}
                                {incompletedBookings && (
                                    <td className="p-4 ">
                                        <div className="relative">
                                            <span onClick={() => toggleAction(data.id)}>
                                                
                                            <IoIosMore />
                                            </span>
                                            <ul className={`absolute z-10 top-6 right-6 shadow-md rounded-lg overflow-hidden ${openActionId === data.id ? "block" : "hidden"}`}>
                                                <li className="bg-primary cursor-pointer hover:bg-slate-100 px-6 py-1 border-b" onClick={handleView}>View</li>
                                                <li className="bg-primary cursor-pointer hover:bg-slate-100 px-6 py-1 border-b" onClick={handleEdit}>Edit</li>
                                                <li className="bg-primary cursor-pointer hover:bg-slate-100 px-6 py-1" onClick={handleDelete}>Delete</li>
                                            </ul>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center px-4 sm:px-6 py-4 space-y-2 sm:space-y-0">
                    <span  className="text-xs sm:text-sm md:text-base">
                        Showing <span className="text-violet">{indexOfFirstUser + 1}-{Math.min(indexOfLastUser, totalUsers)}</span> from{" "}
                        <span className="text-violet">{totalUsers}</span> data
                    </span>
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage <= 1}
                            className={`h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center ${currentPage <= 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                        >
                            <img src="/prevsolid-icon.svg" alt="previous" />
                        </button>
                        <div className="flex space-x-2">
                            {pageNumbers.map((number) => (
                                <span
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 border border-solid border-violet font-medium rounded-full cursor-pointer 
                ${number === currentPage ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]" : "text-violet"}`}
                                >
                                    {number}
                                </span>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage >= pageNumbers.length}
                            className={`${currentPage >= pageNumbers.length ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                        >
                            <img src="/nextsolid-icon.svg" alt="next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTables;
