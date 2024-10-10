import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const AppointmentCard = ({ franchise,user }) => {
  return (
    <div className='mr-10'>
      <div className='flex gap-2'>
      
      <div className="top-4 left-4">
        <img
          src={franchise.profileImage} // Using image URL from franchise.profileImage
          alt="Franchise Profile"
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      {/* Franchise Information */}
      <div> {/* Adjusted margin to the right of the profile image */}
        <span className='flex'>
        <h2 className="font-medium text-left leading-6 tracking-normal text-lg">{franchise.name}</h2>
        <button className="text-white w-[100px] h-[25px] ml-4 rounded-[100px] bg-[#0961F5]">
            Accepted
          </button>
       </span>
        <p className="text-gray-600 mb-2">{franchise.category}</p>
        <p className="text-gray-600">{franchise.type}</p>
        </div>
        </div>
        
        <div className="bg-[#F3F4FF] shadow-lg rounded-lg ml-20 p-6 mr-5 w-[360px] h-[390px]">
        <p className="text-black font-medium text-left" style={{
             fontFamily: 'var(--LabelMediumFont)',
             fontSize: 'var(--LabelMediumSize)',
             lineHeight: 'var(--LabelMediumLineHeight)',
             letterSpacing: 'var(--LabelMediumTracking)',
           }}>Appointment</p>

           <span className="flex gap-3 text-[#007AFF]">
            <p className="ml-5 border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.fromDate}</p>
            <p className="border-2 p-2 bg-[#7878801F] rounded-[6px]">{user.fromTime}</p>
          </span>
          
         <p className="mt-2 font-sans text-base font-medium leading-6 tracking-wider text-left text-[#303972]">Invoice: {franchise.invoice}</p>
         <div className="flex justify-between mt-1 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972]">
          

            <div className='flex gap-4'>
            <p>Sl.no</p>
            <span>
            <p>Description </p>
            <p>{franchise.description}</p>
            </span>
            </div>

            <div className='flex gap-2 '>
              <span >
            <p >Qty</p>
            <p >{franchise.qty}</p>
            </span>
            <span>
            <p>Price</p>
            <p>{franchise.price}</p>
            </span>
            <span>
            <p>Total</p>
            <p>{franchise.total}</p>
            </span>
            </div>
          
        </div>
        <div className="flex mt-5 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972]">
        <p className="ml-auto">Grand Total {franchise.total}</p>
       </div>
        <p className="mt-4 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972]">Terms and Conditions</p>
        <p className='ml-5 font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972]'>{franchise.terms}</p>
        <span className='flex gap-2 text-red mt-4'>
       <p className="font-poppins text-xs font-normal leading-4 text-left text-[#EC221F] ">Additional Requirements</p>
       <ExclamationCircleIcon className="h-6 w-6" />
       </span>
       <p className='font-bodySmall text-bodySmall font-normal leading-bodySmall tracking-bodySmall text-[#303972]'> {franchise.additionalRequirements}</p>
       

      </div>
    
    </div>
  );
};

export default AppointmentCard;
