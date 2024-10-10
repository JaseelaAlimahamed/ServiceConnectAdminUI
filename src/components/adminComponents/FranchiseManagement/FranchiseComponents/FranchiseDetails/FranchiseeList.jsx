// import React, { useState, useEffect } from "react";
// import FranchiseeTable from "../FranchiceeReuseableComponents/Franchiseetable";
// import PhoneIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Phone.png";
// import EmailIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Email.png";
// import FranchiseeCardDashboard from "./FranchiseeCardDashboard";

// const FranchiseeList = () => {
//     // State to store franchisee data
//     const [franchiseeData, setFranchiseeData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Pagination states
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5; // Set the number of items per page

//     const DummyData = [
//         {
//             name: "Samanta William",
//             id: "#123456789",
//             revenue: "10,00,500",
//             branches: 2,
//             providers: 2,
//             location: "Jakarta",
//             validUntil: "March 25, 2023",
//             status: "Inactive",
//         },
//         // Add more dummy data here as needed
//     ];

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setTimeout(() => {
//                     setFranchiseeData(DummyData);
//                     setLoading(false);
//                 }, 1000);
//             } catch (error) {
//                 console.error("Error fetching franchisee data:", error);
//             }
//         };

//         fetchData();
//     }, []);

//     // const columns = [
//     //     { label: "Franchisee Name", key: "name" },
//     //     { label: "ID", key: "id" },
//     //     { label: "Revenue", key: "revenue" },
//     //     { label: "Branches", key: "branches" },
//     //     { label: "Service Providers", key: "providers" },
//     //     {
//     //         label: "Contact",
//     //         key: "contact",
//     //         render: () => (
//     //             <div className="flex space-x-2 items-center">
//     //                 <img src={PhoneIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
//     //                 <img src={EmailIcon} alt="Email Icon" className="h-5 w-5 rounded-full" />
//     //             </div>
//     //         ),
//     //     },
//     //     { label: "Valid Until", key: "validUntil" },
//     //     {
//     //         label: "Status",
//     //         key: "status",
//     //         render: (status) => (
//     //             <span
//     //                 className={`px-4 py-1 rounded-full text-primary ${
//     //                     status === "Inactive" ? "bg-red" : "bg-lightgreen"
//     //                 }`}
//     //             >
//     //                 {status}
//     //             </span>
//     //         ),
//     //     },
//     //     { label: "Action", key: "action", render: () => "..." },
//     // ];

//     const columns = [
//         { label: "Franchisee Name", key: "name",
//             render:(name)=>{
//                 <div className="py-5 pr-4 text-left hidden lg:table-cell">{name}</div>
//             }
//          },
//         { label: "ID", key: "id",
//             render:(id)=>{
//                 <div className="py-5 pr-4 text-left hidden lg:table-cell">{id}</div>
//             }

//          },
//         { label: "Revenue", key: "revenue",
//             render:(revenue)=>{
//                 <div className="py-5 pr-4 text-left hidden lg:table-cell">{revenue}</div>
//             }
//          },
//         { label: "Branches", key: "branches" ,
//             render:(branches)=>{
//                 <div className="py-5 pr-4 text-left hidden lg:table-cell">{branches}</div>
//             }
//         },
//         { label: "Service Providers", key: "providers",
//             render:(providers)=>{
//                 <div className="py-5 pr-4 text-left hidden lg:table-cell">{providers}</div>
//             }
//          },
//         {
//             label: "Contact",
//             key: "contact",
//             render: () => (
//                 <div className="flex space-x-2 items-center py-5 pr-4 text-left hidden lg:table-cell">
//                     <img src={PhoneIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
//                     <img src={EmailIcon} alt="Email Icon" className="h-5 w-5 rounded-full" />
//                 </div>
//             ),
//         },
//         { label: "Valid Until", key: "validUntil" },
//         { label: "Status", key: "status", alwaysShow: true,
//                      render: (status) => (
//                 <span
//                     className={`px-4 py-1 rounded-full text-primary ${
//                         status === "Inactive" ? "bg-red" : "bg-lightgreen"
//                     }`}
//                 >
//                     {status}
//                 </span>
//             ),
           

//          }, // Always visible
//         { label: "Action", key: "action", render: () => "...", alwaysShow: true }, // Always visible
//     ];
    

//     const dropdownOptions = [
//             {
//               selected: "All",
//               options: [
//                 { label: "Franchise Type", value: "All" },
//                 { label: "Type 1", value: "Type1" },
//                 { label: "Type 2", value: "Type2" },
//               ],
//               onChange: (value) => console.log("Selected:", value),
//             },
//             {
//               selected: "Newest",
//               options: [
//                 { label: "Newest", value: "Newest" },
//                 { label: "Oldest", value: "Oldest" },
//               ],
//               onChange: (value) => console.log("Sorting by:", value),
//             },
//           ];

//     // Handle page change
//     const handlePageChange = (newPage) => {
//         setCurrentPage(newPage);
//     };

//     return (
//         <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
//             {loading ? (
//                 <div className="flex justify-center items-center min-h-[70vh]">
//                     <p>Loading...</p>
//                 </div>
//             ) : (
//                 <>
//                     {/* <FranchiseeCard /> */}
//                     <FranchiseeCardDashboard />
//                     <FranchiseeTable
//                         columns={columns}
//                         data={franchiseeData}
//                         searchPlaceholder="Search by franchisee name"
//                         dropdownOptions={dropdownOptions}
//                         onAddEditClick={() => alert("Add/Edit Franchisee Type clicked")}
//                         onNewItemClick={() => alert("Add New Franchisee clicked")}
//                         currentPage={currentPage}
//                         totalItems={franchiseeData.length}
//                         itemsPerPage={itemsPerPage}
//                         handlePageChange={handlePageChange}
//                     />
//                 </>
//             )}
//         </div>
//     );
// };

// export default FranchiseeList;

import React, { useState, useEffect } from "react";
import FranchiseeTable from "../FranchiceeReuseableComponents/Franchiseetable";
import PhoneIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Phone.png";
import EmailIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Email.png";
import FranchiseeCardDashboard from "./FranchiseeCardDashboard";

const FranchiseeList = () => {
    const [franchiseeData, setFranchiseeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const DummyData = [
        {
            name: "Samanta William",
            id: "#123456789",
            revenue: "10,00,500",
            branches: 2,
            providers: 2,
            location: "Jakarta",
            validUntil: "March 25, 2023",
            status: "Inactive",
        },
        // More dummy data
    ];

    useEffect(() => {
        setTimeout(() => {
            setFranchiseeData(DummyData);
            setLoading(false);
        }, 1000);
    }, []);

    const columns = [
        {
            label: "Franchisee Name",
            key: "name",
            render: (name) => (
                <div className="hidden lg:table-cell">{name}</div>
            ),
        },
        {
            label: "ID",
            key: "id",
            render: (id) => (
                <div className="hidden lg:table-cell">{id}</div>
            ),
        },
        {
            label: "Revenue",
            key: "revenue",
            render: (revenue) => (
                <div className="hidden lg:table-cell">{revenue}</div>
            ),
        },
        {
            label: "Branches",
            key: "branches",
            render: (branches) => (
                <div className="hidden lg:table-cell">{branches}</div>
            ),
        },
        {
            label: "Service Providers",
            key: "providers",
            render: (providers) => (
                <div className="hidden lg:table-cell">{providers}</div>
            ),
        },
        {
            label: "Contact",
            key: "contact",
            render: () => (
                <div className="flex space-x-2 items-center hidden lg:table-cell">
                    <img src={PhoneIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
                    <img src={EmailIcon} alt="Email Icon" className="h-5 w-5 rounded-full" />
                </div>
            ),
        },
        {
            label: "Valid Until",
            key: "validUntil",
            render: (validUntil) => (
                <div className="hidden lg:table-cell">{validUntil}</div>
            ),
        },
        {
            label: "Status",
            key: "status",
            alwaysShow: true,
            render: (status) => (
                <span
                    className={`px-4 py-1 rounded-full text-primary ${
                        status === "Inactive" ? "bg-red" : "bg-lightgreen"
                    }`}
                >
                    {status}
                </span>
            ),
        },
        {
            label: "Action",
            key: "action",
            alwaysShow: true,
            render: () => "...",
        },
    ];

    const dropdownOptions = [
        {
            selected: "All",
            options: [
                { label: "Franchise Type", value: "All" },
                { label: "Type 1", value: "Type1" },
                { label: "Type 2", value: "Type2" },
            ],
            onChange: (value) => console.log("Selected:", value),
        },
        {
            selected: "Newest",
            options: [
                { label: "Newest", value: "Newest" },
                { label: "Oldest", value: "Oldest" },
            ],
            onChange: (value) => console.log("Sorting by:", value),
        },
    ];

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
            {loading ? (
                <div className="flex justify-center items-center min-h-[70vh]">
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <FranchiseeCardDashboard />
                    <FranchiseeTable
                        columns={columns}
                        data={franchiseeData}
                        searchPlaceholder="Search by franchisee name"
                        dropdownOptions={dropdownOptions}
                        onAddEditClick={() => alert("Add/Edit Franchisee Type clicked")}
                        onNewItemClick={() => alert("Add New Franchisee clicked")}
                        currentPage={currentPage}
                        totalItems={franchiseeData.length}
                        itemsPerPage={itemsPerPage}
                        handlePageChange={handlePageChange}
                    />
                </>
            )}
        </div>
    );
};

export default FranchiseeList;
