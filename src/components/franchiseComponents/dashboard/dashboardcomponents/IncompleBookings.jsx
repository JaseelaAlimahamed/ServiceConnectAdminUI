
import React, { useEffect, useState } from "react";
import { SlOptions } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";
import { getIncompleteBookingList } from "../../../../service/api/franchise/GetApi";

const bookings = [
    { customer_name: "Samantha W.", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Tony Soap", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Jordan Nico", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Karen Hope", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Nadila Adja", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Samantha W.", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Tony Soap", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
    { customer_name: "Samantha W.", id: "ID 123456789", service_provider : "user name", price: "$50,036" },
];

const IncompleteBookings = () => {

    const [bookingsConfig, setBookingsConfig] = useState([]);

    useEffect( () => {
        const fetchIncompleteBooking = async () =>{
            try {
                const bookingdata = await getIncompleteBookingList();
                setBookingsConfig(Array.isArray(bookingdata) ? bookingdata : []);
            } catch (error) {
                console.error(error,"Failed to fetch Incomplete Booking");
                setBookingsConfig([]);
            }
        }; 
        fetchIncompleteBooking();
    },[]);
    //console.log(bookingsConfig,"booking config");

    const [activeMenu, setActiveMenu] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    // Get current items based on pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = bookingsConfig.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(bookingsConfig.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => {
        if(pageNumber >= 1 && pageNumber <= totalPages){
            setCurrentPage(pageNumber);
        }
    };

    //set pagination range (3)
    const getPaginationRange = () => {
        const range = [];
        const start = Math.max(1, currentPage - 1);
        const end = Math.min(totalPages, currentPage + 1);

        for (let i=start; i<=end; i++){
            range.push(i);
        }
        return range
    };

    const toggleMenu = (index) => {
        if (activeMenu === index) {
          setActiveMenu(null);
        } else {
          setActiveMenu(index);
        }
    };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-[#303972]">Incomplete Bookings</h2>
        <ul>
            {currentItems.map((booking, index) => (
            <li
                key={index}
                className="flex justify-between items-center py-2 "
            >
                <div className="flex items-center  space-x-4">
                    <span className="bg-[#C1BBEB] h-10 w-10 rounded-full flex items-center justify-center">
                        { booking.customer_name[0]}
                    </span>
                </div>

                <div className="grid items-center sm:gap-12 sm:flex">
                    <span className="text-sm font-bold text-[#303972] space-x-4">{booking.customer_name}</span>
                
                    <span className=" text-sm font-bold text-[#4D44B5] space-x-4">{booking.booking_id}</span>
                </div>                                              

                <div className="flex items-center space-x-4">
                    <span className=" bg-[#FB7D5B] text-white h-10 w-10 rounded-full flex items-center justify-center">
                        <FaRegUser /> 
                    </span>  
                    <span className="text-sm hidden text-[#A098AE] sm:block">{booking.service_provider}</span>                                    
                </div>

                <div className="">
                        <span className="text-sm font-bold text-[#303972]">{booking.price}</span>
                </div>

                <div className="flex relative items-start flex-col">
                    <span className="p-2">
                        <button className="text-[#A098AE]" onClick={() => toggleMenu(index)}><SlOptions /></button>
                    </span>
                        {
                            activeMenu === index && (
                                <div className="absolute right-0 top-5 mt-1 w-36 bg-white rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    Edit
                                    </li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    Delete
                                    </li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    View
                                    </li>
                                </ul>
                            </div>
                        )}
                </div>

            </li>
            ))}
        </ul>

        <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-500">
            Showing {indexOfFirstItem + 1}-
            {indexOfLastItem > bookingsConfig.length
                ? bookingsConfig.length
                : indexOfLastItem}{" "}
            of {bookingsConfig.length} data
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
                getPaginationRange().map((page, index) => (
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
    </div>
  );
};

export default IncompleteBookings;
