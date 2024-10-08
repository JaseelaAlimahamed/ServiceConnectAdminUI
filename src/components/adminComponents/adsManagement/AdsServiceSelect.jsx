import React from "react";

function AdsServiceSelect() {
  return (
    <>
      <div className="flex flex-wrap gap-2 px-5">
        <div className="flex flex-col gap-2">
          <label for="franchasee">Franchasee</label>
          <select
            name="franchasee"
            id="franchasee"
            className="min-w-[15rem] p-1 h-fit border-2 border-[#D9D9D9] rounded-md"
          >
            <option disabled="disabled" selected="selected">
              Value
            </option>
            <option value="option1">Option1</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label for="serviceprovider">Service Provider</label>
          <select
            name="serviceprovider"
            id="serviceprovider"
            className="min-w-[15rem] p-1 h-fit border-2 border-[#D9D9D9] rounded-md"
          >
            <option disabled="disabled" selected="selected">
              Value
            </option>
            <option value="option1">Option1</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default AdsServiceSelect;
