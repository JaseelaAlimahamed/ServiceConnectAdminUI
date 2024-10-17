import React from "react";
import AdsServiceSelect from "../../components/adminComponents/adsManagement/AdsServiceSelect";
import AdsCategory from "../../components/adminComponents/adsManagement/AdsCategory";
import AdsCards from "../../components/adminComponents/adsManagement/AdsCards";

function AdsManagement() {
  return (
    <>
      <div className="">
        <AdsCards/>
        <AdsServiceSelect/>
        <AdsCategory/>
      </div>
    </>
  );
}

export default AdsManagement;
