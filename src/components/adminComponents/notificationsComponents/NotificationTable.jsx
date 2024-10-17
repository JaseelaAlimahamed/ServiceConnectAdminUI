import React from 'react';
import { FiEdit } from "react-icons/fi";
import avtar from '../../../assets/AdminAssets/Avatar.svg'


import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";


const notifications = [
  {
    title: "Distribution",
    project: "DesignDrops",
    date: "Mar 4",
    status: "false",
  },
  {
    title: "Assignments: 5 items overdue",
    project: "Basecamp",
    date: "Mar 3",
    status: "true",
  },
  {
    title: "Overdue by a week: Schedule first meeting...",
    project: "DesignDrops",
    date: "Feb 24",
    status: "true",
  },
  
];

const NotificationList = () => {
  return (
    <div className="bg-white  rounded-2xl shadow-md p-12">
      <h2 className="font-bold text-[1rem]  text-orange mb-4">Notifications</h2>

      {notifications.map((notification, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-2  pb-2 "
        >
          <div className='flex'>
           
            <img src={avtar} alt="" />
           
           <div>
           <p className="font-medium pl-2">{notification.title}</p>
           <span className="text-gray-500 text-sm pl-2 ">
              {notification.project} • {notification.date}
            </span>

           </div>
            
          </div>

          <div className="flex items-center space-x-2">
            {/* Status indicator */}
            <div
              className={`w-3 h-3 rounded-full ${
                notification.status === 'true'
                  ? " orange"
                  : "bg-green-500"
              }`}
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
      <div className='flex'>
      <h5 className='font-semibold'>Previous notification</h5>
      <button className="font-semibold ml-auto">Show more</button>
      </div>
    </div>
  );
};

export default NotificationList;
