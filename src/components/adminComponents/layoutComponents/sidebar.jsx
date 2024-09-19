import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../../layouts/sidebarComponents";

  

  const Sidebar = () => {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(false); // State for sidebar toggle
  
    // Toggle the sidebar on smaller screens
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        {/* Toggle Button */}
        <button
          className="sm:hidden text-white p-3 fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
          
        >
          {isOpen ? (
            <svg
            width="40"
            height="40" 
          >  
          </svg>
          ) : (
            <svg
            width="40"
            height="40"
            viewBox="0 0 48 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="3" width="48" height="48" rx="16" fill="#FB7D5B" />
            <path
              d="M22.376 40.252C20.528 40.252 18.872 39.952 17.408 39.352C15.944 38.752 14.768 37.864 13.88 36.688C13.016 35.512 12.56 34.096 12.512 32.44H19.064C19.16 33.376 19.484 34.096 20.036 34.6C20.588 35.08 21.308 35.32 22.196 35.32C23.108 35.32 23.828 35.116 24.356 34.708C24.884 34.276 25.148 33.688 25.148 32.944C25.148 32.32 24.932 31.804 24.5 31.396C24.092 30.988 23.576 30.652 22.952 30.388C22.352 30.124 21.488 29.824 20.36 29.488C18.728 28.984 17.396 28.48 16.364 27.976C15.332 27.472 14.444 26.728 13.7 25.744C12.956 24.76 12.584 23.476 12.584 21.892C12.584 19.54 13.436 17.704 15.14 16.384C16.844 15.04 19.064 14.368 21.8 14.368C24.584 14.368 26.828 15.04 28.532 16.384C30.236 17.704 31.148 19.552 31.268 21.928H24.608C24.56 21.112 24.26 20.476 23.708 20.02C23.156 19.54 22.448 19.3 21.584 19.3C20.84 19.3 20.24 19.504 19.784 19.912C19.328 20.296 19.1 20.86 19.1 21.604C19.1 22.42 19.484 23.056 20.252 23.512C21.02 23.968 22.22 24.46 23.852 24.988C25.484 25.54 26.804 26.068 27.812 26.572C28.844 27.076 29.732 27.808 30.476 28.768C31.22 29.728 31.592 30.964 31.592 32.476C31.592 33.916 31.22 35.224 30.476 36.4C29.756 37.576 28.7 38.512 27.308 39.208C25.916 39.904 24.272 40.252 22.376 40.252Z"
              fill="white"
            />
          </svg>
          )}
        </button>
  
        {/* Sidebar */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 h-full w-64 bg-violet transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:flex md:w-64 flex-col justify-between pl-5 py-5`}
        >
          <div className="flex items-center mb-10">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="3" width="48" height="48" rx="16" fill="#FB7D5B" />
                <path
                  d="M22.376 40.252C20.528 40.252 18.872 39.952 17.408 39.352C15.944 38.752 14.768 37.864 13.88 36.688C13.016 35.512 12.56 34.096 12.512 32.44H19.064C19.16 33.376 19.484 34.096 20.036 34.6C20.588 35.08 21.308 35.32 22.196 35.32C23.108 35.32 23.828 35.116 24.356 34.708C24.884 34.276 25.148 33.688 25.148 32.944C25.148 32.32 24.932 31.804 24.5 31.396C24.092 30.988 23.576 30.652 22.952 30.388C22.352 30.124 21.488 29.824 20.36 29.488C18.728 28.984 17.396 28.48 16.364 27.976C15.332 27.472 14.444 26.728 13.7 25.744C12.956 24.76 12.584 23.476 12.584 21.892C12.584 19.54 13.436 17.704 15.14 16.384C16.844 15.04 19.064 14.368 21.8 14.368C24.584 14.368 26.828 15.04 28.532 16.384C30.236 17.704 31.148 19.552 31.268 21.928H24.608C24.56 21.112 24.26 20.476 23.708 20.02C23.156 19.54 22.448 19.3 21.584 19.3C20.84 19.3 20.24 19.504 19.784 19.912C19.328 20.296 19.1 20.86 19.1 21.604C19.1 22.42 19.484 23.056 20.252 23.512C21.02 23.968 22.22 24.46 23.852 24.988C25.484 25.54 26.804 26.068 27.812 26.572C28.844 27.076 29.732 27.808 30.476 28.768C31.22 29.728 31.592 30.964 31.592 32.476C31.592 33.916 31.22 35.224 30.476 36.4C29.756 37.576 28.7 38.512 27.308 39.208C25.916 39.904 24.272 40.252 22.376 40.252Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-3 text-white font-heading font-bold text-2xl">SC</div>
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