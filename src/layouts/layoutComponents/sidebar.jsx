import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { admin } from "../MenuItems/Admin.jsx";
import { dealer } from "../MenuItems/Dealer.jsx";
import { franchise } from "../MenuItems/Franchise.jsx";
import { MainIcon } from "../../components/reUsableComponents/MainIcon.jsx";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  
  // Extract basePath and path from the current location
  const basePath = location.pathname.split("/")[1];
  const path = location.pathname.split("/")[2];
   
  
  // Set activeItem based on current path
  const [activeItem, setActiveItem] = useState(path);

  // Update activeItem when location changes
  useEffect(() => {
    setActiveItem(path);
  }, [path]);

  // Determine which menu items to show based on the basePath
  const menuItems = basePath === "admin" ? admin : basePath === "dealer" ? dealer : franchise;

  return (
    <div className="relative">
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 overflow-y-auto h-full w-[300px] bg-violet transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:w-64 flex-col justify-between pl-5 py-5`}
      >
        <div className="relative flex items-center mb-10">
          <div>
            <MainIcon />
          </div>
          <div className="ml-3 text-white font-heading font-bold text-2xl">
            SC 
          </div>
          <button
            className="absolute right-0 top-0 z-10 h-15 w-15 md:hidden"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <IoMdClose className="text-primary w-6 h-6" />
          </button>
        </div>

        <ul className="space-y-1 ">
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((item) => (
              <Link
                to={`/${basePath}/${item.to}`}
                key={item.name}
                className={`flex items-center p-3 cursor-pointer rounded-bl-full rounded-tl-full w-full transition-all ${
                  activeItem === item.to ? "bg-primary text-violet" : "text-white"
                }`}
                onClick={() => setActiveItem(item.to)}
              >
                <li className="flex items-center w-full">
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              </Link>
            ))
          ) : (
            <li className="text-white">No menu items available.</li>
          )}
        </ul>

        <div className="mt-9 text-white">
          <p className="font-bold">Service Connect</p>
          <p>Let’s Grow Together</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
