import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteModal from "../../adminComponents/CategorySubCategory/CategoryComponents/DeleteModal";
import { FiEdit } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { FaFile } from "react-icons/fa";

const NotificationListCard = () => {
  const Notifications = [
    {
      id: 1,
      head: "Distribution",
      body: "New distributor registered on your account",
      date: "January 25",
      type: "file",
    },
    {
      id: 2,
      head: "Sales",
      body: "Monthly sales report generated",
      date: "February 5",
      type: "info",
    },
    {
      id: 3,
      head: "Support",
      body: "Customer support ticket has been resolved",
      date: "March 10",
      type: "info",
    },
    {
      id: 4,
      head: "Inventory",
      body: "Low stock alert for Product X",
      date: "April 15",
      type: "announcement",
    },
    {
      id: 5,
      head: "Payment",
      body: "Payment received from Client Y",
      date: "May 20",
      type: "info",
    },
    {
      id: 6,
      head: "Order",
      body: "New order placed by Customer Z",
      date: "June 25",
      type: "file",
    },
    {
      id: 7,
      head: "Update",
      body: "System update available for version 1.2",
      date: "July 30",
      type: "info",
    },
    {
      id: 8,
      head: "User Feedback",
      body: "You have a new feedback from the user",
      date: "August 5",
      type: "announcement",
    },
    {
      id: 9,
      head: "System Warning",
      body: "Your account will be suspended due to inactivity",
      date: "September 12",
      type: "file",
    },
    {
      id: 10,
      head: "Feature Release",
      body: "A new feature has been added to your account.",
      date: "October 18",
      type: "info",
    },
  ];

  const [notifications, setNotifications] = useState(Notifications);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState(null);
  const [notificationToEdit, setNotificationToEdit] = useState(null);
  const [editedNotification, setEditedNotification] = useState({
    head: "",
    body: "",
    date: "",
  });

  const handleDelete = (id) => {
    setNotificationToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationToDelete
    );
    setNotifications(updatedNotifications);
    setShowDeleteModal(false);
  };

  const handleEdit = (notification) => {
    setNotificationToEdit(notification);
    setEditedNotification(notification);
    setShowEditModal(true);
  };

  const confirmEdit = () => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationToEdit.id
        ? { ...notification, ...editedNotification }
        : notification
    );
    setNotifications(updatedNotifications);
    setShowEditModal(false);
  };

  const formatDate = (dateString) => {
    return dateString; // Keep the date string as it is since it's already formatted.
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "info":
        return <IoNotifications className="text-white text-sm font-bold" />;
      case "announcement":
        return <GrAnnounce className="text-white text-sm font-bold" />;
      case "file":
        return <FaFile  className="text-white text-sm font-bold" />;
      default:
        return null;
    }
  };

  const getNotificationStyle = (type) => {
    switch (type) {
      case "info":
        return "bg-violet";
      case "announcement":
        return "bg-yellow"; // Ensure a proper color code for the announcement type
      case "file":
        return "bg-yellow"; // Adjust for file type
      default:
        return "";
    }
  };

  return (
    <div className="bg-green-50 h-screen flex justify-center items-center">
      <div className="shadow-xl rounded-2xl max-w-screen-lg w-full bg-white overflow-hidden">
        <h1 className="text-orange text-xl font-medium p-7">Notifications</h1>

        <div className="px-6 py-4">
          {notifications.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center w-full bg-gray-50 p-4 rounded-lg shadow-sm mb-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://picsum.photos/50"
                    className="rounded-full h-12 w-12"
                    alt="profile-img"
                  />
                  <div className={`absolute -top-1 -right-2 ${getNotificationStyle(data.type)} p-1 rounded-full flex items-center justify-center`}>
                    {getNotificationIcon(data.type)}
                  </div>
                </div>
                <div>
                  <h2 className="font-medium text-gray-800">{data.head}</h2>
                  <p className="text-sm text-id_gray">
                    {data.body} • {formatDate(data.date)}
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-3">
                <GoDotFill className="text-2xl max-sm:text-xl text-orange" />
                <div className="text-gray-400 hover:text-orange cursor-pointer">
                  <FiEdit
                    className="text-2xl max-sm:text-xl"
                    onClick={() => handleEdit(data)}
                  />
                </div>
                <div
                  className="text-gray-400 hover:text-orange cursor-pointer"
                  onClick={() => handleDelete(data.id)}
                >
                  <RiDeleteBin6Line className="text-2xl max-sm:text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the DeleteModal */}
      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-10">
          <div className="bg-blue_bg rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Edit Notification</h2>
            <input
              type="text"
              value={editedNotification.head}
              onChange={(e) =>
                setEditedNotification({
                  ...editedNotification,
                  head: e.target.value,
                })
              }
              className="border p-2 rounded mb-4 w-full"
              placeholder="Notification Head"
            />
            <textarea
              value={editedNotification.body}
              onChange={(e) =>
                setEditedNotification({
                  ...editedNotification,
                  body: e.target.value,
                })
              }
              className="border p-2 rounded mb-4 w-full"
              placeholder="Notification Body"
            />
            <input
              type="date"
              value={editedNotification.date}
              onChange={(e) =>
                setEditedNotification({
                  ...editedNotification,
                  date: e.target.value,
                })
              }
              className="border p-2 rounded mb-4 w-full"
            />
            <div className="flex justify-end">
              <button
                className="bg-lite_green text-white rounded-full px-4 py-2 mr-2"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-lite_red text-white rounded-full px-4 py-2"
                onClick={confirmEdit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationListCard;
