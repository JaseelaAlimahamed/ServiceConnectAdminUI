import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { FaFile } from "react-icons/fa";

const NotificationListCard = () => {
  // Notification array with image URLs included
  const Notifications = [
    {
      id: 1,
      head: "Distribution",
      body: "New distributor registered on your account",
      date: "January 25",
      type: "file",
      image: "https://picsum.photos/50?1",
    },
    {
      id: 2,
      head: "Sales",
      body: "Monthly sales report generated",
      date: "February 5",
      type: "info",
      image: "https://picsum.photos/50?2",
    },
    {
      id: 3,
      head: "Support",
      body: "Customer support ticket has been resolved",
      date: "March 10",
      type: "info",
      image: "https://picsum.photos/50?3",
    },
    {
      id: 4,
      head: "Inventory",
      body: "Low stock alert for Product X",
      date: "April 15",
      type: "announcement",
      image: "https://picsum.photos/50?4",
    },
    {
      id: 5,
      head: "Payment",
      body: "Payment received from Client Y",
      date: "May 20",
      type: "info",
      image: "https://picsum.photos/50?5",
    },
    {
      id: 6,
      head: "Order",
      body: "New order placed by Customer Z",
      date: "June 25",
      type: "file",
      image: "https://picsum.photos/50?6",
    },
    {
      id: 7,
      head: "Update",
      body: "System update available for version 1.2",
      date: "July 30",
      type: "info",
      image: "https://picsum.photos/50?7",
    },
    {
      id: 8,
      head: "User Feedback",
      body: "You have new feedback from the user",
      date: "August 5",
      type: "announcement",
      image: "https://picsum.photos/50?8",
    },
    {
      id: 9,
      head: "System Warning",
      body: "Your account will be suspended due to inactivity",
      date: "September 12",
      type: "file",
      image: "https://picsum.photos/50?9",
    },
    {
      id: 10,
      head: "Feature Release",
      body: "A new feature has been added to your account",
      date: "October 18",
      type: "info",
      image: "https://picsum.photos/50?10",
    },
    {
      id: 11,
      head: "New Offer",
      body: "You have a new promotional offer",
      date: "October 25",
      type: "info",
      image: "https://picsum.photos/50?11",
    },
    {
      id: 12,
      head: "Billing Issue",
      body: "Your recent invoice has an issue",
      date: "October 30",
      type: "file",
      image: "https://picsum.photos/50?12",
    },
    {
      id: 13,
      head: "Security Alert",
      body: "Unusual login detected on your account",
      date: "November 3",
      type: "announcement",
      image: "https://picsum.photos/50?13",
    },
    {
      id: 14,
      head: "Holiday Notification",
      body: "Office will be closed for the upcoming holiday",
      date: "December 20",
      type: "announcement",
      image: "https://picsum.photos/50?14",
    },
    {
      id: 15,
      head: "Account Update",
      body: "Your profile information has been updated",
      date: "December 25",
      type: "info",
      image: "https://picsum.photos/50?15",
    },
  ];
  

  const [activeNotification, setActiveNotification] = useState(null);
  const [seenNotifications, setSeenNotifications] = useState([]);
  const [displayCount, setDisplayCount] = useState(7); // Default to 7 notifications

  const handleSeenNotification = (id) => {
    setActiveNotification((prevActive) => (prevActive === id ? null : id));
    setSeenNotifications((prevSeen) => {
      if (!prevSeen.includes(id)) {
        return [...prevSeen, id];
      }
      return prevSeen;
    });
  };

  const formatDate = (dateString) => {
    return dateString;
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "info":
        return <IoNotifications className="text-white text-sm font-bold" />;
      case "announcement":
        return <GrAnnounce className="text-white text-sm font-bold" />;
      case "file":
        return <FaFile className="text-white text-sm font-bold" />;
      default:
        return null;
    }
  };

  const getNotificationStyle = (type) => {
    switch (type) {
      case "info":
        return "bg-violet";
      case "announcement":
        return "bg-yellow";
      case "file":
        return "bg-yellow";
      default:
        return "";
    }
  };

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 12); // Increase the displayed rows by 12 on each click
  };

  return (
    <div className="p-10 flex justify-center items-center">
      <div className="shadow-xl rounded-2xl max-w-screen-lg w-full bg-white overflow-hidden">
        <h1 className="text-orange text-xl font-medium p-7">Notifications</h1>

        <div className="px-6 py-4">
          {Notifications.slice(0, displayCount).map((data) => {
            const isActive = activeNotification === data.id;

            return (
              <div
                key={data.id}
                onClick={() => handleSeenNotification(data.id)}
                className={`flex justify-between max-sm:p-0 w-full bg-gray-50 p-4 rounded-lg shadow-sm mb-4 cursor-pointer 
                  transition-transform duration-300 ease-in-out ${
                    isActive ? "scale-105 !shadow-md" : "scale-100"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={data.image}
                      className="rounded-full h-12 w-12"
                      alt="profile-img"
                    />
                    <div
                      className={`absolute -top-1 -right-2 ${getNotificationStyle(
                        data.type
                      )} p-1 rounded-full flex items-center justify-center`}
                    >
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
                  {!seenNotifications.includes(data.id) && (
                    <GoDotFill className="text-2xl max-sm:text-xl text-orange" />
                  )}
                </div>
              </div>
            );
          })}

          {/* Show More Button */}
          {displayCount < Notifications.length && (
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleShowMore}
                className="cursor-pointer text-id_gray font-semibold text-sm"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationListCard;
