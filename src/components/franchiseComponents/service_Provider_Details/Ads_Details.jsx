import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineEllipsis,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai"; 
import { LuArrowUpRight } from "react-icons/lu";

const AdsCard = () => {
  const ads = [
    "Home Services",
    "Health & Wellness",
    "Automotive Services",
    "Education & Tutoring",
    "Business Services",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#303972] ">Ads</h2>
      </div>
      <div className="space-y-4">
        {ads.map((service, index) => (
          <AdsItem key={index} name={service} />
        ))}
      </div>
    </div>
  );
};

const AdsItem = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MenuItem = ({ icon: Icon, text, onClick }) => (
    <button
      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      onClick={onClick}
    >
      <Icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
      {text}
    </button>
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-[#C1BBEB] rounded-lg"></div>
        <span className="font-poppins text-lg font-bold text-left text-[#303972]">
          {name}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-8">
            <svg viewBox="0 0 80 40" className="w-full h-full">
              <rect x="0" y="15" width="7" height="25" fill="#4D44B5" rx="2" />
              <rect x="18" y="5" width="7" height="35" fill="#4D44B5" rx="2" />
              <rect x="36" y="0" width="7" height="40" fill="#4D44B5" rx="2" />
              <rect x="54" y="10" width="7" height="30" fill="#4D44B5" rx="2" />
            </svg>
          </div>
          <div className="text-start">
            <p className="font-bold text-[#303972]">1,456</p>
            <p className="text-xs text-[#A098AE]">Total Reach</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LuArrowUpRight size={34} className="text-[#4D44B5]" />
          <div className="text-start">
            <p className="font-bold text-[#303972]">26%</p>
            <p className="text-xs text-[#A098AE]">Clicks</p>
          </div>
        </div>

        <div className="relative" ref={menuRef}>
          <AiOutlineEllipsis
            size={24}
            className="text-[#A098AE] cursor-pointer"
            onClick={toggleMenu}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <MenuItem
                  icon={AiOutlineEdit}
                  text="Edit"
                  onClick={() => {
                    console.log("Edit clicked");
                    setIsMenuOpen(false);
                  }}
                />
                <MenuItem
                  icon={AiOutlineDelete}
                  text="Delete"
                  onClick={() => {
                    console.log("Delete clicked");
                    setIsMenuOpen(false);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
