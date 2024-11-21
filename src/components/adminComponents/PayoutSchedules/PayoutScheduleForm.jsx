import React from "react";
import { FaRedo } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";

const PayoutScheduleForm = () => {
  return (
    <div className="p-8  bg-white rounded-2xl shadow-lg max-w-5xl mx-auto">
      {/* Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Type
          </label>
          <select className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>User Name/ID/Group/Location</option>
          </select>

          <label className="block mt-4 text-sm font-medium text-gray-700">
            User Name/ID
          </label>
          <select className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>User Name/ID/Group/Location</option>
          </select>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2 -ml-4 w-4 h-4"
              defaultChecked
            />
            <label className="text-sm font-medium text-gray-700">
              Auto Payout Schedule
            </label>
          </div>

          <select className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Daily/Weekly/Monthly/Yearly</option>
          </select>

          <div className="flex items-center mt-10">
            <input
              type="checkbox"
              className="mr-2 -ml-4 w-4 h-4"
              defaultChecked
            />
            <label className="text-sm font-medium text-gray-700">
              Manual Payout Schedule
            </label>
          </div>
          <input
            type="datetime-local"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Value</option>
          </select>

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Account Holder Name
          </label>
          <input
            type="text"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Value"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Bank Branch
          </label>
          <input
            type="text"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Value"
          />
        </div>

        {/* Right Column */}
        <div>
          <button className="flex items-center mt-5 bg-stone-500 text-white px-4 py-2 rounded-md text-sm">
            CHECK BALANCE
            <span className="ml-2 text-l">
              {" "}
              <GrPowerCycle />
            </span>
          </button>
          <div className="bg-gradient-to-r from-stone-700 to-stone-400 text-white h-40   rounded-lg p-6 shadow-xl  mt-4 mb-6">
            <h3 className="text-gray-900 text-sm">Lasso Kayne</h3>
            <p className="text-sm mt-5 mb-5 text-gray-700">
              4551 5667 8886 7775
            </p>
            <p>
              Account balance{" "}
              <span className="text-xl font-bold text-gray-900 mt-2">
                $121,000
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 -ml-4 w-4 h-4"
              defaultChecked
            />
            <label className="text-sm text-gray-700">Auto Payment</label>
          </div>
          <select className="w-full md:w-[90%] mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Percentage</option>
          </select>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2 -ml-4 w-4 h-4"
              defaultChecked
            />
            <label className="text-sm text-gray-700">Manual Payment</label>
          </div>
          <input
            type="text"
            className="w-full md:w-[90%] mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Amount"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            type="text"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Value"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Value"
          />

          <label className="block mt-4 text-sm font-medium text-gray-700">
            IFSC Code
          </label>
          <input
            type="text"
            className="w-full md:w-[90%] mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Value"
          />
        </div>
      </form>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-6 gap-5">
        <button
          className="border-2 border-violet text-violet px-8 py-1 md:px-10  md:py-2 rounded-full  flex justify-between"
          type="button"
        >
          Status ▼
        </button>

        <button type="button" className="bg-soft_red text-white px-8 py-1 md:px-10  md:py-2 rounded-full">
        Delete
      </button>

      <button type="submit" className="bg-violet text-white px-8 py-1 md:px-10  md:py-2  rounded-full">
        Save
      </button>
      </div>
    </div>
  );
};

export default PayoutScheduleForm;
