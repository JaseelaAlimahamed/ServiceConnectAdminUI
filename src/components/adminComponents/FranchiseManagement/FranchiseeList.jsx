import React, { useState, useEffect } from "react";
import FranchiseeCardDashboard from "../../adminComponents/FranchiseManagement/FranchiseeCardDashboard"
import FranchiseeTable from "../../adminComponents/FranchiseManagement/FranchiseeTable";

const FranchiseeList = () => {
   
    
    return (
        <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
           
                    <FranchiseeCardDashboard />
                    <FranchiseeTable/>
                    
        </div>
    );
};

export default FranchiseeList;
