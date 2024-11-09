import React from "react";

function AdsServiceSelect() {
  return (
    <>
      <div className="flex flex-wrap gap-2 px-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="franchisee">Franchisee</label>
          <select
            name="franchisee"
            id="franchisee"
            className="min-w-[15rem] p-1 h-fit border-2 border-[#D9D9D9] rounded-md text-gray-400"
          >
            <option disabled value="" className="text-gray-400" selected>
              Select Franchisee
            </option>
            <option value="option1" className="text-black">Option1</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="serviceprovider">Service Provider</label>
          <select
            name="serviceprovider"
            id="serviceprovider"
            className="min-w-[15rem] p-1 h-fit border-2 border-[#D9D9D9] rounded-md text-sm text-gray-400"
          >
            <option disabled value="" className="selected">
              Select Provider
            </option>
            <option value="option1">Option1</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default AdsServiceSelect;
