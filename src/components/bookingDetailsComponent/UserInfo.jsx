import React from "react";
import { MapPinIcon } from '@heroicons/react/24/solid';
 

const UserInfo = ({ user}) => {
  return (

    <div>
      <div className="flex gap-2">
      <div className="top-4 left-4">
        <img
          src={user.profileImage} 
          alt="User Profile"
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      {/* User Information */}
      <div>
        <span className="flex mb-2">
          <h2 className="font-medium text-left leading-6 tracking-normal text-lg">{user.name}</h2>
          <button className="text-white w-[100px] h-[25px] ml-4 rounded-[100px] bg-[#0961F5]">
            Requested
          </button>
        </span>
        <p className="mb-2" style={{ color: '#797C7B' }}>User</p>
        <span className="flex mb-2">
          <MapPinIcon className="h-6 w-6 text-gray-500" />
          <p className="text-black">{user.location}</p>
        </span>
        <p className="font-medium text-left" style={{ fontFamily: 'var(--LabelLargeFont)', color: '#797C7B' }}>
          Booking ID: {user.bookingId}
        </p>
        </div>
        
        </div>
        {/* Content Box */}
        <div className="bg-[#F3F4FF] shadow-lg rounded-lg p-6 mr-5 w-[360px] h-[390px] ml-20">
          <p className="text-black font-medium text-left"style={{
             fontFamily: 'var(--LabelMediumFont)',
             fontSize: 'var(--LabelMediumSize)',
             lineHeight: 'var(--LabelMediumLineHeight)',
             letterSpacing: 'var(--LabelMediumTracking)',
           }}>Title</p>
          <p className="ml-4 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972] text-left">
            {user.title}
          </p>
          <p className="text-black font-medium text-left" style={{
             fontFamily: 'var(--LabelMediumFont)',
             fontSize: 'var(--LabelMediumSize)',
             lineHeight: 'var(--LabelMediumLineHeight)',
             letterSpacing: 'var(--LabelMediumTracking)',
           }}>Description</p>
          <p className="ml-4 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972] text-left">
            {user.description}
          </p>
          <p className="text-black font-medium text-left" style={{
             fontFamily: 'var(--LabelMediumFont)',
             fontSize: 'var(--LabelMediumSize)',
             lineHeight: 'var(--LabelMediumLineHeight)',
             letterSpacing: 'var(--LabelMediumTracking)',
           }}>Images & Videos</p>
          <div className="flex space-x-2 mt-2">
            {user.images && user.images.length > 0 ? (
              user.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="h-10 w-10 rounded-full" />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>

          <p className="text-black font-medium text-left" style={{
             fontFamily: 'var(--LabelMediumFont)',
             fontSize: 'var(--LabelMediumSize)',
             lineHeight: 'var(--LabelMediumLineHeight)',
             letterSpacing: 'var(--LabelMediumTracking)',
           }}>Availability</p>
          <p>From</p>
          <span className="flex gap-3 text-[#007AFF]">
            <p className="ml-5 border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.fromDate}</p>
            <p className="border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.fromTime}</p>
          </span>
          <p>To</p>
          <span className="flex gap-3 mb-3 text-[#007AFF]">
            <p className="ml-5 border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.toDate}</p>
            <p className="border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.toTime}</p>
          </span>
           
    
    </div>
    </div>
  );
};
export default UserInfo;