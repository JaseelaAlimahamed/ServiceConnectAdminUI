import React, { useState } from 'react';

const TransactionTable = ({ tableDataConfig }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);
    const [openActionId, setOpenActionId] = useState(null);
    const usersPerPage = 6;

    const filteredUsers = tableDataConfig.filter(user =>
        Object.values(user).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfLastUser - usersPerPage, indexOfLastUser);

    const totalUsers = filteredUsers.length;
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleCheckboxChange = (transactionId) => {
        setSelectedRows(prev =>
            prev.includes(transactionId)
                ? prev.filter(rowId => rowId !== transactionId)
                : [...prev, transactionId]
        );
    };
    const handleView = () => {
        console.log("view true")
    }
    const handleEdit = () => {
        console.log("edit true")
    }
    const handleDelete = () => {
        console.log("delete true")
    }
    const toggleAction = (transactionId) => {
        setOpenActionId((prev) => (prev === transactionId ? null : transactionId));
    };

    return (
        <div className="flex flex-col font-poppins">
            <div className="flex flex-wrap justify-between mb-4">
                <span className="relative rounded-full overflow-hidden h-12 mb-2 w-full sm:w-auto">
                    <img
                        className="absolute left-6 top-1/2 transform -translate-y-1/2"
                        src="/search-icon.svg"
                        alt="search"
                    />
                    <input
                        className="outline-none px-16 py-4 pl-[70px] h-full w-full"
                        type="text"
                        placeholder="Search Here..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </span>
            </div>

            <div className="relative bg-primary mt-4 rounded-xl overflow-x-auto pb-20 h-full">
                <table className="min-w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="py-5 pr-4  text-dark_blue font-bold hidden lg:table-cell">
                                <div className="flex ms-6">
                                    <input type="checkbox" className="w-5 h-5" />
                                </div>
                            </th>
                            {/* Show this column on all screen sizes */}
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">Transaction ID</th>

                            {/* Hide these columns on small screens */}
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Date</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Type</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Description</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">From</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">To</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Amount</th>

                            {/* Show this column on all screen sizes */}
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">Status</th>

                            {/* Show this column on all screen sizes */}
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((data, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-6 hidden lg:table-cell">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5"
                                        checked={selectedRows.includes(data.transactionId)}
                                        onChange={() => handleCheckboxChange(data.transactionId)}
                                    />
                                </td>

                                <td className="py-4 pr-4 text-center lg:text-left text-sm lg:text-lg font-extrabold text-dark_blue">{data.transactionId}</td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{data.date}</td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{data.type}</td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{data.description}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{data.from}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{data.to}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{data.amount}</td>

                                <td className="py-3 pr-4 ">
                                    <span
                                        className={`flex items-center justify-center ${data.status === "Complete" ? "bg-fluracent_green" : "bg-orange"} text-primary text-sm lg:text-base w-17 lg:w-24 h-10 inline-block rounded-full font-medium whitespace-nowrap`}
                                    >
                                        {data.status}
                                    </span>
                                </td>
                                <td className="py-6 pr-4">
                                    <div className="relative">
                                        <span onClick={() => toggleAction(data.transactionId)}>
                                            <img
                                                className="min-w-6 m-auto cursor-pointer"
                                                src="/actions-icon.svg"
                                                alt="action"
                                            />
                                        </span>
                                        <ul className={`absolute z-10 top-4 right-6 shadow-md rounded-lg overflow-hidden ${openActionId === data.transactionId ? "block" : "hidden"}`}>
                                            <li className="bg-primary cursor-pointer hover:bg-blue_gray px-7 py-2 border-b" onClick={handleView}>view</li>
                                            <li className="bg-primary cursor-pointer hover:bg-blue_gray px-7 py-2 border-b" onClick={handleEdit}>edit</li>
                                            <li className="bg-primary cursor-pointer hover:bg-blue_gray px-7 py-2" onClick={handleDelete}>delete</li>
                                        </ul>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center px-4 sm:px-6 py-4 space-y-2 sm:space-y-0">
                <span className="text-xs sm:text-sm md:text-base">
                    Showing {indexOfLastUser - usersPerPage + 1}-{Math.min(indexOfLastUser, totalUsers)} from {totalUsers} data
                </span>

                <div className="flex items-center space-x-2">
                    {/* Previous Button */}
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className={`h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center ${currentPage <= 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                    >
                        <img src="/prevsolid-icon.svg" alt="previous" className="h-4 sm:h-5" />
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <span
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 border border-solid border-violet font-medium rounded-full cursor-pointer 
                ${number === currentPage ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]" : "text-violet"}`}
                        >
                            <span className="text-xs sm:text-sm">{number}</span>
                        </span>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                        className={`h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center ${currentPage >= totalPages ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                    >
                        <img src="/nextsolid-icon.svg" alt="next" className="h-4 sm:h-5" />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default TransactionTable;
