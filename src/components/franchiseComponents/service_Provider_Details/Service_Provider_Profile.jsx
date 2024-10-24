import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiUser } from "react-icons/hi";

const ProfileCard = ({
  name,
  work,
  rating,
  address,
  phone,
  email,
  profilePicture,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-full h-[498px] mx-auto overflow-hidden">
      {/* Top Section with Background and Floating Shapes */}
      <div className="relative bg-[#4D44B5] h-[156px]">
        {/* Floating Shapes */}
        <div className="absolute right-32 top-24 w-[120px] h-[60px] bg-[#FB7D5B] rounded-tl-lg rounded-tr-lg"></div>
        <div className="absolute right-8 top-20 w-[150px] h-[76px] bg-[#FCC43E] rounded-tl-lg rounded-tr-lg"></div>
      </div>

      {/* Profile Info Section */}
      <div className="relative -mt-20 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-start flex-col">
            {/* Profile Picture */}
            <img
              src={profilePicture}
              alt={`${name}'s Profile`}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="ml-2 mt-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-[#303972]">{name}</h2>
                <div className="flex items-center">
                  <FaStar
                    className="text-[#FCC43E] w-6 h-6 mr-1"
                    fill="#FCC43E"
                  />
                  <span className="text-xl font-semibold text-[#303972]">
                    {rating}
                  </span>
                </div>
              </div>
            </div>
            <p className="ml-2 text-xl text-[#A098AE] mt-2">{work}</p>
          </div>

          <div className="relative" ref={menuRef}>
            <AiOutlineEllipsis
              size={24}
              className="text-[#A098AE] cursor-pointer"
              onClick={toggleMenu}
            />{" "}
            {/* Using react-icons */}
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

      <div className="mt-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
        <div>
          <p className="text-sm lg:text-base font-poppins">Franchise:</p>
          <div className="flex items-center gap-5">
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
              <HiUser className="text-white text-lg lg:text-xl" />
            </div>
            <p className="text-dark_blue font-poppins font-semibold text-base lg:text-lg">
              {name}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-base font-poppins">Address:</p>
          <div className="flex items-center gap-5">
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
              <HiLocationMarker className="text-white text-lg lg:text-xl" />
            </div>
            <p className="text-dark_blue font-poppins font-semibold text-base lg:text-lg">
              {address}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-poppins lg:text-base">Phone:</p>
          <div className="flex items-center gap-5">
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
              <HiPhone className="text-white text-lg lg:text-xl" />
            </div>
            <p className="text-dark_blue font-semibold text-base lg:text-lg font-poppins">
              {phone}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm lg:text-base font-poppins">Email:</p>
          <div className="flex items-center gap-5">
            <div className="w-8 lg:w-10 h-8 lg:h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
              <FiMail className="text-white text-lg lg:text-xl" />
            </div>
            <p className="text-dark_blue font-semibold text-base lg:text-lg font-poppins">
              {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="p-4 lg:p-8">
      <ProfileCard
        name="Karen Hope"
        work="Plumber"
        rating="4.9"
        address="Jakarta, India"
        phone="+123456789"
        email="Hope@gmail.com"
        profilePicture="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default ProfilePage;
