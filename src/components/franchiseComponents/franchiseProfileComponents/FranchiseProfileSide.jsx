import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FiUser, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const FranchiseProfileSide = ({ user }) => {
  const [imageSrc, setImageSrc] = useState(user.image);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-xs p-2 bg-white rounded-lg shadow-2xl overflow-hidden">
      <div className="text-center">
        <div className="relative w-[186px] h-[184px] mx-auto p-2">
          <div className="absolute inset-0 rounded-full border-[3px] border-dark_blue transition-all duration-300"></div>

          <img
            src={imageSrc}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-full h-full rounded-full object-cover"
          />

          <label className="cursor-pointer absolute top-5 right-1 group">
            <FaPencilAlt className="text-gray-700" size={16} />
            <span className="absolute  text-black rounded-md bottom-5 opacity-0 group-hover:opacity-100 transition-opacity">
              Edit
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold">{`${user.firstName} ${user.lastName}`}</h3>
          <p className="text-xl font-light text-gray-600 ">{`${user.location}, ${user.country}`}</p>
        </div>
      </div>

      <div className="mt-5 space-y-2 flex justify-center ">
        <div className="text-lg">
          <ProfileDetail icon={<FiUser />} detail={user.role} />
          <ProfileDetail icon={<FiPhone />} detail={user.phone} />
          <ProfileDetail icon={<FiMail />} detail={user.email} />
          <ProfileDetail icon={<FiMapPin />} detail={user.address} />
        </div>
      </div>
    </div>
  );
};

const ProfileDetail = ({ icon, detail }) => (
  <div className="flex items-center p-4 hover:bg-gray-100 rounded-lg">
    <span className="mr-3">{icon}</span>
    <span>{detail}</span>
  </div>
);

export default FranchiseProfileSide;
