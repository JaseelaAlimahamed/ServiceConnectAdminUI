import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems,Mainicon } from "./sidebarComponents";
import { IoMdClose } from "react-icons/io";

  const Sidebar = ({isOpen, toggleSidebar}) => {
    const [activeItem, setActiveItem] = useState("Dashboard");
    // const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
  
    // Toggle the sidebar on smaller screens
    // const toggleSidebar = () => {
    //   setIsOpen(!isOpen);
    // };
  
    return (
      <div className="relative ">
        {/* Toggle Button */}
        {/* <button
          className="md:hidden text-white p-3 fixed top-4 left-4 z-50 hover:border-none focus:outline-none "
          onClick={toggleSidebar}
          
        >
          {isOpen ? (
            <svg
            width="40"
            height="40" 
          >  
          </svg>
          ) : (<div className="flex items-center justify-between ">
          <Mainicon/>
          <SlMenu className="text-violet ml-1"/>
          </div>
            
          )}
          
        </button> */}
        
  
        <div
          className={` ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 overflow-y-auto h-full w-64 bg-violet transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:w-64 flex-col justify-between pl-5 py-5`}
        >
          <div className="relative flex items-center mb-10">
            <div>
            <Mainicon/>
            </div>
            <div className="ml-3 text-white font-heading font-bold text-2xl">SC</div>
            <button className="absolute right-0 top-0 z-10 h-15 w-15 md:hidden" onClick={toggleSidebar}>
          <IoMdClose className="text-primary w-6 h-6"/>

        </button>
          </div>
  
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`flex items-center p-3 cursor-pointer rounded-bl-full rounded-tl-full w-full transition-all ${
                  activeItem === item.name ? "bg-primary text-violet" : "text-white"
                }`}
                onClick={() => setActiveItem(item.name)}
              ><Link to={item.to} className="flex items-center w-full">
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
                </Link>
              </li>
            ))}
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