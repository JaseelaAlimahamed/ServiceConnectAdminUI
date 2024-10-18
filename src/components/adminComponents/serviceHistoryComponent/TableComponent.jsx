import React, { useState } from 'react';

const TableComponent = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRows, setSelectedRows] = useState([]); // Tracks selected rows by jobId
    const [selectAll, setSelectAll] = useState(false); // Tracks if 'select all' is checked
    const usersPerPage = 6;

    // Filter users based on search term
    const filteredUsers = data.filter(user =>
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

    // Handle individual row checkbox change
    const handleCheckboxChange = (jobId) => {
        setSelectedRows(prev =>
            prev.includes(jobId)
                ? prev.filter(rowId => rowId !== jobId) // Unselect the row if already selected
                : [...prev, jobId] // Select the row if not selected
        );
    };

    // Handle "select all" checkbox change
    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedRows([]); // Uncheck all rows
        } else {
            const newSelectedRows = currentUsers.map(user => user.jobId);
            setSelectedRows(newSelectedRows); // Select all visible rows
        }
        setSelectAll(!selectAll); // Toggle select all state
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
                            <th className="py-5 pr-4 text-dark_blue font-bold hidden lg:table-cell">
                                <div className="flex ms-6">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5"
                                        checked={selectAll} // Controlled by selectAll state
                                        onChange={handleSelectAllChange} // Handle select all
                                    />
                                </div>
                            </th>
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">JOB_ID</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Date</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Franchisee</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Agent</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Service Provider Id</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Customer Id</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Customer Type</th>
                            <th className="py-5 pr-4 text-left text-dark_blue font-bold hidden lg:table-cell">Job Type</th>
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">Status</th>
                            <th className="py-5 pr-4 text-sm lg:text-lg text-center lg:text-left text-dark_blue font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.jobId} className="border-t">
                                <td className="px-6 hidden lg:table-cell">
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5"
                                        checked={selectedRows.includes(user.jobId)} // Only check if jobId is in selectedRows
                                        onChange={() => handleCheckboxChange(user.jobId)} // Handle individual checkbox
                                    />
                                </td>
                                <td className="py-4 pr-4 text-center lg:text-left text-sm lg:text-lg font-extrabold text-dark_blue">
                                    {user.jobId}
                                </td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{user.date}</td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{user.franchise}</td>
                                <td className="py-4 pr-4 text-sm text-light_gray hidden lg:table-cell">{user.agent}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{user.serviceProviderId}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{user.customerId}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{user.customerType}</td>
                                <td className="py-6 pr-4 text-dark_blue hidden lg:table-cell">{user.jobType}</td>

                                <td className="py-3 pr-4">
                                    <span
                                        className={`flex items-center justify-center ${user.status === "Completed" ? "bg-fluracent_green" : "bg-orange"} text-primary text-sm lg:text-base w-17 lg:w-24 h-10 inline-block rounded-full font-medium whitespace-nowrap`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="py-6 pr-4">
                                    {/* Actions handling */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center px-4 sm:px-6 py-4 space-y-2 sm:space-y-0">
                <span className="text-xs sm:text-sm md:text-base">
                    Showing {indexOfLastUser - usersPerPage + 1}-{Math.min(indexOfLastUser, totalUsers)} from {totalUsers} data
                </span>

                <div className="flex items-center space-x-2">
                    {/* Pagination controls */}
                </div>
            </div>
        </div>
    );
};

export default TableComponent;
