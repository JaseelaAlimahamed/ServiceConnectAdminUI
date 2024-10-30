import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FiUser, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const FranchiseProfileSide = ({ user }) => (
  <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md overflow-hidden font-roboto text-[20px]">
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto p-2">
        <div className="absolute inset-0 rounded-full border-[3px] border-dark_blue transition-all duration-300"></div>

        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-full rounded-full object-cover"
        />
        <FaPencilAlt
          className="text-gray-700 cursor-pointer absolute bottom-[110px] right-1"
          size={16}
        />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h3>
        <p className="text-sm font-light text-gray-600">{`${user.location}, ${user.country}`}</p>
      </div>
    </div>
    <div className="mt-6 space-y-2">
      <ProfileDetail icon={<FiUser />} detail={user.role} />
      <ProfileDetail icon={<FiPhone />} detail={user.phone} />
      <ProfileDetail icon={<FiMail />} detail={user.email} />
      <ProfileDetail icon={<FiMapPin />} detail={user.address} />
    </div>
  </div>
);

const ProfileDetail = ({ icon, detail }) => (
  <div className="flex items-center p-4 hover:bg-gray-100 rounded-lg">
    <span className="mr-3">{icon}</span>
    <span>{detail}</span>
  </div>
);

export default FranchiseProfileSide;
