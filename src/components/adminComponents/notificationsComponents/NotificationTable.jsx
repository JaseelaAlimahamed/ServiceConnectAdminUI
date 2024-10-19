import React from "react";
import { FiEdit } from "react-icons/fi";
import avtar1 from "../../../assets/AdminAssets/Avatar1.jpeg";
import avtar2 from "../../../assets/AdminAssets/Avatar2.jpeg";
import { FaBell } from "react-icons/fa";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const notifications = [
  {
    title: "Distribution",
    project: "DesignDrops",
    date: "Mar 4",
    avatar: `${avtar2}`,
    status: false,
  },
  {
    title: "Assignments: 5 items overdue",
    project: "Basecamp",
    date: "Mar 3",
    avatar: `${avtar1}`,
    status: true,
  },
  {
    title: "Overdue by a week: Schedule first meeting...",
    project: "DesignDrops",
    date: "Feb 24",
    avatar: `${avtar2}`,
    status: true,
  },
  {
    title: "Distribution",
    project: "DesignDrops",
    date: "Mar 4",
    avatar: `${avtar2}`,
    status: true,
  },
];

const NotificationList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 md:p-12">
      <h2 className="font-bold text-lg md:text-[1.25rem] text-orange mb-4">
        Notifications
      </h2>

      {notifications.map((notification, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-2  border-gray-200"
        >
          <div className="flex items-start md:items-center w-full">
            <div className="relative">
              <img
                src={notification.avatar}
                alt=""
                className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover"
              />
              <div className="absolute top-0 right-0">
                <FaBell className="text-white text-sm md:text-1xl bg-blue-700 rounded-full p-1 shadow-lg" />
              </div>
            </div>

            <div className="pl-4">
              <p className="font-medium text-sm md:text-base">
                {notification.title}
              </p>
              <span className="text-gray-500 text-xs md:text-sm">
                {notification.project} • {notification.date}
              </span>
            </div>
          </div>

          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            {/* Status indicator */}
            <div
  className={`w-3 h-3 rounded-full ${notification.status ? 'bg-orange' : 'bg-green-500'}`}
></div>


            {/* Edit and delete buttons */}
            <button className="text-gray-500 hover:text-gray-700">
              <FaRegEdit size={"1.25rem"} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <FaRegTrashAlt size={"1.25rem"} />
            </button>
          </div>
        </div>
      ))}

      {/* Show more button */}
      <div className="flex justify-between items-center mt-4">
        <h5 className="font-semibold text-sm md:text-base">
          Previous notifications
        </h5>
        <button className="font-semibold text-sm md:text-base text-blue-500 hover:underline">
          Show more
        </button>
      </div>
    </div>
  );
};

export default NotificationList;
