// import React, { useState } from "react";
// import VectorIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Vector.png";
// import VectorNext from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/VectorNext.png";

// const FranchiseeTable = ({
//     columns,
//     data,
//     searchPlaceholder,
//     dropdownOptions,
//     onAddEditClick,
//     onNewItemClick,
//     currentPage,
//     totalItems,
//     itemsPerPage,
//     handlePageChange
// }) => {
//     const [searchTerm, setSearchTerm] = useState("");

//     // Filter data based on search term
//     const filteredData = data.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Get current items for the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

//     // Calculate total pages
//     const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//     return (
//         <div className="p-4">
//             {/* Search, Dropdowns, and Buttons */}
//             <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
//                 <input
//                     type="text"
//                     placeholder={searchPlaceholder || "Search..."}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full md:w-auto px-4 py-2 border border-violet rounded-full shadow-sm focus:ring-2 focus:ring-violet"
//                 />

//                 <div className="w-full md:w-auto flex flex-wrap justify-center md:space-x-4 space-y-2 md:space-y-0">
//                     {dropdownOptions.map((option, index) => (
//                         <select
//                             key={index}
//                             className="border border-violet text-violet rounded-full px-4 py-2 focus:ring-2 focus:ring-violet w-full md:w-auto"
//                             onChange={(e) => option.onChange(e.target.value)}
//                             value={option.selected}
//                         >
//                             {option.options.map((opt, idx) => (
//                                 <option key={idx} value={opt.value}>
//                                     {opt.label}
//                                 </option>
//                             ))}
//                         </select>
//                     ))}

//                     <button
//                         className="bg-violet text-primary px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
//                         onClick={onAddEditClick}
//                     >
//                         Add/Edit Franchisee Type
//                     </button>
//                     <button
//                         className="bg-violet text-primary px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
//                         onClick={onNewItemClick}
//                     >
//                         + New Franchisee
//                     </button>
//                 </div>
//             </div>

//             {/* Table */}
//                 <table className="min-w-full bg-primary shadow-md rounded-lg">
//                     <thead className="bg-primary text-violet uppercase text-sm">
//                         <tr>
//                             <th className="py-3 px-6">
//                                 <input
//                                     type="checkbox"
//                                     className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
//                                 />
//                             </th>
//                             {columns.map((col, index) => (
//                                 <th key={index} className="py-3 px-6 border-b border-violet">
//                                     {col.label}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {paginatedData.map((item, idx) => (
//                             <tr key={idx} className="border-b border-violet text-violet">
//                                 <td className="py-3 px-6">
//                                     <input
//                                         type="checkbox"
//                                         className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
//                                     />
//                                 </td>
//                                 {columns.map((col, index) => (
//                                     <td key={index} className="py-3 px-6">
//                                         {col.render ? col.render(item[col.key]) : item[col.key]}
//                                     </td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
          

//             {/* Pagination */}
//             <div className="w-full flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
//                 <span className="text-sm">
//                     Showing <span className="text-violet">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of <span className="text-violet">{filteredData.length}</span> entries
//                 </span>
//                 <div className="flex items-center space-x-3">
//                     <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage <= 1}
//                         className={` ${currentPage <= 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`}
//                     >
//                         <img src={VectorIcon} alt="previous" />
//                     </button>
//                     <div className="flex space-x-2">
//                         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
//                             <span
//                                 key={pageNumber}
//                                 onClick={() => handlePageChange(pageNumber)}
//                                 className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${pageNumber === currentPage ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]" : "text-violet"}`}
//                             >
//                                 {pageNumber}
//                             </span>
//                         ))}
//                     </div>
//                     <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage >= totalPages}
//                         className={` ${currentPage >= totalPages ? "opacity-50 cursor-default" : "cursor-pointer"}`}
//                     >
//                         <img src={VectorNext} alt="next" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FranchiseeTable;

import React, { useState } from "react";
import VectorIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Vector.png";
import VectorNext from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/VectorNext.png";

const FranchiseeTable = ({
    columns,
    data,
    searchPlaceholder,
    dropdownOptions,
    onAddEditClick,
    onNewItemClick,
    currentPage,
    totalItems,
    itemsPerPage,
    handlePageChange
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter data based on search term
    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get current items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <div className="p-4">
            {/* Search, Dropdowns, and Buttons */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                <input
                    type="text"
                    placeholder={searchPlaceholder || "Search..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-auto px-4 py-2 border border-violet rounded-full shadow-sm focus:ring-2 focus:ring-violet"
                />

                <div className="w-full md:w-auto flex flex-wrap justify-center md:space-x-4 space-y-2 md:space-y-0">
                    {dropdownOptions.map((option, index) => (
                        <select
                            key={index}
                            className="border border-violet text-violet rounded-full px-4 py-2 focus:ring-2 focus:ring-violet w-full md:w-auto"
                            onChange={(e) => option.onChange(e.target.value)}
                            value={option.selected}
                        >
                            {option.options.map((opt, idx) => (
                                <option key={idx} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    ))}

                    <button
                        className="bg-violet text-primary px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
                        onClick={onAddEditClick}
                    >
                        Add/Edit Franchisee Type
                    </button>
                    <button
                        className="bg-violet text-primary px-4 py-2 rounded-full hover:bg-violet w-full md:w-auto"
                        onClick={onNewItemClick}
                    >
                        + New Franchisee
                    </button>
                </div>
            </div>

            {/* Table */}
            <table className="min-w-full bg-primary shadow-md rounded-lg">
                <thead className="bg-primary text-violet uppercase text-sm">
                    <tr>
                        <th className="py-3 px-6">
                            <input
                                type="checkbox"
                                className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
                            />
                        </th>
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className={`py-3 px-6 border-b border-violet ${
                                    col.alwaysShow ? '' : 'hidden md:table-cell' // Show only on medium and larger screens unless alwaysShow is true
                                }`}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, idx) => (
                        <tr key={idx} className="border-b border-violet text-violet">
                            <td className="py-3 px-6">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 border border-violet rounded-none focus:ring-violet"
                                />
                            </td>
                            {columns.map((col, index) => (
                                <td
                                    key={index}
                                    className={`py-3 px-6 ${
                                        col.alwaysShow ? '' : 'hidden md:table-cell'
                                    }`}
                                >
                                    {col.render ? col.render(item[col.key]) : item[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="w-full flex justify-between px-6 py-4 flex-wrap space-y-4 md:space-y-0">
                <span className="text-sm">
                    Showing <span className="text-violet">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)}</span> of <span className="text-violet">{filteredData.length}</span> entries
                </span>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage <= 1}
                        className={` ${currentPage <= 1 ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                    >
                        <img src={VectorIcon} alt="previous" />
                    </button>
                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <span
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`flex items-center justify-center h-10 w-10 border border-solid border-violet font-medium rounded-full cursor-pointer ${pageNumber === currentPage ? "bg-violet text-primary shadow-[0px_7px_16px_0px_#00000024]" : "text-violet"}`}
                            >
                                {pageNumber}
                            </span>
                        ))}
                    </div>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                        className={` ${currentPage >= totalPages ? "opacity-50 cursor-default" : "cursor-pointer"}`}
                    >
                        <img src={VectorNext} alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FranchiseeTable;


