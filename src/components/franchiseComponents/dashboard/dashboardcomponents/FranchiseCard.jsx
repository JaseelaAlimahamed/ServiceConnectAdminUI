
import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiUser } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";
// Example Profile with Picture
const FranchiseCard = () => (
  
  <ProfileCard
    name="Franchisee Name"
    franchise="K Top"
    address="Jakarta, Indonesia"
    phone="+123456789"
    email="Hope@gmail.com"
    profilePicture="https://via.placeholder.com/150" // Add your image URL here
  />
);

const ProfileCard = ({ name, franchise, address, phone, email, profilePicture }) => {
  const [show,setshow] = useState(false)
  function setmenu(){
    setshow(e=>!e)
  }
  return (
    <div className="bg-white rounded-2xl shadow-lg h-96 border-8 border-white overflow-y-auto">
      {/* Top Section with Background and Floating Shapes */}
      <div className="relative bg-[#4D44B5] h-[100px]">
        {/* Floating Shapes */}
        <div className="absolute right-32 bottom-0 w-[120px] h-[60px] bg-[#FB7D5B] rounded-tl-lg rounded-tr-lg"></div>
        <div className="absolute right-8 bottom-0 w-[150px] h-[76px] bg-[#FCC43E] rounded-tl-lg rounded-tr-lg"></div>
      </div>

      {/* Profile Info Section */}
      <div className="relative -mt-12 px-8">
        
        <div className="flex relative items-start flex-col">
          
          <span className="p-2 absolute top-24 right-0">
                        <button className="text-[#A098AE]" onClick={setmenu} ><SlOptions /></button>
                    </span>

                    {
                            show && (
                                <div className="absolute right-0  top-28 mt-2 w-36 bg-white rounded-lg shadow-lg z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    Edit
                                    </li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    Delete
                                    </li>
                                    <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                                    View
                                    </li>
                                </ul>
                            </div>
                        )}
          {/* Profile Picture */}
          <img
            src={profilePicture}
            alt={`${name}'s Profile`}
            className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white"
          />
          <div className="flex  flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
            <h2 className="text-2xl font-bold text-[#303972]">{name}</h2>
           
          </div>

          <p className="font-semibold py-2 text-start text-gray-500">Franchisee</p>
          <div className=" flex gap-3">

          <p className="font-semibold  text-start text-gray-500">45 days left</p>
          <p className="font-semibold  text-start text-gray-500">Valid upto 12/10/2024</p>


          </div>

        </div>
      </div>

      {/* Contact Information */}
      <div className=" mt-6 px-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">

        <div>
            <p>Contact Name:</p>
            <div className="flex items-center gap-5">

            <div className="w-10  mt-2 h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
              <HiUser className="text-white text-xl" />
            </div>
              <p className=" text-dark_blue font-bold">Justin Joseph</p>
            </div>
        </div>
        <div className="  ">
            <p>Address:</p>
            <div className="flex items-center gap-5">

            <div className="w-10  mt-2 h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
            <HiLocationMarker className="text-white text-xl" />
            </div>
              <p className=" text-dark_blue font-bold">Jakarta, Indonesia</p>
            </div>
        </div>
        <div className=" ">
            <p >Phone:</p>
            <div className="flex items-center gap-5">

            <div className="w-10  mt-2 h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
            <HiPhone className="text-white text-xl" />
            </div>
              <p className=" text-dark_blue font-bold">+12 345 6789 0</p>
            </div>
        </div>
        <div className=" ">
            <p>Email</p>
            <div className="flex items-center gap-5">

            <div className="w-10  mt-2 h-10 bg-[#FB7D5B] rounded-full flex items-center justify-center">
            <FiMail className="text-white text-xl" />
            </div>
              <p className=" text-dark_blue font-bold">Hope@mail.com</p>
            </div>
        </div>
        
       
      </div>
    </div>
  );
};


export default FranchiseCard;

