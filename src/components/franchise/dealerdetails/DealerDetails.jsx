import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../reusableComponent/Button";


function DealerDetails() {
  const navigate=useNavigate();

  const navigateToEditpage=()=>{
    navigate('/franchise/dealer/editdealer')
  }
  
  return (
    <>
      <div className="container mx-auto h-auto min-h-screen bg-blue_bg pt-20 px-4 sm:px-6 lg:px-8">
  <div className="bg-primary w-full max-w-7xl mx-auto border border-indigo-50 rounded-xl p-6 lg:p-10">
    {/* Top Section - Dealer Info */}
    <div className="flex flex-col lg:flex-row lg:space-x-8 relative">
      
      {/* Dealer Image */}
      <div className="flex-shrink-0 w-full lg:w-1/4 mb-6 lg:mb-0 mx-auto lg:mx-0 text-center">
        <img className="w-60 lg:w-80 h-40 lg:h-60 bg-blue_gray rounded-2xl mx-auto" />
      </div>
      
      {/* Dealer Information */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">Dealer Name</h3>
        <p className="text-light_gray font-poppins text-sm text-center lg:text-left">#Id: 3543324</p>
        <p className="mt-4 lg:mt-8 text-light_gray font-poppins text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      {/* Edit Button */}
      <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:translate-x-[-50%] text-center lg:text-right">
        <Button
          bgColor="bg-violet"
          width="w-28"
          height="h-10"
          borderRadius="rounded-full"
          textColor="text-primary"
          onClick={navigateToEditpage}
          showIcon={false}
        >
          Edit
        </Button>
      </div>
    </div>

    {/* Bottom Section - About and Contact */}
    <div className="flex flex-col lg:flex-row mt-8 lg:space-x-16 space-y-8 lg:space-y-0">
      {/* About Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">About</h3>
        <p className="text-light_gray font-poppins mt-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      
      {/* Contact Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-dark_blue font-poppins font-bold text-center lg:text-left">Contact</h3>
        <ul className="space-y-5 text-light_gray font-poppins mt-2">
          <li>Address: Santha Street, Kanoor</li>
          <li>Contact: 1244557875</li>
          <li>Email: Santha@email.com</li>
          <li>Whatsapp: 125547883</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default DealerDetails;
