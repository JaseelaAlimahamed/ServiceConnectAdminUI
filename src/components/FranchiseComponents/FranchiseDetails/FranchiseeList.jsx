// import React, { useState, useEffect } from "react";
// import FranchiseeTable from "../FranchiceeReuseableComponents/Franchiseetable";
// import PhoneIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Phone.png";
// import EmailIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Email.png";
// import FranchiseeCard from "../FranchiceeReuseableComponents/FranchiseeCard";
// import VectorIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Vector.png";

// const FranchiseeList = () => {
//   // State to store franchisee data
//   const [franchiseeData, setFranchiseeData] = useState([]);
//   const [loading, setLoading] = useState(true); // State to manage loading indicator

//   // Dummy data that simulates backend response
//   const DummyData = [
//     {
//       name: "Samanta William",
//       id: "#123456789",
//       revenue: "10,00,500",
//       branches: 2,
//       providers: 2,
//       location: "Jakarta",
//       validUntil: "March 25, 2023",
//       status: "Inactive",
//     },
//   ];

//   // useEffect hook to simulate fetching data from an API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setTimeout(() => {
//           setFranchiseeData(DummyData); // Set the dummy data as the franchisee data
//           setLoading(false); // Once data is set, stop showing the loading spinner
//         }, 1000); // Simulate a delay of 1 second
//       } catch (error) {
//         console.error("Error fetching franchisee data:", error);
//       }
//     };

//     fetchData(); // Call fetchData when component mounts
//   }, []); // Empty dependency array ensures this runs once

//   // Define the table columns and the way data is displayed
//   const columns = [
//     { label: "Franchisee Name", key: "name" },
//     { label: "ID", key: "id" },
//     { label: "Revenue", key: "revenue" },
//     { label: "Branches", key: "branches" },
//     { label: "Service Providers", key: "providers" },
//     {
//       label: "Contact",
//       key: "contact",
//       render: (contact) => (
//         <div className="flex space-x-2 items-center">
//           <img src={PhoneIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
//           <img src={EmailIcon} alt="Email Icon" className="h-5 w-5 rounded-full" />
//         </div>
//       ),
//     },
//     { label: "Valid Until", key: "validUntil" },
//     {
//       label: "Status",
//       key: "status",
//       render: (status) => (
//         <span
//           className={`px-4 py-1 rounded-full text-primary ${
//             status === "Inactive" ? "bg-red" : "bg-green"
//           }`}
//         >
//           {status}
//         </span>
//       ),
//     },
//     { label: "Action", key: "action", render: () => "..." }, // Action column placeholder
//   ];

//   // Dropdown options for filtering and sorting
//   const dropdownOptions = [
//     {
//       selected: "All",
//       options: [
//         { label: "Franchise Type", value: "All" },
//         { label: "Type 1", value: "Type1" },
//         { label: "Type 2", value: "Type2" },
//       ],
//       onChange: (value) => console.log("Selected:", value),
//     },
//     {
//       selected: "Newest",
//       options: [
//         { label: "Newest", value: "Newest" },
//         { label: "Oldest", value: "Oldest" },
//       ],
//       onChange: (value) => console.log("Sorting by:", value),
//     },
//   ];

//   // Pagination configuration
//   const paginationInfo = {
//     currentPage: 1,
//     totalPages: 3,
//     render: (paginationInfo) => (
//         <div className="flex space-x-2 items-center">
//           <img src={VectorIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
          
//         </div>
//       ),
//   };

//   // Function to handle pagination
//   const handlePageChange = (pageNumber) => {
//     console.log("Current page:", pageNumber);
//   };

//   // Show loading message until data is fetched
//   if (loading) {
//     return <div>Loading franchisees...</div>; // Display loading state
//   }

//   return (
//     <div className="p-4">
//       {/* Franchisee summary card */}
//       <FranchiseeCard />
      
//       {/* Reusable Table Component */}
//       <FranchiseeTable
//         columns={columns}
//         data={franchiseeData}
//         searchPlaceholder="Search franchisees..."
//         dropdownOptions={dropdownOptions}
//         onAddEditClick={() => console.log("Add/Edit Franchisee Type clicked")}
//         onNewItemClick={() => console.log("New Franchisee clicked")}
//         onSortChange={(value) => console.log("Sort changed to:", value)}
//         paginationInfo={paginationInfo}
//         handlePageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default FranchiseeList;



import React, { useState, useEffect } from "react";
import FranchiseeTable from "../FranchiceeReuseableComponents/Franchiseetable";
import PhoneIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Phone.png";
import EmailIcon from "../../FranchiseComponents/FranchiceeReuseableComponents/FranchiseeIcons/Email.png";
import FranchiseeCard from "../FranchiceeReuseableComponents/FranchiseeCard";

const FranchiseeList = () => {
    // State to store franchisee data
    const [franchiseeData, setFranchiseeData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set the number of items per page

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
        // Add more dummy data here as needed
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTimeout(() => {
                    setFranchiseeData(DummyData);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error("Error fetching franchisee data:", error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { label: "Franchisee Name", key: "name" },
        { label: "ID", key: "id" },
        { label: "Revenue", key: "revenue" },
        { label: "Branches", key: "branches" },
        { label: "Service Providers", key: "providers" },
        {
            label: "Contact",
            key: "contact",
            render: () => (
                <div className="flex space-x-2 items-center">
                    <img src={PhoneIcon} alt="Phone Icon" className="h-5 w-5 text-primary rounded-full" />
                    <img src={EmailIcon} alt="Email Icon" className="h-5 w-5 rounded-full" />
                </div>
            ),
        },
        { label: "Valid Until", key: "validUntil" },
        {
            label: "Status",
            key: "status",
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
        { label: "Action", key: "action", render: () => "..." },
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

    // Handle page change
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
                    <FranchiseeCard />
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

