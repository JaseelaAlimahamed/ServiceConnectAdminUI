import React from "react";
import { FaBell } from "react-icons/fa"; // Example small icon, can use others

const notifications = [
  {
    id: 1,
    title: "New Message",
    dateTime: "2024-10-10 09:30 AM",
    description: "You have a new message from John.",
  },
  {
    id: 2,
    title: "System Update",
    dateTime: "2024-10-09 11:00 AM",
    description: "Your system will undergo an update at midnight.",
  },
  {
    id: 3,
    title: "Event Reminder",
    dateTime: "2024-10-08 03:45 PM",
    description: "Don't forget the team meeting tomorrow at 10:00 AM.",
  },
  {
    id: 1,
    title: "New Message",
    dateTime: "2024-10-10 09:30 AM",
    description: "You have a new message from John.",
  },
  {
    id: 2,
    title: "System Update",
    dateTime: "2024-10-09 11:00 AM",
    description: "Your system will undergo an update at midnight.",
  },
  {
    id: 3,
    title: "Event Reminder",
    dateTime: "2024-10-08 03:45 PM",
    description: "Don't forget the team meeting tomorrow at 10:00 AM.",
  },
  {
    id: 1,
    title: "New Message",
    dateTime: "2024-10-10 09:30 AM",
    description: "You have a new message from John.",
  },
  {
    id: 2,
    title: "System Update",
    dateTime: "2024-10-09 11:00 AM",
    description: "Your system will undergo an update at midnight.",
  },
  {
    id: 3,
    title: "Event Reminder",
    dateTime: "2024-10-08 03:45 PM",
    description: "Don't forget the team meeting tomorrow at 10:00 AM.",
  },
];

const FranchiseNotification = () => {
  return (
    
        <div className="container mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-md min-h-screen mt-6 flex flex-col">
          <h2 className="text-2xl font-bold text-lite_orange mb-6">Notifications</h2>
          <ul className="space-y-4 flex-grow overflow-y-auto">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-start p-4 border rounded-lg bg-gray-100 shadow-sm"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mr-4">
                  <FaBell className="text-indigo-600 w-6 h-6" />
                </div>
    
                {/* Notification Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-dark_blue">
                      {notification.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {notification.dateTime}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {notification.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      
    
  );
};

export default FranchiseNotification;
