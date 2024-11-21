import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line, RiDeleteBin6Line } from "react-icons/ri";

import { BiSolidEdit } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";

const PayoutScheduleTable = ({ schedules }) => {
  return (
    <div className="p-6 bg-white font-inter shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-orange mb-4 mt-7">
        Payment Schedules
      </h2>
      <div className="">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-1 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-4 ">
              <div className="relative">
                <img
                  src={schedule.icon}
                  alt="Icon"
                  className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
                />
                <div className="absolute top-0 right-0">
                  <FaBell className="text-white text-sm md:text-1xl bg-blue-700 rounded-full p-1 shadow-lg" />
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800">{schedule.name}</h3>
                <span className="flex text-sm text-medium_dark_gray">
                  <p className="">{schedule.type} </p>
                  {schedule.date && <p className="pl-1 "> • {schedule.date}</p>}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-rose-500 w-2 h-2 rounded-2xl mt-1"></div>
              <button className=" hover:text-blue-600">
                <BiSolidEdit />
              </button>
              <button className=" hover:text-red">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutScheduleTable;
