import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';


const ReviewCard = ({ review,user }) => {
  return (
    <div className="mt-4 ">
      <h3 className="font-medium text-left leading-6 tracking-normal text-lg text-[#202244]">Review</h3>
      
      <div>
      <div className="space-x-4 mt-4 bg-[#F3F4FF] shadow-lg rounded-lg p-6 w-[360px] ">
      <div className='flex gap-3'>
      <img
          src={user.profileImage} 
          alt="User Profile"
          className="h-16 w-16 rounded-full object-cover"
      />
        
          <p className="font-jost text-[14px] font-semibold leading-[24.57px] text-[#202244] text-left">{review.reviewer}</p>
          
          <div className="ml-auto flex items-center justify-center space-x-2 bg-blue-100 border-2 border-blue-500 w-[80px]  h-[26px] font-semibold rounded-full px-4 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[12px] h-[11.4px] text-[#FF9C07]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.451a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.37-2.451a1 1 0 00-1.176 0l-3.37 2.451c-.784.57-1.838-.197-1.54-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.27 9.374c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.947z" />
          </svg>
          <span className="text-[#202244] font-jost text-[13px] font-semibold leading-[18.79px] text-left">4.2</span>
         </div>
         </div>
            <p className='text-[#545454]'>{review.content}</p>

            <div className="flex mt-5">
             <HeartIcon className="w-5 h-5 text-red" />
             <span className="ml-4 font-jost text-sm text-[12px] font-extrabold leading-[15.06px] text-[#202244]">760</span>
             <span className="ml-auto font-jost text-sm text-[12px] font-extrabold leading-[15.06px] text-[#202244]">2 Weeks Ago</span>

           </div>
 
        </div>
      
      </div>
    </div>
  );
};

export default ReviewCard;
