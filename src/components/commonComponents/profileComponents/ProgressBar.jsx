import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const ProgressBar = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:-mx-2 w-[315px] lg:w-[240px] lg:max-w-[315px] mx-auto">
      <div className="flex items-center mb-4">
        <p className="font-inter text-sm font-bold leading-6 text-left text-custom-gray flex-grow">
          Total work done
        </p>
        <button className="flex items-center justify-center space-x-2 bg-button_blue text-text_blue px-2 py-1 md:px-3 md:py-1.5 rounded-md">
          <span className="font-nunito text-left whitespace-nowrap text-sm">
            This week
          </span>
          <ChevronDownIcon className="w-[10px] h-[10px]" />
        </button>
      </div>

      {/* Circular Progress Section */}
      <div className="flex justify-center items-center h-[160px] sm:h-[200px]">
        <div className="relative">
          {/* Background Circle */}
          <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border-[8px] sm:border-[10px] border-[#E8E8E8]"></div>

          {/* Progress Circle */}
          <div
            className="absolute top-0 left-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border-[8px] sm:border-[10px] border-t-[#1D6FE5] border-b-[#767676]"
            style={{ transform: "rotate(45deg)" }}
          ></div>

          {/* Text Inside the Circle */}
          <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl font-bold">
            5w: 2d
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
