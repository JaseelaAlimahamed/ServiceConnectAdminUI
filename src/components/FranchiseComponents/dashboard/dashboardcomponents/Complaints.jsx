
import React, { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";

const complaints = [
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM" },
  { id: "#123343389", status: "Pending", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Pending", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM" },
  { id: "#123456789", status: "Pending", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Pending", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Canceled", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM" },
  { id: "#123456789", status: "Pending", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM"  },
  { id: "#123456789", status: "Complete", amount: "$50,036", date: "2 March 2021, 13:45 PM" },
];

const statusStyles = {
  Complete: "text-[#4CBC9A]",
  Pending: "text-[#A098AE]",
  Canceled: "text-[#FF4550]",
};

const Complaints = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    // Get current items based on pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = complaints.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(complaints.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => {
        if(pageNumber >= 1 && pageNumber <= totalPages){
            setCurrentPage(pageNumber);
        }
    };

    //set pagenation range (3)
    const getPaginatinRange = () => {
        const range = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        for (let i=start; i<=end; i++){
            range.push(i);
        }
        return range
    };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-[#303972] mb-4">Complaints</h2>
      <ul>
        {currentItems.map((complaint, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2"
          >
            <div className="flex items-center space-x-4">
                <span className="bg-[#FF4550] text-white h-10 w-10 rounded-full flex items-center justify-center">
                    <FaArrowTrendUp />
                </span>
                <div>
                    <span className="block text-[#303972] text-sm font-bold">
                        {complaint.id}
                    </span>
                    <span className="text-xs hidden sm:block text-[#A098AE]">
                        {complaint.date}
                    </span>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <span className="text-sm font-bold text-[#303972] ">{complaint.amount}</span>
            </div>
            <div className="flex items-center space-x-2 text-center">
                <span className={`text-sm font-semibold items-center ${statusStyles[complaint.status]}`}>
                    {complaint.status}
                </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-500">
            Showing {indexOfFirstItem + 1}-
            {indexOfLastItem > complaints.length
                ? complaints.length
                : indexOfLastItem}{" "}
            of {complaints.length} data
            </p>

            <div className="flex space-x-2">

            <button
                onClick={() => paginate(currentPage-1)}
                disabled={currentPage === 1}
                className={`px-2 py-1 text-xs ${
                    currentPage === 1 ? "text-gray-300" : "text-gray-700"
                }`}>
                <IoMdArrowDropleft />
            </button> 

            {/*Pagination buttons */}
            {
            getPaginatinRange().map((page, index) => (
                <button
                key={index}
                onClick={() => paginate(page)}
                className={`px-2 py-1 text-xs ${
                    page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } rounded-full`}
                >
                {page}
                </button>
            ))}

            <button
                onClick={() => paginate(currentPage+1)}
                disabled={currentPage === totalPages}
                className={`px-2 py-1 text-xs ${
                    currentPage === totalPages ? "text-gray-300" : "text-gray-700"
                }`}>
                <IoMdArrowDropright />
            </button>
            </div>
        </div>

    {/* 
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-500">Showing 1-5 from 100 data</p>
        <div className="flex space-x-2">
          <button className="text-xs">1</button>
          <button className="text-xs">2</button>
          <button className="text-xs">3</button>
        </div>
      </div>*/}


    </div>
  );
};

export default Complaints;
