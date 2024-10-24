import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const ProviderAvatar = ({ name = 'Karan Hope', role = 'Service provider', location = 'California', imageUrl = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp' }) => {
  return (
    <div className="bg-white flex flex-col sm:flex-row items-center gap-4 p-4">
      {/* Avatar Image */}
      <div className="w-16 h-16">
        <img className="rounded-full w-full h-full object-cover" src={imageUrl} alt={`${name}'s avatar`} />
      </div>

      {/* Provider Info */}
      <div>
        <span className="font-bold text-lg">{name}</span>
        <p className="text-blue-gray-600 font-semibold">{role}</p>
        <p className="flex items-center gap-2 text-gray-500">
          <FaLocationDot  size={16} />
          {location}
        </p>
      </div>
    </div>
  );
};

export default ProviderAvatar;
